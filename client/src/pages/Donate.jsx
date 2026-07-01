// pages/Donate.jsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  Heart,
  GraduationCap,
  Briefcase,
  Sparkles,
  TrendingUp,
  Gift,
  BookOpen,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Donate = () => {
  const brandPrimary = "#0E5A00";
  const brandLight = "#E8F5E5";

  // WhatsApp Redirect Handler
  const handleWhatsAppRedirect = (contributionType = "") => {
    const phoneNumber = "2348108624192"; // Configured with Nigeria country code
    const baseMessage =
      "Hello! I would like to support your mission and make a donation contribution.";
    const contextualMessage = contributionType
      ? `${baseMessage} I am specifically interested in contributing via: ${contributionType}.`
      : baseMessage;

    const encodedMessage = encodeURIComponent(contextualMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  // Explicit Impact Metrics
  const impactTiers = [
    {
      amount: "₦5,000",
      impact:
        "Provides learning materials, books, and STEM packs for 2 children in underserved communities.",
      icon: <BookOpen className="w-5 h-5 text-[#0E5A00]" />,
    },
    {
      amount: "₦20,000",
      impact:
        "Sponsors vocational training, coding bootcamps, or entrepreneurship workshops for a youth.",
      icon: <TrendingUp className="w-5 h-5 text-[#0E5A00]" />,
    },
    {
      amount: "₦50,000+",
      impact:
        "Funds a localized community peace initiative or an entire micro-loan pool for local startups.",
      icon: <Sparkles className="w-5 h-5 text-[#0E5A00]" />,
    },
  ];

  // What they can contribute
  const contributionWays = [
    {
      title: "Financial Support",
      description:
        "Direct monetary gifts to fund operational budgets, training resources, and community infrastructure.",
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      bgColor: "bg-rose-50",
    },
    {
      title: "Material Goods & Equipment",
      description:
        "Laptops, books, learning materials, setup tools, or clothes for development centers.",
      icon: <Gift className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Mentorship & Skills",
      description:
        "Volunteer your professional expertise as a tutor, public speaker, or project manager.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Corporate Partnerships",
      description:
        "Collaborate via business sponsorships, matching gifts, or corporate social responsibility channels.",
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="font-jakarta bg-gray-50/50">
        {/* Hero Section */}
        <section className="relative bg-white text-gray-900 py-20 md:py-28 overflow-hidden border-b border-gray-100">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Support Our Mission <br />
              <span className="text-[#0E5A00] relative inline-block">
                Transform Lives Directly
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your donation helps us rebuild, reform, and scale programs across
              Nigeria. We track every single contributor action directly over
              WhatsApp to ensure instant allocation.
            </p>

            <div className="mt-10">
              <button
                onClick={() => handleWhatsAppRedirect("General Contribution")}
                className="inline-flex items-center gap-3 bg-[#0E5A00] hover:bg-[#0B4600] text-white font-semibold px-6 py-3 rounded-full text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none"
              >
                <FaWhatsapp className="w-6 h-6 fill-current" />
                Donate via WhatsApp Now
              </button>
            </div>
          </div>
        </section>

        {/* Content Breakdown Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Hand: Contribution Models */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E5A00] bg-[#E8F5E5] px-3 py-1 rounded-full">
                  What You Can Give
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
                  Ways to Contribute
                </h2>
                <p className="text-gray-600 mt-2">
                  We welcome physical items, human resources, and financial
                  backing to sustain our continuous community operations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contributionWays.map((way, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-xl ${way.bgColor} flex items-center justify-center mb-4`}
                      >
                        {way.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {way.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {way.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hand: Clear Tangible Impact Tiers */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-6">
              <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-[#0E5A00]" />
                  <h3 className="font-extrabold text-xl text-gray-900">
                    Your Measurable Impact
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  Curious about where your capital goes? Here is a breakdown of
                  what different milestone targets accomplish in real-time:
                </p>

                <div className="space-y-4 mb-8">
                  {impactTiers.map((tier, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <div className="flex-shrink-0 mt-0.5">{tier.icon}</div>
                      <div>
                        <span className="font-extrabold text-gray-900 block text-base mb-0.5">
                          {tier.amount}
                        </span>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {tier.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Sidebar Call To Action Card */}
                <div
                  className="p-5 rounded-2xl text-center"
                  style={{ backgroundColor: brandLight }}
                >
                  <p className="text-sm font-bold text-[#0E5A00] mb-3">
                    Ready to transform a community?
                  </p>
                  <button
                    onClick={() =>
                      handleWhatsAppRedirect("Instant Support Connection")
                    }
                    className="w-full bg-[#0E5A00] hover:bg-[#0B4600] text-white py-3 px-4 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5 fill-current" />
                    Chat with our Donation Team
                  </button>
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

export default Donate;
