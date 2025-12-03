'use client';

import { useState } from 'react';
import ContactSection from '../../components/ContactSection';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import icon from '@/public/images/icon/music-icon.svg';
import bImg1 from '@/public/images/hero/contact-img.png';
import bImg2 from '@/public/images/shape/brd_shape.png';
import Image from 'next/image';
import '../../styles/about.css'
import '../../styles/custome.css'


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img banner-overlay"
          style={{ backgroundImage: `url('/images/banner/contct-banner.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-xl-9 col-lg-8 mt-30">
                  <div className="page-title-box">
                    <h2 className="title pb-120 text-white pl-40">Contact</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">

            <div className="row  align-items-start">

              {/* LEFT SIDE - Contact Info */}
              <div className="col-lg-6">
                <h2 className="fw-bold mb-3">Contact Information</h2>
                <p className="text-muted mb-4" style={{ maxWidth: "420px" }}>
                  Have questions? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
                </p>

                {/* Address */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "65px", height: "65px", background: "#D8F8DB" }}
                  >
                    <span style={{ fontSize: "28px" }}>📍</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Address:</h5>
                    <p className="m-0">
                      311 Elm Street, Ste 270–1113 <br />
                      Cincinnati, OH 45202 <br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "65px", height: "65px", background: "#D8F8DB" }}
                  >
                    <span style={{ fontSize: "28px" }}>📞</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Phone:</h5>
                    <p className="m-0">(281) 270–3963</p>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "65px", height: "65px", background: "#D8F8DB" }}
                  >
                    <span style={{ fontSize: "28px" }}>✉️</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Email:</h5>
                    <p className="m-0">Info@jdscarercmtechsolutions.com</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Form */}
              <div className="col-lg-6">
                <div
                  className="p-4 p-md-5 rounded-4"
                  style={{ background: "#F6F6F6" }}
                >
                  <h3 className="fw-bold mb-4">Get In Touch</h3>

                  <form className="row g-3" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control py-2"
                        placeholder="Your name"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control py-2"
                        placeholder="Your email"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control py-2"
                        placeholder="Your number"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control py-2"
                        placeholder="Your subject"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">Your Message</label>
                      <textarea
                        name="message"
                        className="form-control"

                        placeholder="Write message"
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* Button */}
                    <div className="col-12">
                      <button className="btn btn-success w-100 py-2 fw-semibold">
                        Send Message
                      </button>
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Scrollbar />
    </>
  );
};

export default ContactPage;
