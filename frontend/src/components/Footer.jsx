import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Your ultimate destination for timeless choices and lasting quality. At Forever, we believe in creating shopping experiences that go beyond trends and fleeting fads. Every product we offer is selected to bring enduring value, combining style, reliability, and purpose for those who seek more than just another purchase. Whether you're refreshing your wardrobe, upgrading your home, or looking for unique gifts, Forever ensures each choice you make is meaningful and built to last. Discover products designed for your life today and cherished for the years to come—because at Forever, every choice truly lasts a lifetime.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8667037069</li>
                <li>syedmohamedarif2208@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Syed Mohamed Arif S - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
