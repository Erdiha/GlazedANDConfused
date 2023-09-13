import React, { useEffect, useRef, useState } from 'react';
import {
  Input,
  Textarea,
  Button,
  Text,
  Tooltip,
  Spinner,
} from '@nextui-org/react';
import { inputPlaceHolder } from '../components/data/texts';
import { motion } from 'framer-motion';
import { EmailSent, EmailSending } from '../components/email/VerifyEmailSent';
import { useMediaQuery } from 'react-responsive';
import {
  FormData,
  EmailResponse,
  IAddress,
  AddressProps,
} from '../components/types';

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState<EmailResponse>({
    openContainer: false,
    mailSent: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const size = 'lg';
  const [suggestions, setSuggestions] = useState<IAddress[]>([]);
  let [isLoading, setIsLoading] = useState(false);
  const [emailResponse, setEmailResponse] = useState([
    'Email Sent!',
    'WE WILL GET BACK TO YOU WITHIN 24 HOURS WITH A PRICE QUOTE',
  ]);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    hearAboutUs: '',
    eventDescription: '',
  });

  const suggestionItems = suggestions?.map((suggestion, index) => (
    <Text
      onClick={() => handleSelection(suggestion.label)}
      key={index}
      css={{
        textAlign: 'left',
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '5px',
        borderRadius: '10px',
        transition: 'all 0.5s ease ',
        cursor: 'pointer',
        backgroundColor: '$accents2',
        boxShadow: ' 0px 0px 5px pink',
        '&:hover': {
          border: '1px var(--primary-pink) solid',
          transform: 'scale(1.04)',
        },
      }}
    >
      {suggestion.label}
    </Text>
  ));

  //handles the change when user type in input
  const handleChange = (e: any) => {
    const { name, value, defaultValue } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.toString(), // Convert the value to a string
    }));
  };

  //handles the dropdown map/address
  const handleParams = (params: any) => {
    const { name, value } = params.target;

    setIsDropdownOpen(true);

    handleChange(params);

    // Fetch address suggestions from Geoapify API
    const requestOptions = {
      method: 'GET',
    };
    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const suggestions: IAddress[] = result?.features?.map(
          (feature: any, index: number) => {
            const addressProps: AddressProps = feature.properties;
            const {
              address_line1,
              address_line2,
              city,
              country,
              country_code,
              county,
            } = addressProps;

            const label = `${address_line1}, ${address_line2}, ${city}, ${country}`;
            return {
              label,
              id: index,
            };
          }
        );
        setSuggestions(suggestions);
      })
      .catch((error) => console.log('error', error));
  };
  const handleEmailSent = () => {
    // Reset the form fields after successful email submission
    setFormData({
      name: '',
      email: '',
      address: '',
      eventDate: '',
      eventTime: '',
      guestCount: '',
      hearAboutUs: '',
      eventDescription: '',
    });
    setIsLoading(false);

    // Provide user feedback or redirect here if needed
  };

  const handleError = (error: any): void => {
    setEmailResponse(['Failed to send email', error]);
    setIsLoading(false);
    setIsEmailSent((prevIsEmailSent) => ({
      ...prevIsEmailSent,
      mailSent: true,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setIsEmailSent((prevIsEmailSent) => ({
      ...prevIsEmailSent,
      openContainer: true,
    }));
    const { eventDate, eventTime } = formData;

    const [year, month, day] = eventDate.split('-');
    formData.eventDate = `${month}/${day}/${year}`;
    const [hours, minutes] = eventTime.split(':');
    const hour = parseInt(hours, 10);
    const amPm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    formData.eventTime = `${formattedHour}:${minutes} ${amPm}`;

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEmailResponse([
          'Email Sent! ',
          'WE WILL GET BACK TO YOU WITHIN 24 HOURS WITH A PRICE QUOTE',
        ]);
        setIsEmailSent((prevIsEmailSent) => ({
          ...prevIsEmailSent,
          mailSent: true,
        }));
        handleEmailSent(); // Handle success
      } else {
        handleError(response.statusText); // Handle error
      }
    } catch (error: any) {
      handleError(error); // Handle fetch error
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelection = (label: string) => {
    setFormData((prevData) => ({
      ...prevData,
      ['address']: label,
    }));

    setIsDropdownOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col w-full min-h-screen md:pt-20 pt-5 relative justify-center items-center px-2  bg-black/10 truck"
    >
      {isEmailSent.openContainer ? (
        <div className="w-[50%] md:max-h-[85vh]  h-[70vh] max-w-[40rem] flex bg-primary-offWhite justify-center items-center ">
          {isLoading ? (
            <EmailSending isLoading={isLoading} />
          ) : (
            isEmailSent.mailSent && (
              <EmailSent
                emailResponse={emailResponse}
                setIsLoading={setIsLoading}
                setIsEmailSent={setIsEmailSent}
              />
            )
          )}
        </div>
      ) : (
        <motion.form
          initial={{ x: -100 + '%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className="md:max-w-[60rem] px-5 md:px-10 gap-4 pb-5 md:pb-10 z-50 flex md:justify-between md:font-semibold flex-col bg-primary-pink/80 
          backdrop-blur-2xl shadow-4xl md:max-h-[80vh] h-full"
          onSubmit={handleSubmit}
        >
          <p className="text-md  justify-center items-center font-semibold italic uppercase contactHeaderText text-center  flex text-slate-800/70 md:text-2xl break-words max-w-[100%] pt-3 md:pt-16 md:leading-9 md:p-4">
            PLEASE LET US KNOW YOUR EVENT DETAILS AND WE WILL GET BACK TO YOU
            WITHIN 24 HOURS WITH A PRICE QUOTE.
          </p>
          <hr className="w-full text-center self-center " />
          <p className="md:text-[1.3rem] md:tracking-wide md:leading-8 text-center text-gray-900 italic text-[12px] md:p-4">
            If you call to receive to a quote, you will be directed to this
            website. The quickest way to get a quote is by filling out the form
            on this page.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            className="flex flex-col border-t-2 border-gray-300 justify-evenly  md:gap-8 gap-10 relative md:py-8  pt-9 pb-3"
          >
            <div className="flex  justify-between items-center gap-4 font-bold">
              <Input
                id="inputCustom"
                type="date" // Use text type to accept MM/DD/YYYY
                value={formData?.eventDate}
                onChange={(e) => handleChange(e)}
                name="eventDate"
                clearable
                required
                css={{ width: '100%' }}
                shadow={true}
                size={size}
                style={{ fontWeight: 'bold' }}
                label={isMobile ? undefined : inputPlaceHolder[3]}
                labelPlaceholder={isMobile ? inputPlaceHolder[3] : undefined}
              />

              <Input
                id="inputCustom"
                type="time"
                value={formData.eventTime}
                onChange={(e: any) => handleChange(e)}
                name="eventTime"
                clearable
                style={{ fontWeight: 'bold' }}
                label={isMobile ? undefined : inputPlaceHolder[4]}
                labelPlaceholder={isMobile ? inputPlaceHolder[4] : undefined}
                required
                css={{ width: '100%' }}
                shadow={true}
                size={size}
              />
            </div>
            <Input
              style={{ fontWeight: 'bold' }}
              id="inputCustom"
              label={isMobile ? undefined : inputPlaceHolder[0]}
              labelPlaceholder={isMobile ? inputPlaceHolder[0] : undefined}
              onChange={(e: any) => handleChange(e)}
              required
              name="name"
              clearable
              shadow={true}
              value={formData.name}
              size={size}
            />

            <Input
              style={{ fontWeight: 'bold' }}
              id="inputCustom"
              type="email"
              value={formData.email}
              label={isMobile ? undefined : inputPlaceHolder[1]}
              labelPlaceholder={isMobile ? inputPlaceHolder[1] : undefined}
              onChange={(e: any) => handleChange(e)}
              required
              name="email"
              clearable
              shadow={true}
              size={size}
            />

            <div className="relative flex w-full" style={{ width: '100%' }}>
              <div className="flex flex-row gap-4 w-full">
                <Tooltip
                  css={{ display: 'flex' }}
                  className="flex-grow"
                  content={formData.address}
                >
                  <Input
                    style={{ fontWeight: 'bold' }}
                    id="inputCustom"
                    type="text"
                    name="address"
                    width="100%"
                    onChange={(e) => handleParams(e)}
                    label={isMobile ? undefined : inputPlaceHolder[2]}
                    labelPlaceholder={
                      isMobile ? inputPlaceHolder[2] : undefined
                    }
                    value={formData.address}
                    required
                    clearable
                    shadow={true}
                    size={size}
                  />
                </Tooltip>
                <Input
                  style={{ fontWeight: 'bold' }}
                  id="inputCustom"
                  value={formData.guestCount}
                  label={isMobile ? undefined : inputPlaceHolder[5]}
                  labelPlaceholder={isMobile ? inputPlaceHolder[5] : undefined}
                  onChange={(e: any) => handleChange(e)}
                  required
                  name="guestCount"
                  clearable
                  css={{
                    display: 'flex-1',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                  shadow={true}
                  size={size}
                />
              </div>

              {isDropdownOpen && suggestions && (
                <div className="flex flex-col rounded-xl bg-slate-200 p-4 bg-gray-800 absolute md:w-[70%] w-[100%] h-[20rem] overflow-y-scroll  z-[999] lg:top-[4.8rem] top-[2.8rem] justify-start items-start gap-2 ">
                  {suggestionItems}
                </div>
              )}
            </div>

            <Input
              style={{ fontWeight: 'bold' }}
              id="inputCustom"
              value={formData.hearAboutUs}
              label={isMobile ? undefined : inputPlaceHolder[6]}
              labelPlaceholder={isMobile ? inputPlaceHolder[6] : undefined}
              onChange={(e: any) => handleChange(e)}
              required
              clearable
              name="hearAboutUs"
              shadow={true}
              size={size}
            />
            <Textarea
              id="inputCustom"
              label={isMobile ? undefined : inputPlaceHolder[7]}
              labelPlaceholder={isMobile ? inputPlaceHolder[7] : undefined}
              value={formData.eventDescription}
              onChange={(e: any) => handleChange(e)}
              required
              name="eventDescription"
              shadow={true}
              size={isMobile ? 'xs' : 'xl'}
            />
          </motion.div>
          <Button
            type="submit"
            size={isMobile ? 'md' : 'xl'}
            style={{
              letterSpacing: '1.5px',
              fontSize: isMobile ? '18px' : '23px',
              fontWeight: 'bold',
              width: 'fit-content',
              alignSelf: 'end',
              textShadow: '0px 0px 4px gray',
              borderRadius: 2,
              backgroundColor: ' rgb(100 181 246)',
            }}
            className="btn shadow-lg font-bold md:text-lg text-sm"
          >
            SUBMIT
          </Button>
        </motion.form>
      )}
    </div>
  );
};

export default Contact;
