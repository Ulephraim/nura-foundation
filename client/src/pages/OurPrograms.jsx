import { useState } from "react";
import * as Icons from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IMAGES } from "../shared/assets/images";

const programData = [
  {
    id: "child-protection",
    title: "Child Protection Program (CPP)",
    iconName: "Baby",
    description: "Protecting and nurturing the future of Nigeria",
    programs: [
      {
        id: 1,
        title: "School Scholarships & Edutainment",
        description:
          "Providing school scholarships and educational entertainment to children, ensuring they have access to quality learning opportunities.",
        iconName: "School",
      },
      {
        id: 2,
        title: "Discourage Child Hawking",
        description:
          "Campaigns and interventions to discourage child hawking and provide alternatives for children to access education and safe environments.",
        iconName: "UserX",
      },
      {
        id: 3,
        title: "End Premature Marriages of Small Girls",
        description:
          "Working to end premature marriages of young girls through advocacy, education, and community engagement programs.",
        iconName: "Heart",
      },
      {
        id: 4,
        title: "Protect Children Against Abuse & Abduction",
        description:
          "Safety programs and awareness campaigns to protect children from abuse, abduction, and exploitation in their communities.",
        iconName: "Shield",
      },
      {
        id: 5,
        title: "Orphanage Visitation",
        description:
          "Regular visits to orphanages to provide love, care, and material support to children without parental care.",
        iconName: "Home",
      },
      {
        id: 6,
        title: "Helping Motherless and Fatherless Kids on the Streets",
        description:
          "Support programs for motherless and fatherless children on the streets, providing food, shelter, education, and care.",
        iconName: "HandHelping",
      },
      {
        id: 7,
        title: "Kids Orientation and Motivation",
        description:
          "Orientation and motivation programs for children to build confidence, character, and a positive outlook on life.",
        iconName: "Lightbulb",
      },
    ],
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment Program (WEP)",
    iconName: "Users",
    description: "Empowering women for a stronger Nigeria",
    programs: [
      {
        id: 8,
        title: "Women Trade Fair & Skill Acquisition",
        description:
          "Organizing trade fairs and skill acquisition programs to empower women economically and promote their financial independence.",
        iconName: "BriefcaseBusiness",
      },
      {
        id: 9,
        title:
          "Women Sensitisation on Family Planning, Child Birth and Child Labour",
        description:
          "Sensitization programs educating women on family planning, childbirth, and child labour prevention for healthier families.",
        iconName: "Stethoscope",
      },
      {
        id: 10,
        title: "Basic Amenities to Widows, with Food and Other Needs",
        description:
          "Providing basic amenities, food, and other needs to widows, ensuring they live with dignity and comfort.",
        iconName: "HandHeart",
      },
      {
        id: 11,
        title: "Special Symposium on Depression and Domestic Violence",
        description:
          "Special symposiums to address depression and domestic violence, providing support, resources, and safe spaces for women.",
        iconName: "Heart",
      },
      {
        id: 12,
        title: "Support and Encourage Women to Public Offices",
        description:
          "Encouraging and supporting women to run for public offices, promoting gender equity in political representation.",
        iconName: "Landmark",
      },
    ],
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment Initiative (YEI)",
    iconName: "Users",
    description: "Building the leaders of tomorrow",
    programs: [
      {
        id: 13,
        title: "Youth Orientation on Politics",
        description:
          "Orienting young people on political participation, civic responsibility, and their role in shaping Nigeria's future.",
        iconName: "Megaphone",
      },
      {
        id: 14,
        title: "Skill Acquisition",
        description:
          "Providing vocational and technical skills training to young people to enhance their employability and entrepreneurial potential.",
        iconName: "Target",
      },
      {
        id: 15,
        title: "Youth Leadership Portfolio",
        description:
          "Building leadership capacity among young people through mentoring, training, and practical leadership experiences.",
        iconName: "Star",
      },
      {
        id: 16,
        title: "Support Innovations",
        description:
          "Supporting innovative ideas and solutions by young Nigerians, providing incubation, funding, and mentorship opportunities.",
        iconName: "Lightbulb",
      },
      {
        id: 17,
        title: "Provide Empowerment",
        description:
          "Comprehensive empowerment programs providing resources, training, and support to young people to build sustainable futures.",
        iconName: "TrendingUp",
      },
    ],
  },
  {
    id: "corporate-social",
    title: "Corporate Social Networking (CSN)",
    iconName: "Building2",
    description: "Building a united and peaceful Nigeria",
    programs: [
      {
        id: 18,
        title: "Community Service Through Special Outreaches",
        description:
          "Encouraging community involvement in public affairs through special outreaches and community service initiatives.",
        impact: "100+ communities reached",
        duration: "Ongoing",
        locations: ["Nationwide"],
        iconName: "Globe",
      },
      {
        id: 19,
        title:
          "Special Rallies and Outreaches for Peace, Unity and Reformation",
        description:
          "Organizing special rallies and outreaches to promote and strengthen peace, unity, and national reformation.",
        impact: "50+ rallies conducted",
        duration: "Ongoing",
        locations: ["Kaduna", "Jos", "Abuja"],
        iconName: "Handshake",
      },
      {
        id: 20,
        title: "Counter-Extremism Awareness",
        description:
          "Informing the public about the threats posed by radicalization, extremism operations, and terrorism through awareness campaigns.",
        impact: "50,000+ people informed",
        duration: "Ongoing",
        locations: ["Borno", "Yobe", "Adamawa"],
        iconName: "AlertTriangle",
      },
      {
        id: 21,
        title: "The Crop - Annual Seminar",
        description:
          "An annual seminar discussing problems affecting our daily affairs as a collective people internationally and proposing solutions.",
        impact: "Annual flagship event",
        duration: "Annual",
        locations: ["Lagos", "Abuja"],
        iconName: "Radio",
      },
    ],
  },
];

