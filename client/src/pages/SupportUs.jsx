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
  Users,
  Calendar,
  Globe,
  Award,
  HandHeart,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const SupportUs = () => {
  const brandPrimary = "#0E5A00";
  const brandLight = "#E8F5E5";
  const [activeTab, setActiveTab] = useState("donate"); // "donate" or "volunteer"

  // WhatsApp Redirect Handler
  const handleWhatsAppRedirect = (contributionType = "", action = "donate") => {
    const phoneNumber = "2348108624192";
    const actionLabel = action === "donate" ? "donation" : "volunteering";
    const baseMessage = `Hello! I would like to support your mission by ${actionLabel}.`;
    const contextualMessage = contributionType
      ? `${baseMessage} I am specifically interested in: ${contributionType}.`
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

  // Volunteer opportunities
  const volunteerOpportunities = [
    {
      title: "Mentorship & Tutoring",
      description:
        "Share your expertise by mentoring youth in tech, entrepreneurship, or academic subjects.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      commitment: "2-4 hours/week",
      skills: "Teaching, Communication, Subject Expertise",
    },
    {
      title: "Community Outreach",
      description:
        "Help us connect with local communities, organize events, and spread awareness about our programs.",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      commitment: "3-5 hours/week",
      skills: "Public Speaking, Community Engagement, Empathy",
    },
    {
      title: "Project Management",
      description:
        "Lead and coordinate our various initiatives, ensuring smooth execution and timely delivery.",
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      commitment: "5-10 hours/week",
      skills: "Organization, Leadership, Problem-Solving",
    },
    {
      title: "Skill-Based Volunteering",
      description:
        "Contribute your professional skills in areas like graphic design, web development, or marketing.",
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      commitment: "Flexible",
      skills: "Digital Marketing, Design, Development, Writing",
    },
  ];

  // What they can contribute (Donation)
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
              Choose how you want to make a difference. Whether through
              financial support or volunteering your time and skills, every
              contribution helps us rebuild, reform, and scale programs across
              Nigeria.
            </p>

            {/* Tab Navigation */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab("donate")}
                className={`inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-base transition-all transform hover:-translate-y-0.5 focus:outline-none ${
                  activeTab === "donate"
                    ? "bg-[#0E5A00] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Heart className="w-5 h-5" />
                Make a Donation
              </button>
              <button
                onClick={() => setActiveTab("volunteer")}
                className={`inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-base transition-all transform hover:-translate-y-0.5 focus:outline-none ${
                  activeTab === "volunteer"
                    ? "bg-[#0E5A00] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Users className="w-5 h-5" />
                Volunteer With Us
              </button>
            </div>

            {/* Dynamic CTA based on active tab */}
            <div className="mt-8">
              {activeTab === "donate" ? (
                <button
                  onClick={() =>
                    handleWhatsAppRedirect("General Contribution", "donate")
                  }
                  className="inline-flex items-center gap-3 text-[#0E5A00] hover:text-[#0B4600] font-semibold text-base underline focus:outline-none"
                >
                  <FaWhatsapp className="w-6 h-6 fill-current" />
                  Donate via WhatsApp Now
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleWhatsAppRedirect("Volunteer Interest", "volunteer")
                  }
                  className="inline-flex items-center gap-3 text-[#0E5A00] hover:text-[#0B4600] font-semibold text-base underline focus:outline-none"
                >
                  <FaWhatsapp className="w-6 h-6 fill-current" />
                  Volunteer via WhatsApp Now
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Content Breakdown Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Hand: Content based on active tab */}
            <div className="lg:col-span-7 space-y-8">
              {activeTab === "donate" ? (
                // Donation Content
                <>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E5A00] bg-[#E8F5E5] px-3 py-1 rounded-full">
                      What You Can Give
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
                      Ways to Contribute Financially
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
                </>
              ) : (
                // Volunteer Content
                <>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E5A00] bg-[#E8F5E5] px-3 py-1 rounded-full">
                      Volunteer Opportunities
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
                      Make a Difference With Your Time & Skills
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Join our team of dedicated volunteers and help us create
                      lasting impact in communities across Nigeria.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {volunteerOpportunities.map((opportunity, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div
                            className={`w-12 h-12 rounded-xl ${opportunity.bgColor} flex items-center justify-center mb-4`}
                          >
                            {opportunity.icon}
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">
                            {opportunity.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            {opportunity.description}
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                              <Clock className="w-3 h-3 inline mr-1" />
                              Commitment: {opportunity.commitment}
                            </p>
                            <p className="text-xs text-gray-500">
                              <Award className="w-3 h-3 inline mr-1" />
                              Skills: {opportunity.skills}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Hand: Impact Tiers & CTA */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-6">
              <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  {activeTab === "donate" ? (
                    <TrendingUp className="w-6 h-6 text-[#0E5A00]" />
                  ) : (
                    <HandHeart className="w-6 h-6 text-[#0E5A00]" />
                  )}
                  <h3 className="font-extrabold text-xl text-gray-900">
                    {activeTab === "donate"
                      ? "Your Measurable Impact"
                      : "Your Volunteer Impact"}
                  </h3>
                </div>

                {activeTab === "donate" ? (
                  <>
                    <p className="text-sm text-gray-600 mb-6">
                      Curious about where your capital goes? Here is a breakdown
                      of what different milestone targets accomplish in
                      real-time:
                    </p>

                    <div className="space-y-4 mb-8">
                      {impactTiers.map((tier, index) => (
                        <div
                          key={index}
                          className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {tier.icon}
                          </div>
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
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-6">
                      Your time and skills can create lasting change. Here's how
                      volunteers like you are making a difference:
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex-shrink-0 mt-0.5">
                          <Users className="w-5 h-5 text-[#0E5A00]" />
                        </div>
                        <div>
                          <span className="font-extrabold text-gray-900 block text-base mb-0.5">
                            Youth Mentorship
                          </span>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Guide and inspire young minds to pursue careers in
                            tech, entrepreneurship, and leadership.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex-shrink-0 mt-0.5">
                          <Calendar className="w-5 h-5 text-[#0E5A00]" />
                        </div>
                        <div>
                          <span className="font-extrabold text-gray-900 block text-base mb-0.5">
                            Community Events
                          </span>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Help organize and run community outreach programs,
                            workshops, and awareness campaigns.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex-shrink-0 mt-0.5">
                          <Award className="w-5 h-5 text-[#0E5A00]" />
                        </div>
                        <div>
                          <span className="font-extrabold text-gray-900 block text-base mb-0.5">
                            Skill Development
                          </span>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Share your professional expertise to help our team
                            and community members grow and succeed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Main Sidebar Call To Action Card */}
                <div
                  className="p-5 rounded-2xl text-center"
                  style={{ backgroundColor: brandLight }}
                >
                  <p className="text-sm font-bold text-[#0E5A00] mb-3">
                    {activeTab === "donate"
                      ? "Ready to transform a community?"
                      : "Ready to make a difference with your time?"}
                  </p>
                  <button
                    onClick={() =>
                      handleWhatsAppRedirect(
                        activeTab === "donate"
                          ? "Instant Support Connection"
                          : "Volunteer Interest",
                        activeTab === "donate" ? "donate" : "volunteer",
                      )
                    }
                    className="w-full bg-[#0E5A00] hover:bg-[#0B4600] text-white py-3 px-4 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5 fill-current" />
                    {activeTab === "donate"
                      ? "Chat with our Donation Team"
                      : "Chat with our Volunteer Team"}
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

export default SupportUs;
