import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/MainPage/Home';
import About from '../Pages/MainPage/Aboutus';
import Blog from '../Pages/MainPage/Blog';
import Services from '../Pages/MainPage/services';
import SubBlog from '../Pages/Subpages/SubBlog';
import BlogDetail from '../Pages/Subpages/BlogDetail';
import Privacypolicy from '../Pages/MainPage/PrivacyPolicy';
import TermsAndConditions from '../Pages/MainPage/TermCondition';
import FaqSection from '../Pages/MainPage/FAQ';
import ServiceDetail from '../Pages/Subpages/ServiceDetail';
import Scheduleappointment from '../Pages/MainPage/Shedule';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/schedule-appointment" element={<Scheduleappointment />} />
            <Route path="/subblog" element={<SubBlog />} />
            <Route path="/blog/:title" element={<BlogDetail />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/faq" element={<FaqSection />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;