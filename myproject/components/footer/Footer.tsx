'use client';

import React, { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon1 from '@/public/images/icon/sms-white.svg';
import icon2 from '@/public/images/icon/call-white.svg';
import icon3 from '@/public/images/icon/location.svg';
import FooterLogo from '@/public/images/logos-jd/Logo-white.png';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import Services from '../../api/service';

interface FooterProps { }

const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className=' bg-footer '>
      <div className='container pt-50 mx-100 row align-items-start'>
        <div className='col-lg-4 mb-lg-2 mb-4'>
          <div>
            {/* <img src={FooterLogo} alt="" /> */}
            <Image src={FooterLogo} alt='footer-img' width={300}
              height={300}></Image>
            <p className='text-white'>Your trusted partner in healthcare revenue cycle management</p>
            <div className='d-flex justify-content-start align-items-center gap-5 pt-2'>
              <p className='footer-icons'><BsTwitterX /></p>
              <p className='footer-icons'><FaLinkedinIn /></p>
              <p className='footer-icons'><FaInstagram /></p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-lg-2 mb-3'>
          <p className='text-white font-weight-cls'>MENU</p>
          <ul>
            <li>
              <Link href="/" className='text-white'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className='text-white'>
                About Us
              </Link>


            </li>
            <li>
              <Link href="/" className='text-white'>
                Software Expertise
              </Link>


            </li>
            <li>
              <Link href="/" className='text-white'>
                Career
              </Link>


            </li>
            <li>
              <Link href="/" className='text-white'>
                Contact
              </Link>


            </li>
          </ul>
        </div>
        <div className="col-lg-4 mb-lg-2 mb-3">
          <div className="d-flex flex-column  gap-4">

            <p className="text-white font-weight-cls mb-0">Contact</p>

            <p className="text-white mb-0 d-flex justify-content-start align-items-start gap-3 "> <span className='fs-5 fw-4'><FaLocationDot /></span>
              <span>
                311 Elm Street, Ste 270-1113 <br />
                Cincinnati, OH 45202 <br />
                United States </span>
            </p>

            <p className="text-white mb-0 d-flex justify-content-start align-items-start gap-3 "> <span><FaPhoneAlt /></span>
              <span>
                <a href="tel:+281270-3963" className="text-white">(281) 270-3963</a>
              </span>
            </p>

            <p className="text-white mb-0 d-flex justify-content-start align-items-start gap-3 ">
              <span><IoMdMail /></span>
              <span>

                <a href="mailto:Info@jdscarercmtechsolutions.com" className="text-white">
                  Info@jdscarercmtechsolutions.com
                </a>
              </span>
            </p>

          </div>
        </div>

      </div>
      <hr className='white-line' />
      <div className='container text-white d-flex flex-lg-row gap-lg-0 gap-3 flex-column justify-content-between align-items-center pt-10 pb-3' >
        <p className='text-lg-justify text-center' > &copy; 2025 All rights reserved by JD's Care RCM Tech Solutions.</p>
        <p>Designed by <a className='text-white' target='blank' href="https://yulanto.com">Yulanto Web Creations</a> </p>
      </div>
    </footer >
  );
};

export default Footer;
