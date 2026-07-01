// pages/Overview.tsx
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  ArrowRight,
  Target,
  Sparkles,
  Shield,
  Heart,
  Users,
  Globe,
  TrendingUp,
  Award,
  HandHelping,
  CheckCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { IMAGES } from "../shared/assets/images";
import Gallery from "../components/sections/Gallery";

const Overview = () => {
  const brandPrimary = "#0E5A00";
  const brandLight = "#E8F5E5";
  const brandLighter = "#F4F9F2";

  // Key focus areas
  const focusAreas = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Peace & Unity",
      desc: "Promoting harmony across ethnic and religious lines through dialogue and community engagement.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Youth Empowerment",
      desc: "Harnessing youth giftings for Nation building with financial and mentorship support.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Safety",
      desc: "Protecting populations from threats posed by terrorism through awareness programs.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Economic Development",
      desc: "Providing microloans, vocational training, and business support to underprivileged communities.",
    },
  ];

  // Key stats
  const stats = [
    {
      value: "50+",
      label: "Communities Reached",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      value: "10K+",
      label: "Youth Empowered",
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: "25+",
      label: "States Impacted",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      value: "100+",
      label: "Peace Initiatives",
      icon: <HandHelping className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="font-jakarta">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0E5A00] to-[#0B4600] text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={IMAGES.Home4}
              alt="Nigeria"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Rebuilding, Reforming, <br />
              <span className="text-emerald-300">Retranslating Nigeria</span>
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
              NURA Foundation is committed to making Nigeria Africa's number one
              super power. Love for God and Nation.
            </p>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 rounded-full bg-[#0E5A00]" />
                  <span className="text-sm font-semibold text-[#0E5A00] uppercase tracking-wider">
                    Our Movement in Action
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Watch NURA Foundation's Journey
                </h2>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                  See how we are transforming communities across Nigeria through
                  our various initiatives in peace building, youth empowerment,
                  and economic development.
                </p>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  From the bustling streets of Lagos to the historic cities of
                  Kano and Kaduna, NURA is reaching every individual willing to
                  work wholeheartedly for the poor and distressed across
                  Nigeria.
                </p>
              </div>

              {/* Fixed Aspect Ratio Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-black">
                <div className="relative pb-[56.25%] h-0">
                  {" "}
                  {/* Changed from 177.77% to 56.25% for clean 16:9 widescreen layout */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/NGoYA27qb3o"
                    title="NURA Foundation Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" style={{ backgroundColor: brandLighter }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Impact Across Nigeria
              </h2>
              <p className="text-gray-500 mt-2 text-lg">
                Numbers that inspire us to do more
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center rounded-2xl py-8 px-4 transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: brandLight, color: brandPrimary }}
                  >
                    {stat.icon}
                  </div>
                  <p
                    className="text-3xl sm:text-4xl font-extrabold"
                    style={{ color: brandPrimary }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Gallery />

        {/* Focus Areas Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
                <span className="text-sm font-semibold text-[#0E5A00] uppercase tracking-wider">
                  Our Focus
                </span>
                <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Key Areas of Impact
              </h2>
              <p className="text-gray-500 mt-2 text-lg">
                Driving change through strategic initiatives
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: brandLight, color: brandPrimary }}
                  >
                    {area.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Overview;