const ProgramIcon = ({ name, className = "w-5 h-5" }) => {
  // const IconComponent = Icons[name];
  const IconComponent = Icons[name] || Icons.HelpCircle;

  return <IconComponent className={className} />;
};

const OurPrograms = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPrograms =
    activeCategory === "all"
      ? programData
      : programData.filter((cat) => cat.id === activeCategory);

  return (
    <>
      <Navbar />

      <main className="font-jakarta bg-gray-50/50">
        {/* HERO SECTION */}
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
                Our Programs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Communities <br />
              <span className="text-emerald-300 relative inline-block">
                Through Action
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
              Discover our comprehensive programs designed to rebuild, reform,
              and retranslate Nigeria into Africa's number one superpower.
            </p>
          </div>
        </section>

        {/* PROGRAMS LAYOUT SECTION */}
        <section className="py-20 bg-[#F4F9F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Tabs Grid */}
            <div className="flex flex-wrap gap-2 justify-center mb-16">
              <button
                onClick={() => setActiveCategory("all")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-[#0E5A00] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-[#E8F5E5] hover:text-[#0E5A00] border border-gray-200"
                }`}
              >
                All Programs
              </button>

              {programData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#0E5A00] text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-[#E8F5E5] hover:text-[#0E5A00] border border-gray-200"
                  }`}
                >
                  {category.title.split("(")[0].trim()}
                </button>
              ))}
            </div>

            {/* Rendered Categories and Cards */}
            <div className="space-y-20">
              {filteredPrograms.map((category) => (
                <div key={category.id} className="space-y-6">
                  {/* Category Section Row Title */}
                  <div className="flex items-center gap-4 border-b border-gray-200/80 pb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-[#E8F5E5] text-[#0E5A00]">
                      <ProgramIcon
                        name={category.iconName}
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Sub-Programs Grid Cards Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.programs.map((program) => (
                      <div
                        key={program.id}
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#E8F5E5] text-[#0E5A00]">
                              <ProgramIcon
                                name={program.iconName}
                                className="w-5 h-5"
                              />
                            </div>
                            <h4 className="font-bold text-gray-900 text-base leading-snug">
                              {program.title}
                            </h4>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {program.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0E5A00] to-[#0B4A00] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
                  <Icons.Heart className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                    Join Us
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Ready to Make a Difference?
                </h2>

                <p className="text-emerald-100/80 max-w-xl mx-auto mb-8 leading-relaxed">
                  Join NURA Foundation in building a better future. Whether you
                  volunteer, partner, or donate, your support matters.
                </p>

                <div className="flex flex-wrap justify-center">
                  <a
                    href="https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                  >
                    <Icons.MessageCircle className="w-4 h-4" /> Join Our Channel
                  </a>
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

export default OurPrograms;
