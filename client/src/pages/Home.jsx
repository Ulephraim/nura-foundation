// import { useState } from "react";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import {
//   ChevronRight,
//   Plus,
//   Minus,
//   ArrowRight,
//   Globe,
//   Calendar,
//   Heart,
//   Users,
//   Target,
//   Award,
//   TrendingUp,
//   BookOpen,
//   Briefcase,
//   Phone,
//   Mail,
//   MessageCircle,
//   Zap,
//   ChevronDown,
//   ChevronUp,
//   Globe2,
//   Sparkles,
//   HandHelping,
//   Shield,
//   Star,
//   Leaf,
//   GraduationCap,
//   DollarSign,
// } from "lucide-react";
// import HeroSlider from "../components/sections/Hero";
// import { IMAGES } from "../shared/assets/images";

// // Data using NURA's mission pillars
// const pillars = [
//   {
//     icon: <Target className="w-6 h-6" />,
//     title: "Mission",
//     desc: [
//       "Envisioned in promoting peace, unity, patriotism, justice and integrity.",
//       "Primary responsibility in protecting their populations and internationals from the threats posed by terrorism.",
//       "Promote youth innovation, harness their giftings for Nation building, empowering them financially and with mentorship support to stand without compromise.",
//     ],
//   },
//   {
//     icon: <Sparkles className="w-6 h-6" />,
//     title: "Vision",
//     desc: "Rebuild, Reform and Retranslate Nigeria back into Africa's number one super power.",
//   },
//   // {
//   //   icon: <HandHelping className="w-6 h-6" />,
//   //   title: "Youth Empowerment",
//   //   desc: "Harnessing youth giftings for Nation building, empowering them financially and with mentorship support to stand without compromise.",
//   // },
//   // {
//   //   icon: <Shield className="w-6 h-6" />,
//   //   title: "Security & Peace",
//   //   desc: "Primary responsibility in protecting populations from threats posed by terrorism and promoting peaceful coexistence across Nigeria.",
//   // },
// ];

// const stats = [
//   { value: "50+", label: "Communities Reached" },
//   { value: "10K+", label: "Youth Empowered" },
//   { value: "25+", label: "States Impacted" },
//   { value: "100+", label: "Peace Initiatives" },
// ];

// const projects = [
//   {
//     tag: "Youth Innovation",
//     color: "bg-emerald-100 text-emerald-700",
//     img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
//     title: "Nigerian Youth Innovation Hub",
//     desc: "Providing mentorship, funding, and tech skills to young Nigerians to build sustainable businesses and solutions.",
//   },
//   {
//     tag: "Peace Building",
//     color: "bg-amber-100 text-amber-700",
//     img: "https://images.unsplash.com/photo-1540316979133-9c59ec69b797?w=400&q=80",
//     title: "Community Peace Initiative",
//     desc: "Fostering dialogue, reconciliation, and unity across diverse ethnic and religious groups in conflict-prone regions.",
//   },
//   {
//     tag: "Anti-Terrorism",
//     color: "bg-rose-100 text-rose-700",
//     img: "https://images.unsplash.com/photo-1544568100-847a6155859f?w=400&q=80",
//     title: "Securing Our Communities",
//     desc: "Training and awareness programs to help communities identify and prevent extremist threats.",
//   },
//   {
//     tag: "Economic Dev",
//     color: "bg-indigo-100 text-indigo-700",
//     img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
//     title: "Financial Empowerment",
//     desc: "Providing microloans, vocational training, and business support to underprivileged youth and women.",
//   },
// ];

// const projectFilters = [
//   "All",
//   "Youth",
//   "Peace",
//   "Security",
//   "Economic",
//   "Education",
// ];

// const blogPosts = [
//   {
//     num: "01",
//     title: "NURA Launches Nationwide Youth Mentorship Program",
//     date: "Mar 15, 2025",
//   },
//   {
//     num: "02",
//     title: "Promoting Unity: Interfaith Dialogue Success in Kaduna",
//     date: "Mar 10, 2025",
//     featured: true,
//   },
//   {
//     num: "03",
//     title: "Over 1,000 Youth Receive Tech Training in Lagos",
//     date: "Mar 5, 2025",
//   },
// ];

