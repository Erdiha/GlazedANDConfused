import React from 'react';
import  { CollapseProps, Space, Typography } from 'antd';
import { Collapse } from 'antd';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Our Start',
    children: (
      <p className='font-sans break-words text-xl tracking-wider'>
        When Danny first saw a donut machine in sunny California on his
        honeymoon back in 2014 he knew it would be a huge success in New York
        City. The idea was simple...bring donut joy to the streets of NYC. So
        Danny and Larry founded Glazed & Confused in April 2015. With their
        signature creations, comprised of delectable glazes and toppings, they
        have gone from streets of the five boroughs, to wedding halls in the New
        Jersey suburbs, to Long Island, the Hamptons, Connecticut, even Boston.
        Now they have brought their donuts all the way back to the West Coast!
      </p>
    ),
  },
  {
    key: '2',
    label: 'Our Vision',
    children: (
      <p className='font-sans break-words text-xl tracking-wider'>
        Since conquering the street fair scene, the business has expanded into
        private events including weddings, bat/bar mitzvahs, corporate parties,
        and charity events. We love bringing our lively trucks to impress guests
        and make a special event that much more memorable. Whether an informal
        gathering or that once in a lifetime moment, we look forward to catering
        your next event! You can still find us at local food trucks festivals
        and we always tells our guests we will be wherever there is a need for
        donuts
      </p>
    ),
  },
  {
    key: '3',
    label: 'Our Growth',
    children: (
      <p className='font-sans break-words text-xl tracking-wider'>
        When Danny and Larry began their journey in 2015, they never imagined
        how far their mini donuts would take them. Danny did not know that five
        years later, he would bring his mobile food business to California where
        it all began. After successfully building and operating 3 food trucks in
        the tri-state area, Danny expanded to LA/Orange county in 2020. But
        donut worry NJ/NY Glazed fans--Larry can still be found running the
        trucks on the East Coast!
      </p>
    ),
  },
];

const WhatWeDo: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className='w-full h-full flex justify-center items-center  bg-slate-300 border-l-2 border-black'>
      <Collapse
        className='w-full justify-center items-center'
        items={items}
        defaultActiveKey={['0']}
        onChange={onChange}
      />
    </div>
  );
};

export default WhatWeDo;
