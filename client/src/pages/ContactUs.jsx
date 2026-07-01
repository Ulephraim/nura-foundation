import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const brandPrimary = "#0E5A00";
  const brandLighter = "#F4F9F2";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: ["nuranation@gmail.com", "info@nurafoundation.org"],
      action: "mailto:nuranation@gmail.com",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: ["+234 800 123 4567", "+234 801 234 5678"],
      action: "tel:+2348001234567",
      color: "bg-green-50 text-green-600 border-green-100",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      details: ["Abuja & Lagos", "Nigeria"],
      action: "",
      color: "bg-red-50 text-red-600 border-red-100",
    },
  ];

  // Social media links configuration
  const socialLinks = [
    {
      icon: <FaFacebook size={16} />,
      label: "Facebook",
      url: "https://www.facebook.com/share/1BwhfqMX17/",
    },
    {
      icon: <FaInstagram size={16} />,
      label: "Instagram",
      url: "https://www.instagram.com/nura_foundation",
    },
    {
      icon: <FaWhatsapp size={16} />,
      label: "WhatsApp",
      url: "https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });

    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, error: null });
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setFormStatus({ submitted: false, loading: false, error: null });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="font-jakarta bg-gray-50/50 min-h-screen pt-16 sm:pt-24 pb-12 md:pb-20">
        {/* Top Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E4F5E9] mb-4 rounded-full border border-[#0E5A00]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0E5A00] shadow-sm">
            Contact Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Reach Out to Us
          </h2>
          <div className="w-12 h-1 bg-[#0E5A00] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
            We'd love to hear from you. Choose the best way to connect or fill
            out the form below.
          </p>
        </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Contact Information Cards & Social Media */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group lg:col-span-12 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4"
                  >
                    <div
                      className={`p-3 rounded-xl border ${info.color} shrink-0`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-[#0E5A00] transition-colors">
                        {info.title}
                      </h4>
                      {info.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-gray-500 text-sm mt-0.5 break-all"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* Light Styled Social Media Block */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center lg:text-left">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex gap-3 justify-center lg:justify-start">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#0E5A00] transition-all hover:-translate-y-0.5 transform text-gray-600 hover:text-white border border-gray-100"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form Section */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-[#E4F5E9] rounded-full border border-[#0E5A00]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0E5A00]">
                  Send a Message
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                  We're Here to Help
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Fill in the form and we'll get back to you within 24 hours.
                </p>
              </div>

              {formStatus.submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Thank you for reaching out. Our team is looking into your
                    request.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0E5A00]/20 focus:border-[#0E5A00] transition-all bg-gray-50/50"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0E5A00]/20 focus:border-[#0E5A00] transition-all bg-gray-50/50"
                          placeholder="enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0E5A00]/20 focus:border-[#0E5A00] transition-all bg-gray-50/50"
                          placeholder="+234..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0E5A00]/20 focus:border-[#0E5A00] transition-all bg-gray-50/50"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0E5A00]/20 focus:border-[#0E5A00] transition-all resize-none bg-gray-50/50"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {formStatus.error && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-xs text-red-600 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      {formStatus.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full bg-[#0E5A00] hover:bg-[#0B4600] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {formStatus.loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