// const jobs = [
//   "Field Coordinator - Youth Empowerment",
//   "Program Manager - Peace & Security",
//   "Finance & Admin Officer",
//   "Communications & Social Media Lead",
//   "Monitoring & Evaluation Specialist",
// ];

// const Home = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [openJob, setOpenJob] = useState(null);
//   const [activeAboutTab, setActiveAboutTab] = useState("About NURA");

//   // Brand color: #0b6601
//   const brandColor = "#0E5A00";
//   const brandLight = "#e8f5e5";

//   return (
//     <>
//       <Navbar />
//       <HeroSlider />
//       <main className="font-jakarta">
//         <section className="relative bg-gradient-to-br from-white via-emerald-50/30 to-white h-[75vh] md:h-screen flex items-start justify-center overflow-hidden ">
//           <div className="absolute inset-0 pointer-events-none select-none">
//             <img
//               src={IMAGES.UnitedPeople}
//               alt="Nura foundation united people"
//               className="w-full h-full object-contain sm:object-cover"
//               style={{ objectPosition: "center 50%" }}
//             />
//           </div>

//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20 sm:pt-28 md:pt-32 lg:pt-20">
//             <h1 className="font-jakarta text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight max-w-4xl mx-auto">
//               <span className="text-[#0E5A00]">Nigeria will be built</span> by
//               Nigerians.
//             </h1>
//             <p className="mt-6 text-gray-900 max-w-xl mx-auto text-base sm:text-lg font-bold">
//               Rebuilding, Reforming, and Retranslating Nigeria into Africa's
//               number one super power. Love for God and Nation.
//             </p>
//           </div>
//         </section>

//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center max-w-2xl mx-auto mb-12">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
//                 <span className="text-sm font-semibold text-[#0E5A00] uppercase tracking-wider">
//                   Our Core
//                 </span>
//                 <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
//               </div>
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                 Building a New Nigeria
//               </h2>
//               <p className="text-gray-500 mt-2">
//                 Through peace, unity, patriotism, justice, and integrity
//               </p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {pillars.map((p, i) => (
//                 <div
//                   key={i}
//                   className="group bg-white border border-gray-100 rounded-2xl p-6 text-center sm:text-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//                 >
//                   <div
//                     className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors"
//                     style={{ backgroundColor: brandLight, color: brandColor }}
//                   >
//                     {p.icon}
//                   </div>
//                   <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 ">
//                     {p.title}
//                   </h3>
//                   {/* <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
//                     {p.desc}
//                   </p> */}

