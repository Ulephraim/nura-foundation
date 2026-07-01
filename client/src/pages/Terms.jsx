// pages/Terms.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  FileText,
  Shield,
  Scale,
  Users,
  Globe,
  Clock,
  Mail,
  Phone,
  Home,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Heart,
  Target,
  Award,
  Lock,
  ChevronDown,
  ChevronUp,
  Printer,
  Download,
  Share2,
  MessageCircle,
} from "lucide-react";

const Terms = () => {
  const brandPrimary = "#0E5A00";
  const brandLight = "#E8F5E5";
  const brandLighter = "#F4F9F2";

  // Last updated date
  const lastUpdated = "June 29, 2026";

  // Terms sections
  const sections = [
    {
      id: "acceptance",
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the NURA Foundation website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
        "These terms constitute a legally binding agreement between you and NURA Foundation. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website constitutes acceptance of any changes.",
      ],
    },
    {
      id: "eligibility",
      icon: <Users className="w-5 h-5" />,
      title: "Eligibility",
      content: [
        "By using our website and services, you represent and warrant that:",
        "• You are at least 18 years of age or have parental/guardian consent",
        "• You have the legal capacity to enter into these terms",
        "• You will comply with all applicable laws and regulations",
        "• You will provide accurate and complete information",
        "• You will not use our services for any unlawful purpose",
        "• You will not interfere with or disrupt our website or services",
      ],
    },
    {
      id: "intellectual-property",
      icon: <Scale className="w-5 h-5" />,
      title: "Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, images, videos, and software, is the property of NURA Foundation or its content suppliers and is protected by intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our prior written consent. You may, however, share content for personal, non-commercial purposes with proper attribution.",
        "Trademarks, service marks, and logos used on this site are the property of NURA Foundation and may not be used without our express permission.",
      ],
    },
    {
      id: "user-obligations",
      icon: <Shield className="w-5 h-5" />,
      title: "User Obligations",
      content: [
        "You agree to use our website and services responsibly and in accordance with these terms. You agree to:",
        "• Provide accurate and truthful information",
        "• Maintain the confidentiality of your account credentials",
        "• Notify us immediately of any unauthorized use of your account",
        "• Not engage in any activity that could harm our website or services",
        "• Not attempt to gain unauthorized access to our systems",
        "• Not use our website for any illegal or harmful purpose",
        "• Respect the rights and privacy of other users",
      ],
    },
    {
      id: "donations",
      icon: <Heart className="w-5 h-5" />,
      title: "Donations and Contributions",
      content: [
        "When you make a donation to NURA Foundation, you agree to the following:",
        "• All donations are voluntary and non-refundable",
        "• You have the legal right to make the donation",
        "• Your donation will be used for our charitable purposes",
        "• We may provide donation receipts for tax purposes where applicable",
        "• We reserve the right to refuse or return donations at our discretion",
        "• Recurring donations may be cancelled at any time",
        "• We comply with all applicable fundraising regulations",
      ],
    },
    {
      id: "privacy",
      icon: <Lock className="w-5 h-5" />,
      title: "Privacy Policy",
      content: [
        "Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your personal information.",
        "By using our website, you consent to the collection and use of your information as described in our Privacy Policy. Please review our Privacy Policy carefully to understand our practices.",
      ],
    },
    {
      id: "third-party",
      icon: <Globe className="w-5 h-5" />,
      title: "Third-Party Links and Services",
      content: [
        "Our website may contain links to third-party websites or services that are not owned or controlled by NURA Foundation. We are not responsible for the content, privacy policies, or practices of these third-party sites.",
        "We provide these links for your convenience and do not endorse or assume any responsibility for the content or practices of third-party websites. You access these sites at your own risk.",
      ],
    },
    {
      id: "disclaimer",
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Disclaimer of Warranties",
      content: [
        "Our website and services are provided 'as is' and 'as available' without any warranties of any kind, either express or implied.",
        "We do not warrant that:",
        "• Our website will be uninterrupted, secure, or error-free",
        "• The results obtained from using our services will be accurate or reliable",
        "• Any errors or defects will be corrected",
        "• Our website is free of viruses or harmful components",
        "We disclaim all warranties to the fullest extent permitted by law.",
      ],
    },
    {
      id: "limitation",
      icon: <Scale className="w-5 h-5" />,
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, NURA Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.",
        "Our total liability to you for any claim arising from these Terms shall not exceed the amount you have paid to us, if any, in the preceding 12 months.",
        "Nothing in these terms excludes or limits our liability for:",
        "• Death or personal injury caused by our negligence",
        "• Fraud or fraudulent misrepresentation",
        "• Any liability that cannot be excluded or limited by law",
      ],
    },
    {
      id: "indemnification",
      icon: <Shield className="w-5 h-5" />,
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold harmless NURA Foundation, its officers, directors, employees, and volunteers from any claims, damages, liabilities, and expenses arising from:",
        "• Your use of our website or services",
        "• Your violation of these Terms",
        "• Your violation of any third-party rights",
        "• Any content you submit or transmit through our website",
      ],
    },
    {
      id: "termination",
      icon: <Clock className="w-5 h-5" />,
      title: "Termination",
      content: [
        "We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice, for any reason, including but not limited to:",
        "• Violation of these Terms",
        "• Engaging in fraudulent or illegal activities",
        "• Request by law enforcement or government agencies",
        "• Discontinuation of our services",
        "• Technical or security issues",
      ],
    },
    {
      id: "governing-law",
      icon: <Scale className="w-5 h-5" />,
      title: "Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.",
        "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
      ],
    },
    {
      id: "changes",
      icon: <Clock className="w-5 h-5" />,
      title: "Changes to Terms",
      content: [
        "We reserve the right to update or modify these Terms at any time without prior notice. Changes become effective immediately upon posting on this page.",
        "We encourage you to review these Terms periodically to stay informed of any updates. Your continued use of our website after changes are posted constitutes acceptance of the modified Terms.",
      ],
    },
    {
      id: "contact",
      icon: <Mail className="w-5 h-5" />,
      title: "Contact Us",
      content: [
        "If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:",
        "• Email: nuranation@gmail.com",
        "• Phone: +234 800 123 4567",
        "• Address: Abuja, Nigeria",
        "We will respond to your inquiry as soon as possible.",
      ],
    },
  ];

  // Quick navigation links
  const sectionLinks = sections.map((section) => ({
    id: section.id,
    title: section.title,
    icon: section.icon,
  }));

  const [activeSection, setActiveSection] = useState(null);

  // Handle accordion toggle
  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  // Section Header Component
  const SectionHeader = ({ badge, title, subtitle, centered = true }) => (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 bg-[#E4F5E9] mb-4 rounded-full border border-[#0E5A00]/15 px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0E5A00] shadow-sm">
        {badge}
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <>
          <div className="w-16 h-1 bg-[#0E5A00] mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 mt-4 text-sm sm:text-base">{subtitle}</p>
        </>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="font-jakarta bg-gray-50/50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0E5A00] to-[#0B4600] text-white py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
              alt="Terms background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E5A00]/50 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/15 shadow-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-100">
                Legal Information
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Terms and <br />
              <span className="text-emerald-300 relative inline-block">
                Conditions
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="#84D840"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website or
              services. They govern your relationship with NURA Foundation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <FileText className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-emerald-100">
                  Updated: {lastUpdated}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Shield className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-emerald-100">
                  Legally Binding
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 mr-2">
                Jump to:
              </span>
              <div className="flex flex-wrap gap-2">
                {sectionLinks.slice(0, 8).map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-[#E8F5E5] text-gray-600 hover:text-[#0E5A00] rounded-full text-xs font-medium transition-all duration-300 border border-gray-200 hover:border-[#0E5A00]"
                  >
                    {link.icon}
                    {link.title}
                  </a>
                ))}
                <span className="text-xs text-gray-400 flex items-center">
                  +{sectionLinks.length - 8} more
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Last Updated Notice */}
            <div className="bg-[#E8F5E5] rounded-2xl p-4 mb-8 flex items-center gap-3 border border-[#0E5A00]/10">
              <Clock className="w-5 h-5 text-[#0E5A00] flex-shrink-0" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Last Updated:</span>{" "}
                {lastUpdated}
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-green max-w-none mb-12">
              <p className="text-gray-600 text-base leading-relaxed">
                Welcome to NURA Foundation. These Terms and Conditions govern
                your use of our website and services. By accessing or using our
                website, you agree to be bound by these terms. Please read them
                carefully.
              </p>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#0E5A00]/30"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: brandLight,
                          color: brandPrimary,
                        }}
                      >
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {activeSection === section.id ? (
                        <ChevronUp className="w-5 h-5 text-[#0E5A00]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {activeSection === section.id && (
                    <div className="p-5 pt-0 border-t border-gray-100 bg-gray-50/30">
                      {section.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className={`text-gray-600 text-sm leading-relaxed ${
                            index > 0 ? "mt-3" : ""
                          }`}
                          dangerouslySetInnerHTML={{
                            __html: paragraph.replace(
                              /•/g,
                              '<span class="text-[#0E5A00] font-bold">•</span>',
                            ),
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section className="py-16" style={{ backgroundColor: brandLighter }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100/80">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-[#0E5A00]" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Key Points to Remember
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Summary of the most important terms
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Read and accept terms before using our website",
                  "All content is protected by intellectual property laws",
                  "Donations are voluntary and non-refundable",
                  "We collect and process data as described in our Privacy Policy",
                  "Third-party links are provided for convenience only",
                  "Our services are provided 'as is' without warranties",
                  "We may update these terms at any time",
                  "Contact us if you have any questions",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-3 bg-[#F4F9F2] rounded-xl"
                  >
                    <CheckCircle className="w-4 h-4 text-[#0E5A00] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  These Terms and Conditions are subject to change. Please
                  review them periodically to stay informed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F4F9F2] rounded-3xl p-8 md:p-10 border border-gray-100/80">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-[#0E5A00]" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Have Questions About These Terms?
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We're here to help clarify any legal matters
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0E5A00] mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Email</p>
                    <a
                      href="mailto:nuranation@gmail.com"
                      className="text-sm text-gray-600 hover:text-[#0E5A00] transition-colors"
                    >
                      nuranation@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0E5A00] mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Phone</p>
                    <a
                      href="tel:+2348001234567"
                      className="text-sm text-gray-600 hover:text-[#0E5A00] transition-colors"
                    >
                      +234 800 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-[#0E5A00] mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Address
                    </p>
                    <p className="text-sm text-gray-600">Abuja, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#E8F5E5] rounded-xl border border-[#0E5A00]/10 flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#0E5A00] flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  We value transparency and are committed to providing clear,
                  fair terms for all our users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0E5A00] to-[#0B4A00] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
                  <BookOpen className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                    Legal Notice
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Still Have Questions?
                </h2>

                <p className="text-emerald-100/80 max-w-xl mx-auto mb-8 leading-relaxed">
                  Our legal team is available to answer any questions about our
                  terms and conditions. Don't hesitate to reach out.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 bg-[#84D840] hover:bg-[#6FB830] text-[#0E5A00] px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                  >
                    <Home className="w-4 h-4" /> Return Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
