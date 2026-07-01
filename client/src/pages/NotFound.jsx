// pages/NotFoundPage.jsx
import { Outlet, Link } from "react-router-dom";
import {
  ArrowRight,
  Home,
  Search,
  HelpCircle,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFoundPage = () => {
  const brandPrimary = "#0E5A00";
  const brandLight = "#E8F5E5";
  const brandLighter = "#F4F9F2";

  // Quick links to help users navigate
  const quickLinks = [
    { label: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { label: "About Us", path: "/about" },
    { label: "Our Programs", path: "/our-programs" },
    { label: "Contact", path: "/contact-us" },
    { label: "Donate", path: "/donate" },
  ];

  return (
    <>
      <Navbar />
      <main className="font-jakarta bg-gray-50/50 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E4F5E9] mb-6 rounded-full border border-[#0E5A00]/15 px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0E5A00] shadow-sm">
                <HelpCircle className="w-4 h-4" />
                404 Error
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Oops! Page Not
                <br />
                <span className="text-[#0E5A00] relative inline-block">
                  Found
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M1 5.5C50 1.5 150 1.5 199 5.5"
                      stroke="#0E5A00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed mb-8">
                We couldn't find the page you were looking for. It may have been
                moved, renamed, or never existed. Don't worry — we're here to
                help you find your way.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-[#0E5A00] hover:bg-[#0B4600] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Home className="w-4 h-4" />
                  Return Home
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 border-2 border-[#0E5A00] text-[#0E5A00] hover:bg-[#0E5A00] hover:text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                >
                  Report Issue
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Links */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Quick Navigation:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-[#0E5A00] hover:border-[#0E5A00] hover:bg-[#E8F5E5] transition-all duration-300"
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E8F5E5] rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#0E5A00] rounded-full opacity-5" />

                <img
                  src="https://illustrations.popsy.co/green/crashed-error.svg"
                  alt="404 illustration"
                  className="relative w-full max-w-md lg:max-w-lg h-auto"
                />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-100 animate-bounce">
                  <Search className="w-5 h-5 text-[#0E5A00]" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#0E5A00] rounded-full p-3 shadow-lg animate-pulse">
                  <ArrowLeft className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100/80">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-[#E4F5E9] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-[#0E5A00]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Check the URL</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Make sure the web address is spelled correctly and try again.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-[#E4F5E9] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-[#0E5A00]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Return Home</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Navigate back to our homepage to find what you're looking for.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-[#E4F5E9] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-[#0E5A00]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Contact Support
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reach out to our team and we'll help you find what you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Outlet />
    </>
  );
};

export default NotFoundPage;