//                   <div className="text-gray-500 text-sm sm:text-base leading-relaxed space-y-2 pl-2">
//                     {Array.isArray(p.desc) ? (
//                       p.desc.map((item, idx) => (
//                         <p
//                           key={idx}
//                           className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-400"
//                         >
//                           {item}
//                         </p>
//                       ))
//                     ) : (
//                       <p>{p.desc}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ABOUT NURA SECTION */}
//         <section
//           id="about"
//           className="py-16"
//           style={{ backgroundColor: brandLight }}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row gap-10 items-start">
//               <div className="flex-1">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div
//                     className="w-1 h-6 rounded-full"
//                     style={{ backgroundColor: brandColor }}
//                   />
//                   <span className="text-sm font-semibold text-[#0E5A00] uppercase tracking-wider">
//                     About NURA
//                   </span>
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 ">
//                   Who We Are & Our Mission
//                 </h2>
//                 <div className="flex gap-4 mt-5 border-b border-emerald-200">
//                   {["About NURA", "Our Vision", "Legal Status"].map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveAboutTab(tab)}
//                       className={`pb-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
//                         activeAboutTab === tab
//                           ? "border-[#0E5A00] text-[#0E5A00]"
//                           : "border-transparent text-gray-500 hover:text-[#0E5A00]"
//                       }`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="mt-6 space-y-4">
//                   {activeAboutTab === "About NURA" && (
//                     <>
//                       <p className="text-gray-600 text-sm leading-7">
//                         NURA Foundation is a socio-economic development
//                         organization committed to rebuilding, reforming, and
//                         retranslating Nigeria into Africa's number one super
//                         power. Since our establishment, we have been at the
//                         forefront of promoting peace, unity, patriotism,
//                         justice, and integrity.
//                       </p>
//                       <p className="text-gray-600 text-sm leading-7">
//                         Our primary responsibility includes protecting
//                         populations from threats posed by terrorism, promoting
//                         youth innovation, harnessing their giftings for Nation
//                         building, and empowering them financially with
//                         mentorship support to stand without compromise. Guided
//                         by our motto — Love for God and Nation.
//                       </p>
//                     </>
//                   )}
//                   {activeAboutTab === "Our Vision" && (
//                     <>
//                       <p className="text-gray-600 text-sm leading-7">
//                         We envision a Nigeria that stands as Africa's undisputed
//                         super power, a nation rebuilt on the foundations of
//                         peace, unity, and prosperity for all citizens. A country
//                         where every young person has the opportunity to
//                         innovate, lead, and contribute to national development.
//                       </p>
//                       <p className="text-gray-600 text-sm leading-7">
//                         Through strategic partnerships, innovative programs, and
//                         unwavering commitment to our values, we aim to transform
//                         Nigeria into a beacon of hope and progress for the
//                         entire African continent.
//                       </p>
//                     </>
//                   )}
//                   {activeAboutTab === "Legal Status" && (
//                     <>
//                       <p className="text-gray-600 text-sm leading-7">
//                         NURA Foundation is a registered non-profit organization
//                         operating across Nigeria. We are fully compliant with
//                         all regulatory requirements and maintain the highest
//                         standards of transparency and accountability.
//                       </p>
//                       <p className="text-gray-600 text-sm leading-7">
//                         Our operations are guided by international best
//                         practices for non-governmental organizations, and we are
//                         committed to stewarding all resources responsibly to
//                         maximize impact for the communities we serve.
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//               <div className="flex-1 relative">
//                 <div className="grid grid-cols-2 gap-3">
//                   <img
//                     src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80"
//                     alt="Nigerian youth"
//                     className="rounded-2xl w-full h-48 object-cover"
//                   />
//                   <img
//                     src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80"
//                     alt="Community"
//                     className="rounded-2xl w-full h-48 object-cover mt-6"
//                   />
//                   <img
//                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
//                     alt="Team work"
//                     className="rounded-2xl w-full h-48 object-cover -mt-6"
//                   />
//                   <img
//                     src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80"
//                     alt="Peace initiative"
//                     className="rounded-2xl w-full h-48 object-cover"
//                   />
//                 </div>
//                 <div
//                   className="absolute -bottom-4 left-4 text-white rounded-2xl px-5 py-3 shadow-xl"
//                   style={{ backgroundColor: brandColor }}
//                 >
//                   <p className="text-2xl font-extrabold">10+ Years</p>
//                   <p className="text-xs font-medium opacity-90">
//                     of Nation Building
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* COMMUNITY IMPACT SECTION */}
//         <section
//           className="relative text-white py-20 overflow-hidden"
//           style={{ backgroundColor: brandColor }}
//         >
//           <div className="absolute inset-0">
//             <img
//               src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
//               alt="Nigerian community"
//               className="w-full h-full object-cover opacity-30"
//             />
//           </div>
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-2xl">
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="w-1 h-5 rounded-full bg-amber-400" />
//                 <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
//                   In The Community
//                 </span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
//                 Together We Are Strengthening Nigeria
//               </h2>
//               <p className="text-emerald-100 text-sm leading-7 mb-6">
//                 NURA reaches every individual willing to work wholeheartedly for
//                 the poor and distressed across Nigeria. We believe in lending a
//                 helping hand to build a nation where every citizen thrives.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="#join"
//                   className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors shadow-lg"
//                 >
//                   Join Our Movement <ArrowRight className="w-4 h-4" />
//                 </a>
//                 <a
//                   href="https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 bg-white/20 backdrop-blur hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
//                 >
//                   <MessageCircle className="w-4 h-4" /> WhatsApp Channel
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* STATS SECTION */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-10">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Our Impact Across Nigeria
//               </h2>
//               <p className="text-gray-500 mt-1">
//                 Numbers that inspire us to do more
//               </p>
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {stats.map((s, i) => (
//                 <div
//                   key={i}
//                   className="text-center rounded-2xl py-8 px-4 transition-all duration-300 hover:shadow-lg"
//                   style={{ backgroundColor: brandLight }}
//                 >
//                   <p
//                     className="text-3xl sm:text-4xl font-extrabold"
//                     style={{ color: brandColor }}
//                   >
//                     {s.value}
//                   </p>
//                   <p className="text-gray-600 text-sm mt-1 font-medium">
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* BLOG / NEWS SECTION */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center gap-2 mb-2">
//               <div
//                 className="w-1 h-5 rounded-full"
//                 style={{ backgroundColor: brandColor }}
//               />
//               <span className="text-xs font-semibold text-[#0B4600] uppercase tracking-wider">
//                 Latest News
//               </span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
//               Be A Change Maker
//             </h2>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {blogPosts.map((post, i) => (
//                 <article
//                   key={i}
//                   className={`rounded-2xl overflow-hidden border transition-all hover:shadow-lg ${
//                     post.featured
//                       ? "border-amber-200 bg-amber-50"
//                       : "border-gray-100 bg-white"
//                   }`}
//                 >
//                   {post.featured && (
//                     <div className="h-44 overflow-hidden">
//                       <img
//                         src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&q=80"
//                         alt={post.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   )}
//                   <div className="p-5">
//                     <div className="flex items-start gap-3">
//                       <span
//                         className={`text-3xl font-extrabold ${post.featured ? "text-amber-500" : "text-emerald-200"} leading-none`}
//                       >
//                         {post.num}
//                       </span>
//                       <div>
//                         <p className="text-xs text-gray-400 mb-1">
//                           {post.date}
//                         </p>
//                         <h3 className="font-bold text-gray-800 text-sm leading-snug">
//                           {post.title}
//                         </h3>
//                       </div>
//                     </div>
//                     {post.featured && (
//                       <div className="mt-4 flex items-center gap-1">
//                         <a
//                           href="#"
//                           className="text-amber-600 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
//                         >
//                           Read more <ArrowRight size={12} />
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CAREER SECTION */}
//         <section
//           id="career"
//           className="py-16"
//           style={{ backgroundColor: brandLight }}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <div
//                     className="w-1 h-5 rounded-full"
//                     style={{ backgroundColor: brandColor }}
//                   />
//                   <span className="text-xs font-semibold text-[#0E5A00] uppercase tracking-wider">
//                     Career
//                   </span>
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                   Join Our Mission
//                 </h2>
//                 <p className="text-gray-600 text-sm leading-7 mb-6">
//                   Be part of a team dedicated to rebuilding Nigeria. We're
//                   looking for passionate individuals who want to make a real
//                   difference in their communities and help shape the nation's
//                   future.
//                 </p>
//                 <div className="space-y-3">
//                   {jobs.map((job, i) => (
//                     <div
//                       key={i}
//                       className="bg-white rounded-xl border border-gray-100 shadow-sm"
//                     >
//                       <button
//                         onClick={() => setOpenJob(openJob === i ? null : i)}
//                         className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:text-emerald-700 transition-colors"
//                       >
//                         {job}
//                         <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
//                           {openJob === i ? (
//                             <Minus size={16} />
//                           ) : (
//                             <Plus size={16} />
//                           )}
//                         </span>
//                       </button>
//                       {openJob === i && (
//                         <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
//                           We are looking for a passionate and motivated
//                           individual to join our team. Please send your CV and
//                           cover letter to{" "}
//                           <span className="text-emerald-600">
//                             nuranation@gmail.com
//                           </span>
//                           . We offer competitive compensation and the
//                           opportunity to make a real difference.
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6">
//                   <a
//                     href="mailto:nuranation@gmail.com"
//                     className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
//                     style={{ backgroundColor: brandColor }}
//                   >
//                     <Mail className="w-4 h-4" /> Send Your Application
//                   </a>
//                 </div>
//               </div>
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
//                   alt="NURA team"
//                   className="rounded-2xl w-full h-80 lg:h-[500px] object-cover shadow-xl"
//                 />
//                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
//                   <p className="font-bold text-gray-900 text-sm">
//                     Join the NURA family
//                   </p>
//                   <p className="text-gray-500 text-xs mt-1">
//                     Be part of a team dedicated to changing lives and building a
//                     better Nigeria.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };
// export default Home;

import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  ChevronRight,
  Plus,
  Minus,
  ArrowRight,
  Globe,
  Calendar,
  Heart,
  Users,
  Target,
  Award,
  TrendingUp,
  BookOpen,
  Briefcase,
  Phone,
  Mail,
  MessageCircle,
  Zap,
  ChevronDown,
  ChevronUp,
  Globe2,
  Sparkles,
  HandHelping,
  Shield,
  Star,
  Leaf,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import HeroSlider from "../components/sections/Hero";
import { IMAGES } from "../shared/assets/images";

// Data using NURA's mission pillars
const pillars = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Mission",
    desc: [
      "Envisioned in promoting peace, unity, patriotism, justice and integrity.",
      "Primary responsibility in protecting their populations and internationals from the threats posed by terrorism.",
      "Promote youth innovation, harness their giftings for Nation building, empowering them financially and with mentorship support to stand without compromise.",
    ],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Vision",
    desc: "Rebuild, Reform and Retranslate Nigeria back into Africa's number one super power.",
  },
];

