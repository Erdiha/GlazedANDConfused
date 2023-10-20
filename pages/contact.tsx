import React, { useEffect, useRef, useState } from 'react';
import { Input, Textarea, Button, Text, Radio, Tooltip } from '@nextui-org/react';
import { FiPhoneCall } from 'react-icons/fi';
import { inputPlaceHolder } from '../components/data/texts';
import { frameData, motion } from 'framer-motion';
import { EmailSent, EmailSending } from '../components/email/VerifyEmailSent';
import { useMediaQuery } from 'react-responsive';
import { FormData, EmailResponse, IAddress, AddressProps } from '../components/types';
import BrowserDetection from '@/components/BrowserDetection';

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState<EmailResponse>({
    openContainer: false,
    mailSent: false,
  });
  const browserType: any = BrowserDetection();
  const [showPhoneNUmber, setShowPhoneNumber] = useState({ show: false, phone: '(201) 951 3864' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });
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
    mobileEventTime: { time: '', ampm: '' },
    guestCount: '',
    hearAboutUs: '',
    eventDescription: '',
    isMobile,
    browserType,
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
  // Handles the change when the user types in an input
  const handleChange = (e: any) => {
    if (e === 'PM' || e === 'AM') {
      setFormData((prevData) => ({
        ...prevData,
        mobileEventTime: {
          ...prevData.mobileEventTime,
          ampm: e, // Update the ampm property
        },
      }));
    } else if (e.target.name === 'time') {
      setFormData((prevData) => ({
        ...prevData,
        mobileEventTime: {
          ...prevData.mobileEventTime,
          time: e.target.value.toString(), // Update the time property
        },
      }));
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.toString(), // Convert the value to a string
      }));
    }
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
        const suggestions: IAddress[] = result?.features?.map((feature: any, index: number) => {
          const addressProps: AddressProps = feature.properties;
          const { address_line1, address_line2, city } = addressProps;

          //const [a, b, c] = address_line2.split(',');
          const label = `${address_line1}, ${city} `;

          return {
            label,
            id: index,
          };
        });
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
      mobileEventTime: { time: '', ampm: '' },
      guestCount: '',
      hearAboutUs: '',
      eventDescription: '',
      isMobile,
      browserType,
    });
    setIsLoading(false);

    // Provide user feedback or redirect here if needed
  };

  const handleError = (error: any): void => {
    const phoneNum = '(201) 951-3864';
    setEmailResponse([`Failed to send.`, `Sorry For the Inconvenience\nPlease Call: ${phoneNum}`]);
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
    // if(isMobile){
    formData.eventTime = formData.mobileEventTime.time + ' ' + formData.mobileEventTime.ampm;
    // }else{
    //   const { eventDate, eventTime } = formData;

    // const [year, month, day] = eventDate.split('-');
    // formData.eventDate = `${month}/${day}/${year}`;
    // const [hours, minutes] = eventTime.split(':');
    // const hour = parseInt(hours, 10);
    // const amPm = hour >= 12 ? 'PM' : 'AM';
    // const formattedHour = hour % 12 || 12;
    // formData.eventTime = `${formattedHour}:${minutes} ${amPm}`;
    // }
    console.log(formData);
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
  console.log('types', browserType, isMobile);
  return (
    <div className="flex flex-col w-full min-h-screen px-[2%] py-[12%] pt-[18%] md:p-[15%] lg:p-[15%]  2xl:p-[10%]  relative justify-center items-center bg-black/10 truck">
      {isEmailSent.openContainer ? (
        <div className="w-full  h-[60vh] max-w-[40rem] flex bg-primary-offWhite justify-center items-center">
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
          className="p-[1rem] pb-8 md:px-[1.5rem] bg-white/50 flex gap-1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '50rem',
            backgroundColor: 'var(--primary-pink)',
          }}
          onSubmit={handleSubmit}
        >
          <p className="text-md justify-center items-center font-semibold italic uppercase contactHeaderText text-center flex text-slate-800/70 md:text-2xl break-words max-w-[100%] md:pt-10 md:leading-9 md:p-4 w-full p-2">
            PLEASE LET US KNOW YOUR EVENT DETAILS AND WE WILL GET BACK TO YOU WITHIN 24 HOURS WITH A
            PRICE QUOTE.
          </p>
          <hr className="w-full text-center self-center" />
          <p className="md:text-[1.3rem] md:tracking-wide md:leading-8 text-center text-gray-900 italic text-[11px] md:p-4 w-full p-2">
            The quickest way to get a quote is by filling out the form on this page. <br></br>
            If you need help to fill out the form, please call us at{' '}
            <a
              href="tel:201-951-3864"
              className="text-blue-800 font-bold no-underline hover:underline"
            >
              {showPhoneNUmber.phone}
            </a>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            className="flex flex-col border-t-2 border-gray-300 justify-between relative w-full h-full p-2 md:p-8 gap-4 md:gap-5"
          >
            <div className="flex justify-between items-center gap-2">
              <Input
                id="inputCustom"
                label={inputPlaceHolder[0]}
                onChange={(e: any) => handleChange(e)}
                required
                name="name"
                clearable
                type="text"
                shadow={true}
                value={formData.name}
                css={{ width: '100%' }}
              />

              <Input
                id="inputCustom"
                type="email"
                value={formData.email}
                label={inputPlaceHolder[1]}
                onChange={(e: any) => handleChange(e)}
                required
                name="email"
                clearable
                shadow={true}
                css={{ width: '100%' }}
              />
            </div>
            <div className="flex justify-between items-center gap-2">
              <Input
                id="inputCustom"
                type="date"
                value={formData?.eventDate}
                onChange={(e) => handleChange(e)}
                name="eventDate"
                clearable
                required
                css={{ width: '100%' }}
                shadow={true}
                label={inputPlaceHolder[3]}
              />

              <Input
                id="inputCustom"
                type="text"
                value={formData.mobileEventTime.time}
                onChange={(e: any) => handleChange(e)}
                name="time"
                clearable
                label={inputPlaceHolder[4]}
                required
                css={{ width: '100%' }}
                shadow={true}
              />
              <Radio.Group
                isRequired
                value={formData.mobileEventTime.ampm}
                onChange={(e: any) => handleChange(e)}
                orientation="horizontal"
                className=" h-10  text-black font-semibold flex justify-center
               items-center self-end"
              >
                <Radio size="sm" value="AM">
                  AM
                </Radio>
                <Radio size="sm" value="PM">
                  PM
                </Radio>
              </Radio.Group>
            </div>

            <div className="flex w-full h-full relative ">
              <Input
                id="inputCustom"
                type="address"
                name="address"
                width="100%"
                onChange={(e) => handleParams(e)}
                label={inputPlaceHolder[2]}
                value={formData.address}
                clearable
                shadow={true}
              />
              {isDropdownOpen && suggestions && (
                <div className="flex flex-col rounded-md bg-slate-200 p-5 space-y-1  bg-gray-800/70 absolute w-full h-fit min-h-full  overflow-y-scroll z-[999] top-[101%]  justify-evenly items-start">
                  {suggestionItems}
                </div>
              )}
            </div>

            <div className="flex gap-2 w-full">
              <Input
                id="inputCustom"
                value={formData.hearAboutUs}
                label={inputPlaceHolder[6]}
                onChange={(e: any) => handleChange(e)}
                clearable
                name="hearAboutUs"
                shadow={true}
                css={{ width: '60%' }}
              />
              <Input
                id="inputCustom"
                value={formData.guestCount}
                label={inputPlaceHolder[5]}
                onChange={(e: any) => handleChange(e)}
                name="guestCount"
                clearable
                css={{ width: '40%' }}
                shadow={true}
              />
            </div>
            <Textarea
              id="inputCustom"
              label={inputPlaceHolder[7]}
              value={formData.eventDescription}
              onChange={(e: any) => handleChange(e)}
              name="eventDescription"
              shadow={true}
              size={isMobile ? 'xs' : 'xl'}
            />
          </motion.div>
          <Tooltip
            className={`absolute transition-all duration-500 ease-in-out bottom-5 shadow-xl rounded-full hover:scale-110 md:bottom-10 left-6 md:left-14 ${
              isMobile ? 'w-10 h-10' : 'w-12 h-12'
            } cursor-pointer bg-transparent`}
            content="CALL US"
          >
            <span
              className={`shadow-md bg-transparent rounded-full shadow-blue-400 transform origin-center transition-transform duration-500 ease-in-out ${
                showPhoneNUmber.show ? '-rotate-0' : 'rotate-90'
              }`}
              onClick={() => setShowPhoneNumber((prev) => ({ ...prev, show: !prev.show }))}
            >
              <FiPhoneCall size="md" />
            </span>
          </Tooltip>
          <a
            href="tel:201-951-3864"
            className={`w-fit h-fit absolute left-20 bottom-5 md:bottom-10 text-blue-50 font-bold border-[1px] border-b-white ${
              showPhoneNUmber.show ? 'opacity-100 h-8' : 'opacity-0 h-0'
            } transition-all duration-500 ease-in-out md:left-32 text-xl font-semibold p-2 shadow-md rounded`}
          >
            {showPhoneNUmber.phone}
          </a>

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
              backgroundColor: 'rgb(100 181 246)',
            }}
            className="btn shadow-lg font-bold md:text-lg text-sm md:mr-8 mr-2"
          >
            SUBMIT
          </Button>
        </motion.form>
      )}
    </div>
  );
};

export default Contact;
