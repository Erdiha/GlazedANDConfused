import { useEffect, useRef, useState } from 'react';
import { Input, Textarea, Button, Text, Tooltip } from '@nextui-org/react';
import 'react-datepicker/dist/react-datepicker.css';

import { motion } from 'framer-motion';
import { DatePicker, Space } from 'antd';
interface AddressProps {
  address_line1: string;
  address_line2: string;
  city: string;
  country: string;
  country_code: string;
  county: string;
  county_code: string;
}

interface IAddress {
  label: string;
}

const ContactForm = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.innerWidth < 768 && setIsMobile(true);
      // window.scrollTo(0, document.body.scrollHeight);
    }
  }, []);
  const inputPlaceHolder = [
    'Name',
    'Email',
    'Address',
    'Event Date',
    'Event Time',
    'Guest Count',
    'How Did You Hear About Us?',
    'Event Description',
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    hearAboutUs: '',
    eventDescription: '',
  });
  const [suggestions, setSuggestions] = useState<IAddress[]>([]);
  const size = isMobile ? 'sm' : 'xl';
  const suggestionItems = suggestions?.map((suggestion, index) => (
    <Text
      onClick={() => handleSelection(suggestion.label)}
      key={index}
      css={{
        textAlign: 'left',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',

        cursor: 'pointer',
        backgroundColor: '$accents2',
        '&:hover': {
          backgroundColor: 'SeaShell',
          transform: 'scale(0.98)',
        },
      }}>
      {suggestion.label}
    </Text>
  ));

  const handleChange = (e: any) => {
    const { name, value, defaultValue } = e.target;
    console.log('handleChange called:', e.target.name, value, defaultValue);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.toString(), // Convert the value to a string
    }));
  };

  console.log('formData', formData);
  const handleParams = (params: any) => {
    setIsDropdownOpen(true);
    console.log('paramssss', params.target);
    const { name, value } = params.target;
    handleChange(params);
    // Fetch address suggestions from Geoapify API
    const api = '15d397821f41484c83e9205ef20bef3b';
    const requestOptions = {
      method: 'GET',
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=15d397821f41484c83e9205ef20bef3b`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('result', result);
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
          },
        );
        setSuggestions(suggestions);
      })
      .catch((error) => console.log('error', error));

    console.log('suggestions', suggestions);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (you can add backend integration here)
    console.log('Form data submitted:', formData);
    // Reset the form after submission
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
    setSelectedItem('');
  };

  const handleSelection = (label: string) => {
    setFormData((prevData) => ({
      ...prevData,
      ['address']: label,
    }));
    setSelectedItem('');
    setIsDropdownOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className='flex flex-col w-full min-h-screen  relative md:justify-center md:items-center  bg-black/10 truck'>
      <motion.form
        initial={{ x: -100 + '%' }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='md:max-w-[60rem] px-5 md:px-10 gap-1 pb-10  z-50  flex md:justify-between  md:h-[90%] shadow-lg md:font-semibold  flex-col  bg-[#FF52A2]'
        onSubmit={handleSubmit}>
        <p className='text-md  justify-center items-center font-bold italic uppercase contactHeaderText text-center  flex text-slate-900/70 md:text-[1.75rem] break-words max-w-[100%] pt-20 md:pt-10'>
          PLEASE LET US KNOW YOUR EVENT DETAILS AND WE WILL GET BACK TO YOU
          WITHIN 24 HOURS WITH A PRICE QUOTE.
        </p>
        <hr className='w-full text-center self-center ' />
        <p className='md:text-[1.2rem] text-center text-gray-900 italic'>
          If you call to receive to a quote, you will be directed to this
          website.
        </p>

        <p className='md:text-[1.2rem] text-center text-gray-900 italic'>
          The quickest way to get a quote is by filling out the form on this
          page.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
          className='flex flex-col border-t-4 border-gray-300 justify-evenly backdrop-blur-xl md:gap-12 gap-5 relative py-6 md:py-16'>
          <div className='flex  justify-between items-center gap-4  '>
            <Input
              type='date'
              value={formData.eventDate}
              onChange={(e: any) => handleChange(e)}
              name='eventDate'
              clearable
              labelPlaceholder={`${isMobile ? inputPlaceHolder[3] : ''}`}
              required
              css={{ width: '100%' }}
              shadow={true}
              size={size}
            />
            <Input
              type='time'
              value={formData.eventTime}
              onChange={(e: any) => handleChange(e)}
              name='eventTime'
              clearable
              labelPlaceholder={`${isMobile ? inputPlaceHolder[4] : ''}`}
              required
              css={{ width: '100%' }}
              shadow={true}
              size={size}
            />
          </div>
          <Input
            labelPlaceholder={inputPlaceHolder[0]}
            onChange={(e: any) => handleChange(e)}
            required
            name='name'
            color='default'
            clearable
            shadow={true}
            value={formData.name}
            size={size}
          />

          <Input
            type='email'
            value={formData.email}
            labelPlaceholder={inputPlaceHolder[1]}
            onChange={(e: any) => handleChange(e)}
            required
            name='email'
            clearable
            shadow={true}
            size={size}
          />

          <div className='relative flex w-full' style={{ width: '100%' }}>
            <div className='flex flex-row gap-4 w-full'>
              <Tooltip
                css={{ display: 'flex' }}
                className='flex-grow'
                content={formData.address}>
                <Input
                  type='text'
                  name='address'
                  width='100%'
                  onChange={(e) => handleParams(e)}
                  labelPlaceholder={inputPlaceHolder[2]}
                  value={formData.address}
                  required
                  clearable
                  shadow={true}
                  size={size}
                />
              </Tooltip>
              <Input
                value={formData.guestCount}
                labelPlaceholder={inputPlaceHolder[5]}
                onChange={(e: any) => handleChange(e)}
                placeholder='Guest Count'
                required
                name='guestCount'
                clearable
                css={{ display: 'flex-1' }}
                shadow={true}
                size={size}
              />
            </div>

            {isDropdownOpen && suggestions && (
              <div className='flex flex-col rounded-md bg-slate-200 p-2 absolute overflow-y-scroll  z-[999] top-10'>
                {suggestionItems}
              </div>
            )}
          </div>

          <Input
            value={formData.hearAboutUs}
            labelPlaceholder={inputPlaceHolder[6]}
            onChange={(e: any) => handleChange(e)}
            required
            clearable
            name='hearAboutUs'
            shadow={true}
            size={size}
          />
          <Textarea
            labelPlaceholder={inputPlaceHolder[7]}
            value={formData.eventDescription}
            onChange={(e: any) => handleChange(e)}
            required
            name='eventDescription'
            shadow={true}
            size={size}
          />
        </motion.div>
        <Button
          type='submit'
          size='xl'
          style={{
            letterSpacing: '1.5px',
            fontSize: '30px',
            fontWeight: 'bold',
            width: 'fit-content',
            alignSelf: 'end',
            borderRadius: 10,
            backgroundColor: ' rgb(100 181 246)',
          }}
          className='btn shadow-lg font-bold text-xl'>
          SUBMIT
        </Button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