const stats = [
  { value: "50+", label: "Communities Reached" },
  { value: "10K+", label: "Youth Empowered" },
  { value: "25+", label: "States Impacted" },
  { value: "100+", label: "Peace Initiatives" },
];

const projects = [
  {
    tag: "Youth Innovation",
    color: "bg-emerald-100 text-emerald-700",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
    title: "Nigerian Youth Innovation Hub",
    desc: "Providing mentorship, funding, and tech skills to young Nigerians to build sustainable businesses and solutions.",
  },
  {
    tag: "Peace Building",
    color: "bg-amber-100 text-amber-700",
    img: "https://images.unsplash.com/photo-1540316979133-9c59ec69b797?w=400&q=80",
    title: "Community Peace Initiative",
    desc: "Fostering dialogue, reconciliation, and unity across diverse ethnic and religious groups in conflict-prone regions.",
  },
  {
    tag: "Anti-Terrorism",
    color: "bg-rose-100 text-rose-700",
    img: "https://images.unsplash.com/photo-1544568100-847a6155859f?w=400&q=80",
    title: "Securing Our Communities",
    desc: "Training and awareness programs to help communities identify and prevent extremist threats.",
  },
  {
    tag: "Economic Dev",
    color: "bg-indigo-100 text-indigo-700",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    title: "Financial Empowerment",
    desc: "Providing microloans, vocational training, and business support to underprivileged youth and women.",
  },
];

