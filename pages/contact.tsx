import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import { Input, Textarea, Button, Text, Tooltip } from '@nextui-org/react';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import Navbar from '../components/Navbar/Navbar';
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
  const size = 'xl';
  useEffect(() => {
    if (typeof window !== undefined) {
      window.innerWidth < 768 && setIsMobile(true);
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
        padding: '10px 10px',
        borderBottom: '1px solid #ccc',
        cursor: 'pointer',
        '&:hover': { backgroundColor: 'SeaShell', transform: 'scale(0.98)' },
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
    <div className='flex flex-col  h-screen w-screen  relative md:justify-center md:items-center  bg-blue-300/50'>
      <div className='w-full flex fixed bottom-0 md:top-0 z-[9999] '>
        <Navbar />
      </div>
      <form
        className='max-w-5xl md:max-h-[90%]  z-[9999] mx-auto flex md:justify-evenly  h-full shadow-md md:font-semibold  px-6 bg-blue-450 flex-col pt-[5%] gap-4'
        onSubmit={handleSubmit}>
        <p className='text-md font-bold italic uppercase contactHeaderText text-start px-1 flex text-black/70 md:text-xl'>
          Hi! Let us know how we can help and we’ll respond within 24 hours.
        </p>
        <div className='flex flex-col bg-black/10 backdrop-blur-xl md:gap-14 gap-10 py-8 border-[1px] border-gray-100 p-4 relative rounded-lg'>
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
        </div>
        <Button
          type='submit'
          size='lg'
          style={{
            letterSpacing: '1.5px',
            backgroundColor: '#FF52A2',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          className='btn w-full'>
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
