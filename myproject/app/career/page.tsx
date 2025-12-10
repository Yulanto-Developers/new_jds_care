'use client';

import React, { Fragment, useState } from 'react';
import Header from '@/components/header/Header';
import Scrollbar from '@/components/scrollbar/scrollbar';
import iIcon from '@/public/images/icon/eye-icon.svg';
import Footer from '@/components/footer/Footer';
import CtaSection from '@/components/CtaSection/CtaSection';
import icon from '@/public/images/icon/magic.svg';
import gImg1 from '@/public/images/gallery/cp-img01.jpg';
import gImg2 from '@/public/images/gallery/cp-img02.jpg';
import gImg3 from '@/public/images/gallery/cp-img03.jpg';
import gImg4 from '@/public/images/gallery/cp-img04.jpg';
import gImg5 from '@/public/images/gallery/cp-img05.jpg';
import gImg6 from '@/public/images/gallery/cp-img06.jpg';
import Process from './Process';
import CareerTeam from './CareerTeam';
import WorkSection from '../team/work';
import GallerySection from './Gallery';
import Image from 'next/image';
import jobs from '../../api/Jobs'

import '../../styles/about.css'
import '../../styles/custome.css'

const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null as File | null,
    message: "",
  });

  // FIXED TYPE FOR INPUT + FILE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // FIXED TYPE FOR FORM SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application submitted successfully!");
  };
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />

        <section
          className="page-title pt-200 pos-rel bg_img  banner-overlay"
          style={{ backgroundImage: `url('/images/banner/career-banner.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-xl-9 col-lg-8 mt-30">
                  <div className="page-title-box">
                    <h2 className="title pb-120 text-white pl-40">Career</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Process />
        <CareerTeam />
        <WorkSection bg="sbg pt-130" /> */}

        <section className='pt-50 pb-40'>
          <div className="container ">
            <div className="sec-title--two text-center ">
              <div className="sub-title xb-item--icon ">
                <Image src={iIcon} alt="Section icon" />
                Current Open Positions
              </div>


            </div>
            <div className="row g-4 pt-30 ">

              {jobs.map((job) => (
                <div key={job.id} className="col-12 col-md-6 col-lg-4 transtale-x-axis">

                  <div className="p-4 rounded-4 shadow-sm bg-white h-100 border">

                    {/* Icon + Title */}
                    <div className="d-flex align-items-center gap-2 mb-2">
                      {job.icon}
                      <h5 className="m-0 fw-bold text-dark">{job.title}</h5>
                    </div>

                    {/* Experience */}
                    <p className="text-muted mb-2" style={{ fontSize: "14px" }}>
                      {job.experience}
                    </p>

                    {/* Shift + Location */}
                    <p className="m-0 text-dark" style={{ fontSize: "14px" }}>
                      <strong>Shift:</strong> {job.shift}
                    </p>

                    <p className="m-0 text-dark mb-3" style={{ fontSize: "14px" }}>
                      {job.location}
                    </p>

                    {/* Apply Now */}
                    <a
                      href="#"
                      className="text-success fw-semibold"
                      style={{ fontSize: "15px" }}
                    >
                      → Apply Now
                    </a>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </section>

        <section className='pb-40 pt-40'>
          <div className="sec-title--two text-center ">
            <div className="sub-title xb-item--icon ">
              <Image src={iIcon} alt="Section icon" />
              Join Our Team
            </div>
            <h2 className="title">
              Build Your Career with Us
            </h2>

            <p className='fs-7'>We are always looking for talented, passionate professionals to join our growing team. Submit your application and our HR team will get in touch with you.</p>
            <div className="container py-5">
      <div className="mx-auto p-4 p-md-5 rounded-4 shadow-sm bg-white" style={{ maxWidth: "800px" }}>
        
        <h2 className="fw-bold mb-4 text-center">Career Application Form</h2>

        <form className="row g-4" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Position */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Position Applying For</label>
            <select
              name="position"
              className="form-select form-select-lg rounded-3"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="">Select Position</option>
              <option>Charge Entry</option>
              <option>Payment Poster</option>
              <option>EVBV</option>
              <option>AR Caller</option>
              <option>BDE</option>
              <option>IT Executive</option>
            </select>
          </div>

          {/* Experience */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Years of Experience</label>
            <input
              type="text"
              name="experience"
              className="form-control form-control-lg rounded-3"
              placeholder="Ex: 1, 2, 3"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          {/* Resume */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="form-control form-control-lg rounded-3"
              onChange={handleChange}
            />
            <small className="text-muted">Accepted: PDF, DOC, DOCX</small>
          </div>

          {/* Message */}
          <div className="col-12">
            <label className="form-label fw-semibold">Cover Letter / Message</label>
            <textarea
              name="message"
              className="form-control rounded-3"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Button */}
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-success btn-lg px-5 py-2 rounded-3"
            >
              Submit Application
            </button>
          </div>

        </form>

      </div>
    </div>
          </div>
        </section>


      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CareerPage;