const projectFilters = [
  "All",
  "Youth",
  "Peace",
  "Security",
  "Economic",
  "Education",
];

const blogPosts = [
  {
    num: "01",
    title: "NURA Launches Nationwide Youth Mentorship Program",
    date: "Mar 15, 2025",
  },
  {
    num: "02",
    title: "Promoting Unity: Interfaith Dialogue Success in Kaduna",
    date: "Mar 10, 2025",
    featured: true,
  },
  {
    num: "03",
    title: "Over 1,000 Youth Receive Tech Training in Lagos",
    date: "Mar 5, 2025",
  },
];

// Updated FAQ data focused on NURA Foundation's purpose
const faqs = [
  {
    question: "What is the main purpose of NURA Foundation?",
    answer:
      "NURA Foundation is a socio-economic development organization committed to rebuilding, reforming, and retranslating Nigeria into Africa's number one super power. We promote peace, unity, patriotism, justice, and integrity across the nation.",
  },
  {
    question: "How does NURA support youth empowerment?",
    answer:
      "We harness youth giftings for Nation building, empowering them financially and with mentorship support to stand without compromise. Our programs include tech training, entrepreneurship workshops, and leadership development initiatives.",
  },
  {
    question: "What security initiatives does NURA run?",
    answer:
      "Our primary responsibility includes protecting populations from threats posed by terrorism through training, awareness programs, and community engagement to help prevent and respond to extremist threats.",
  },
  {
    question: "How can I get involved with NURA Foundation?",
    answer:
      "You can join our movement by volunteering, donating, or partnering with us. Reach out via email at nuranation@gmail.com or follow our WhatsApp channel for updates on events and opportunities.",
  },
  {
    question: "Where does NURA Foundation operate?",
    answer:
      "We operate across Nigeria, with current impact in over 25 states including Lagos, Kaduna, Abuja, and Kano. Our programs reach more than 50 communities nationwide.",
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);
  const [activeAboutTab, setActiveAboutTab] = useState("About NURA");

  // Brand colors
  const brandPrimary = "#0E5A00";
  const brandHover = "#0B4600";
  const brandLight = "#E8F5E5"; // Light, fresh shade derived from #0E5A00
  const brandLighter = "#F4F9F2"; // Even lighter for backgrounds

  return (
    <>
      <Navbar />
      <HeroSlider />
      <main className="font-jakarta">
        <section
          className={`relative bg-gradient-to-br from-white via-[${brandLight}]/30 to-white h-[75vh] md:h-screen flex items-start justify-center overflow-hidden`}
        >
          <div className="absolute inset-0 pointer-events-none select-none">
            <img
              src={IMAGES.UnitedPeople}
              alt="Nura foundation united people"
              className="w-full h-full object-contain sm:object-cover"
              style={{ objectPosition: "center 50%" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20 sm:pt-28 md:pt-32 lg:pt-20">
            <h1 className="font-jakarta text-3xl sm:text-5xl  font-black text-gray-900 leading-tight max-w-4xl mx-auto">
              <span className="text-[#0E5A00]">Nigeria will be built</span> by
              Nigerians.
            </h1>
            <p className="mt-6 text-gray-900 max-w-xl mx-auto text-base sm:text-lg lg:text-xl font-bold">
              Rebuilding, Reforming, and Retranslating Nigeria into Africa's
              number one super power. Love for God and Nation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
                <span className="text-sm font-semibold text-[#0E5A00] uppercase tracking-wider">
                  Our Core
                </span>
                <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
                Building a New Nigeria
              </h2>
              <p className="text-gray-500 mt-2 text-base lg:text-lg">
                Through peace, unity, patriotism, justice, and integrity
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 text-center sm:text-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: brandLight, color: brandPrimary }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">
                    {p.title}
                  </h3>
                  <div className="text-gray-500 text-sm lg:text-base leading-relaxed space-y-2 pl-2">
                    {Array.isArray(p.desc) ? (
                      p.desc.map((item, idx) => (
                        <p
                          key={idx}
                          className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                        >
                          {item}
                        </p>
                      ))
                    ) : (
                      <p>{p.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT NURA SECTION */}
        <section
          id="about"
          className="py-16"
          style={{ backgroundColor: brandLighter }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-1 h-6 rounded-full"
                    style={{ backgroundColor: brandPrimary }}
                  />
                  <span className="text-sm font-semibold text-[#0E5A00] uppercase tracking-wider">
                    About NURA
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Who We Are & Our Mission
                </h2>
                <div className="flex gap-4 mt-5 border-b border-emerald-200">
                  {["About NURA", "Our Vision", "Legal Status"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveAboutTab(tab)}
                      className={`pb-3 text-sm lg:text-base font-semibold transition-colors border-b-2 -mb-px ${
                        activeAboutTab === tab
                          ? "border-[#0E5A00] text-[#0E5A00]"
                          : "border-transparent text-gray-500 hover:text-[#0E5A00]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="mt-6 space-y-4">
                  {activeAboutTab === "About NURA" && (
                    <>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        NURA Foundation is a socio-economic development
                        organization committed to rebuilding, reforming, and
                        retranslating Nigeria into Africa's number one super
                        power. Since our establishment, we have been at the
                        forefront of promoting peace, unity, patriotism,
                        justice, and integrity.
                      </p>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        Our primary responsibility includes protecting
                        populations from threats posed by terrorism, promoting
                        youth innovation, harnessing their giftings for Nation
                        building, and empowering them financially with
                        mentorship support to stand without compromise. Guided
                        by our motto — Love for God and Nation.
                      </p>
                    </>
                  )}
                  {activeAboutTab === "Our Vision" && (
                    <>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        We envision a Nigeria that stands as Africa's undisputed
                        super power, a nation rebuilt on the foundations of
                        peace, unity, and prosperity for all citizens. A country
                        where every young person has the opportunity to
                        innovate, lead, and contribute to national development.
                      </p>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        Through strategic partnerships, innovative programs, and
                        unwavering commitment to our values, we aim to transform
                        Nigeria into a beacon of hope and progress for the
                        entire African continent.
                      </p>
                    </>
                  )}
                  {activeAboutTab === "Legal Status" && (
                    <>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        NURA Foundation is a registered non-profit organization
                        operating across Nigeria. We are fully compliant with
                        all regulatory requirements and maintain the highest
                        standards of transparency and accountability.
                      </p>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        Our operations are guided by international best
                        practices for non-governmental organizations, and we are
                        committed to stewarding all resources responsibly to
                        maximize impact for the communities we serve.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="grid grid-cols-2 gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80"
                    alt="Nigerian youth"
                    className="rounded-2xl w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80"
                    alt="Community"
                    className="rounded-2xl w-full h-48 object-cover mt-6"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                    alt="Team work"
                    className="rounded-2xl w-full h-48 object-cover -mt-6"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80"
                    alt="Peace initiative"
                    className="rounded-2xl w-full h-48 object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-4 left-4 text-white rounded-2xl px-5 py-3 shadow-xl"
                  style={{ backgroundColor: brandPrimary }}
                >
                  <p className="text-2xl font-extrabold">10+ Years</p>
                  <p className="text-xs font-medium opacity-90">
                    of Nation Building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY IMPACT SECTION */}
        <section
          className="relative text-white py-20 overflow-hidden"
          style={{ backgroundColor: brandPrimary }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
              alt="Nigerian community"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-5 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                  In The Community
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Together We Are Strengthening Nigeria
              </h2>
              <p className="text-emerald-100 text-base lg:text-lg leading-relaxed mb-6">
                NURA reaches every individual willing to work wholeheartedly for
                the poor and distressed across Nigeria. We believe in lending a
                helping hand to build a nation where every citizen thrives.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors shadow-lg"
                >
                  Join Our Movement <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Channel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
                Our Impact Across Nigeria
              </h2>
              <p className="text-gray-500 mt-1 text-lg">
                Numbers that inspire us to do more
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center rounded-2xl py-8 px-4 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: brandLight }}
                >
                  <p
                    className="text-3xl sm:text-5xl font-extrabold"
                    style={{ color: brandPrimary }}
                  >
                    {s.value}
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg mt-1 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG / NEWS SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-1 h-5 rounded-full"
                style={{ backgroundColor: brandPrimary }}
              />
              <span className="text-xs font-semibold text-[#0B4600] uppercase tracking-wider">
                Latest News
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-8">
              Be A Change Maker
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <article
                  key={i}
                  className={`rounded-2xl overflow-hidden border transition-all hover:shadow-lg ${
                    post.featured
                      ? "border-amber-200 bg-amber-50"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  {post.featured && (
                    <div className="h-44 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&q=80"
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <span
                        className={`text-3xl font-extrabold ${post.featured ? "text-amber-500" : "text-emerald-200"} leading-none`}
                      >
                        {post.num}
                      </span>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">
                          {post.date}
                        </p>
                        <h3 className="font-bold text-gray-800 text-base lg:text-lg leading-snug">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    {post.featured && (
                      <div className="mt-4 flex items-center gap-1">
                        <a
                          href="#"
                          className="text-amber-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read more <ArrowRight size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION - Replacing Career */}
        <section
          id="faq"
          className="py-16"
          style={{ backgroundColor: brandLighter }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-1 h-5 rounded-full"
                    style={{ backgroundColor: brandPrimary }}
                  />
                  <span className="text-xs font-semibold text-[#0E5A00] uppercase tracking-wider">
                    Common Questions
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Find answers to common questions about NURA Foundation's
                  mission, programs, and how you can get involved.
                </p>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm lg:text-base font-semibold text-gray-800 hover:text-[#0E5A00] transition-colors"
                      >
                        {faq.question}
                        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
                          {openFaq === i ? (
                            <Minus size={16} />
                          ) : (
                            <Plus size={16} />
                          )}
                        </span>
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-4 text-sm lg:text-base text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="mailto:nuranation@gmail.com"
                    className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-[#0B4600]"
                    style={{ backgroundColor: brandPrimary }}
                  >
                    <Mail className="w-4 h-4" /> Ask Your Question
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                  alt="NURA team"
                  className="rounded-2xl w-full h-80 lg:h-[500px] object-cover shadow-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                  <p className="font-bold text-gray-900 text-lg">
                    Have more questions?
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Reach out to us directly — we're here to help you understand
                    our mission and how you can be part of it.
                  </p>
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
export default Home;
