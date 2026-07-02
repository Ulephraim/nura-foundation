// pages/OurTeam.jsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  Users,
  MapPin,
  Briefcase,
  Heart,
  Star,
  Crown,
  ChevronRight,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { IMAGES } from "../shared/assets/images";

const OurTeam = () => {
  const brandPrimary = "#0E5A00";
  const brandLighter = "#F4F9F2";

  // Team members data
  const teamMembers = [
    {
      name: "Alloysius Prosper",
      position: "Founder in Chief",
      role: "Executive Leadership",
      image: IMAGES.Team9,
      bio: "NURA Foundation's strategic direction on Board of Directors",
      icon: <Crown className="w-5 h-5" />,
    },
    {
      name: "Michael Sunday Ojonugwa",
      position:
        "Chairman / Chief Coordinator & National Speaker on Media and Publicity",
      role: "Executive Leadership",
      image: IMAGES.Team8,
      bio: "Leading NURA Foundation's strategic direction and media outreach across Nigeria.",
      icon: <Crown className="w-5 h-5" />,
    },
    {
      name: "Senlong Jerry Monday",
      position: "Chairman / Coordinator, Plateau State Chapter",
      role: "Executive Leadership",
      image: IMAGES.Team7,
      bio: "Overseeing all NURA initiatives and programs in Plateau State.",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      name: "Ike Godwin Jasper",
      position: "President, Imo State Chapter",
      role: "State Leadership",
      image: IMAGES.Team5,
      bio: "Leading NURA Foundation's operations and community outreach in Imo State.",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      name: "Akinbode Azeez O.",
      position: "President, Oyo State Chapter",
      role: "State Leadership",
      image: IMAGES.Team4,
      bio: "Driving youth empowerment and peace initiatives across Oyo State.",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      name: "Opeyemi Ibrahim Akinsanya",
      position: "National Coordinator (CPP)",
      role: "Executive Leadership",
      image: IMAGES.Team6,
      bio: "Coordinating national programs and strategic partnerships for NURA Foundation.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      name: "Doris Makenley",
      position: "Welfare Director",
      role: "Executive Leadership",
      image: IMAGES.Team1,
      bio: "Ensuring the wellbeing and support systems for all NURA members and beneficiaries.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Engr. Daniel Thomas",
      position: "Agent",
      role: "Field Operations",
      image: IMAGES.Team3,
      bio: "Field operations and community engagement specialist.",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "Iorhemba Aondowase Paul",
      position: "Member",
      role: "Field Operations",
      image: IMAGES.Team2,
      bio: "Dedicated team member supporting NURA's mission across various initiatives.",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  // Group members dynamically by role safely
  const executiveLeadership = teamMembers.filter(
    (m) => m.role === "Executive Leadership",
  );
  const stateLeadership = teamMembers.filter(
    (m) => m.role === "State Leadership",
  );
  const fieldOperations = teamMembers.filter(
    (m) => m.role === "Field Operations",
  );

  // Enhanced Reusable card component
  const MemberCard = ({ member, index }) => (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.12)] border border-gray-100/80 transition-all duration-500 ease-out flex flex-col transform hover:-translate-y-1"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animation: "fadeUp 0.6s ease-out forwards",
      }}
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative overflow-hidden aspect-square w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E5A00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Role Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-white/20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
          <span className="text-[#0E5A00]">{member.icon}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E5A00]">
            {member.role}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#0E5A00] p-5 text-left flex-1 flex flex-col transition-all duration-300 group-hover:bg-[#0B4A00]">
        <div className="flex-1">
          <h3 className="text-white font-bold text-base md:text-lg tracking-wide leading-snug line-clamp-1">
            {member.name}
          </h3>
          <div className="w-10 h-0.5 bg-[#84D840] rounded-full mt-2 mb-2.5 transition-all duration-300 group-hover:w-14" />
          <p className="text-[#84D840] font-semibold text-[10px] tracking-wider uppercase leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {member.position}
          </p>
        </div>
        <p className="text-white/70 text-xs md:text-sm leading-relaxed mt-3 line-clamp-3 border-t border-white/10 pt-3">
          {member.bio}
        </p>
      </div>
    </div>
  );

  // Section Header Component
  const SectionHeader = ({ badge, title, subtitle }) => (
    <div className="mb-12 max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-[#E4F5E9] mb-4 rounded-full border border-[#0E5A00]/15 px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0E5A00] mx-auto shadow-sm">
        {badge}
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1 bg-[#0E5A00] mx-auto mt-3 rounded-full" />
      <p className="text-gray-500 mt-4 text-sm sm:text-base">{subtitle}</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="font-jakarta bg-gray-50/50">
        <section className="relative bg-gradient-to-br from-[#0E5A00] to-[#0B4600] text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={IMAGES.Home4}
              alt="Nigeria"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E5A00]/50 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/15 shadow-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-100">
                Our Leadership
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Meet the Team Behind <br />
              <span className="text-emerald-300 relative inline-block">
                NURA Foundation
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
              Dedicated leaders committed to rebuilding, reforming, and
              retranslating Nigeria into Africa's number one superpower.
            </p>
          </div>
        </section>

        {/* Executive Leadership Section */}
        {executiveLeadership.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="Executive Leadership"
                title="Leading the Vision"
                subtitle="Strategic direction and national oversight"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {executiveLeadership.map((member, i) => (
                  <MemberCard key={i} member={member} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* State Leadership Section */}
        {stateLeadership.length > 0 && (
          <section className="py-20" style={{ backgroundColor: brandLighter }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="State Leadership"
                title="Regional Chapter Presidents"
                subtitle="Leading the movement across Nigeria's states"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {stateLeadership.map((member, i) => (
                  <MemberCard key={i} member={member} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Field Operations Section */}
        {fieldOperations.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="Field Operations"
                title="Our Dedicated Team"
                subtitle="Committed to community impact and nation-building"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {fieldOperations.map((member, i) => (
                  <MemberCard key={i} member={member} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
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
                  <Heart className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                    Join the Movement
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Want to Join Our Movement?
                </h2>

                <p className="text-emerald-100/80 max-w-xl mx-auto mb-8 leading-relaxed">
                  NURA is reaching every individual willing to work
                  wholeheartedly for the poor and distressed across Nigeria.
                </p>

                <div className="flex flex-wrap justify-center">
                  <a
                    href="https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> Join WhatsApp Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default OurTeam;
