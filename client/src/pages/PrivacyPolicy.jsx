// pages/PrivacyPolicy.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  Home,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  Globe,
  Clock,
  ChevronDown,
  ChevronUp,
  Printer,
  Download,
  Share2,
  Heart,
} from "lucide-react";

const PrivacyPolicy = () => {
  const brandPrimary = "#0E5A00";
  const brandLight = "#E8F5E5";
  const brandLighter = "#F4F9F2";

  // Last updated date
  const lastUpdated = "June 29, 2026";

  // Privacy policy sections
  const sections = [
    {
      id: "introduction",
      icon: <FileText className="w-5 h-5" />,
      title: "Introduction",
      content: [
        'NURA Foundation ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with us.',
        "We respect your privacy and are committed to protecting your personal data. This policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
      ],
    },
    {
      id: "information",
      icon: <Database className="w-5 h-5" />,
      title: "Information We Collect",
      content: [
        "We may collect and process the following data about you:",
        "• Personal identification information (Name, email address, phone number, etc.)",
        "• Donation history and payment information",
        "• Communication preferences and feedback",
        "• Website usage data and analytics",
        "• Volunteer and partnership applications",
        "• Any other information you choose to provide to us",
      ],
    },
    {
      id: "use",
      icon: <Eye className="w-5 h-5" />,
      title: "How We Use Your Information",
      content: [
        "We use the information we collect for various purposes, including:",
        "• To provide and maintain our services",
        "• To process donations and send donation receipts",
        "• To communicate with you about our programs and initiatives",
        "• To send you updates, newsletters, and marketing communications",
        "• To improve our website and services",
        "• To comply with legal obligations",
        "• To respond to your inquiries and support requests",
      ],
    },
    {
      id: "sharing",
      icon: <Users className="w-5 h-5" />,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:",
        "• With service providers who assist us in operating our website and programs",
        "• When required by law or to protect our rights",
        "• With your consent or at your direction",
        "• With partners and affiliates for program delivery",
        "• In the event of a merger, acquisition, or asset sale",
      ],
    },
    {
      id: "security",
      icon: <Lock className="w-5 h-5" />,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "Our security measures include:",
        "• Encryption of data in transit and at rest",
        "• Secure server infrastructure",
        "• Regular security assessments and audits",
        "• Access controls and authentication",
        "• Staff training on data protection",
        "• Incident response procedures",
      ],
    },
    {
      id: "cookies",
      icon: <Globe className="w-5 h-5" />,
      title: "Cookies and Tracking",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us analyze website traffic and customize content.",
        "You can control your cookie preferences through your browser settings. You can choose to accept or decline cookies, but please note that some features of our website may not function properly without them.",
        "We use the following types of cookies:",
        "• Essential cookies for website functionality",
        "• Analytics cookies to understand user behavior",
        "• Preference cookies to remember your settings",
        "• Marketing cookies for relevant content delivery",
      ],
    },
    {
      id: "rights",
      icon: <Shield className="w-5 h-5" />,
      title: "Your Privacy Rights",
      content: [
        "Under applicable data protection laws, you have the following rights:",
        "• Right to access: You can request copies of your personal data",
        "• Right to rectification: You can request corrections to your data",
        "• Right to erasure: You can request deletion of your data",
        "• Right to restrict processing: You can limit how we use your data",
        "• Right to data portability: You can request transfer of your data",
        "• Right to object: You can object to our use of your data",
        "• Right to withdraw consent: You can withdraw consent at any time",
      ],
    },
    {
      id: "children",
      icon: <Users className="w-5 h-5" />,
      title: "Children's Privacy",
      content: [
        "Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.",
      ],
    },
    {
      id: "updates",
      icon: <Clock className="w-5 h-5" />,
      title: "Policy Updates",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
        "We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
      ],
    },
    {
      id: "contact",
      icon: <Mail className="w-5 h-5" />,
      title: "Contact Us",
      content: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:",
        "• Email: nuranation@gmail.com",
        "• Phone: +234 800 123 4567",
        "• Address: Abuja, Nigeria",
        "• Our data protection officer is available to assist with privacy-related matters.",
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
  const [showPrintOptions, setShowPrintOptions] = useState(false);

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
              alt="Privacy policy background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E5A00]/50 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/15 shadow-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-100">
                Privacy & Security
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy <br />
              <span className="text-emerald-300 relative inline-block">
                Protecting Your Data
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
              We are committed to protecting your privacy and ensuring the
              security of your personal information. Learn how we handle your
              data.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Shield className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-emerald-100">
                  Updated: {lastUpdated}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Lock className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-emerald-100">GDPR Compliant</span>
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
                {sectionLinks.map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-[#E8F5E5] text-gray-600 hover:text-[#0E5A00] rounded-full text-xs font-medium transition-all duration-300 border border-gray-200 hover:border-[#0E5A00]"
                  >
                    {link.icon}
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
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
                At NURA Foundation, we are committed to maintaining the trust
                and confidence of our donors, partners, and supporters. This
                Privacy Policy explains how we collect, use, and protect your
                personal information when you interact with us.
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

        {/* Your Privacy Rights Summary */}
        <section className="py-16" style={{ backgroundColor: brandLighter }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100/80">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-[#0E5A00]" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Your Privacy Rights
                  </h3>
                  <p className="text-gray-500 text-sm">
                    You have the right to control your personal data
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Right to Access Your Data",
                  "Right to Rectification",
                  "Right to Erasure",
                  "Right to Restrict Processing",
                  "Right to Data Portability",
                  "Right to Object",
                  "Right to Withdraw Consent",
                  "Right to Lodge a Complaint",
                ].map((right, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-[#F4F9F2] rounded-xl"
                  >
                    <CheckCircle className="w-4 h-4 text-[#0E5A00] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{right}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  To exercise any of these rights, please contact us using the
                  information provided in the "Contact Us" section below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Protect Your Data */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Data Encryption",
                  description:
                    "All data transmitted between your browser and our servers is encrypted using industry-standard SSL/TLS protocols.",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Access Control",
                  description:
                    "We implement strict access controls to ensure that only authorized personnel can access your personal information.",
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Data Minimization",
                  description:
                    "We only collect and retain the minimum amount of personal data necessary for the purposes outlined in this policy.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl border border-gray-100 hover:border-[#0E5A00]/20 transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: brandLight, color: brandPrimary }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16" style={{ backgroundColor: brandLighter }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100/80">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-[#0E5A00]" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Contact Our Privacy Team
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We're here to answer your privacy questions
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0E5A00] mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        Email
                      </p>
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
                      <p className="text-sm font-semibold text-gray-700">
                        Phone
                      </p>
                      <a
                        href="tel:+2348001234567"
                        className="text-sm text-gray-600 hover:text-[#0E5A00] transition-colors"
                      >
                        +234 800 123 4567
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-[#0E5A00] mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        Physical Address
                      </p>
                      <p className="text-sm text-gray-600">Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0E5A00] mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        Response Time
                      </p>
                      <p className="text-sm text-gray-600">
                        We respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#E8F5E5] rounded-xl border border-[#0E5A00]/10 flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#0E5A00] flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  We take your privacy seriously and are committed to protecting
                  your personal information.
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
                  <Shield className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                    Trust & Transparency
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Have Questions About Your Privacy?
                </h2>

                <p className="text-emerald-100/80 max-w-xl mx-auto mb-8 leading-relaxed">
                  We're here to help you understand your rights and how we
                  protect your data. Don't hesitate to reach out.
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

export default PrivacyPolicy;
