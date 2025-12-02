'use client';

import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

import FeaturesSection from './Features';

import WorkSection from '../team/work';
import '../../styles/about.css'
import '../../styles/custome.css'

const AboutUsPage: React.FC = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img banner-overlay"
          style={{ backgroundImage: `url(/images/banner/about-banner.jpg)` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-xl-9 col-lg-8 mt-30">
                  <div className="page-title-box">
                    <h2 className="title pb-120 text-white pl-40">About Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <FeaturesSection />
        <div className='pt-50' style={{ backgroundColor: '#f6f6f8' }}>
          <WorkSection />

        </div>

      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutUsPage;
