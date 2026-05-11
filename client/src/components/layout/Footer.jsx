// // components/Footer.js
// import {
//   Heart,
//   // Facebook,
//   // Instagram,
//   MessageCircle,
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
//   ChevronRight,
// } from "lucide-react";
// import { LOGOS } from "../../shared/assets/logo";

// const Footer = () => {
//   const brandColor = "#0b6601";
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-gray-300 font-jakarta">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Brand Column */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <a
//                 href="/"
//                 className="flex items-center gap-2 group cursor-pointer font-bold text-sm md:text-base lg:text-lg min-w-[120px]"
//               >
//                 <img
//                   className="h-10 sm:h-12 w-auto object-contain"
//                   alt="Nura Foundation Logo"
//                   src={LOGOS.NuraLogo}
//                 />
//                 <div className="leading-tight text-white">
//                   <h1 className="m-0">NURA</h1>
//                   <p className="m-0">Foundation</p>
//                 </div>
//               </a>
//             </div>
//             <p className="text-sm text-gray-400 leading-relaxed mb-4">
//               Rebuilding, Reforming, and Retranslating Nigeria into Africa's
//               number one super power through peace, unity, and youth
//               empowerment.
//             </p>
//             <div className="flex gap-3">
//               <a
//                 href="https://www.facebook.com/share/1BwhfqMX17/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors hover:-translate-y-0.5 transform"
//               >
//                 {/* <Facebook size={16} /> */} F
//               </a>
//               <a
//                 href="https://www.instagram.com/nura_foundation"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors hover:-translate-y-0.5 transform"
//               >
//                 {/* <Instagram size={16} /> */}I
//               </a>
//               <a
//                 href="https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors hover:-translate-y-0.5 transform"
//               >
//                 <MessageCircle size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block">
//               Quick Links
//               <div
//                 className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full"
//                 style={{ backgroundColor: brandColor }}
//               />
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li>
//                 <a
//                   href="/"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#about"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#whatwedo"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Our Programs
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#career"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#donate"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Donate
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Our Programs */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block">
//               Our Programs
//               <div
//                 className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full"
//                 style={{ backgroundColor: brandColor }}
//               />
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Youth Innovation Hub
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Peace & Unity Initiative
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Anti-Terrorism Awareness
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Financial Empowerment
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <ChevronRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                   />
//                   Mentorship Program
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block">
//               Get In Touch
//               <div
//                 className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full"
//                 style={{ backgroundColor: brandColor }}
//               />
//             </h3>
//             <ul className="space-y-4 text-sm">
//               <li className="flex items-start gap-3 group">
//                 <Phone
//                   size={16}
//                   className="text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
//                 />
//                 <div className="flex flex-col">
//                   <a
//                     href="tel:+2349073209577"
//                     className="text-gray-400 hover:text-emerald-400 transition-colors"
//                   >
//                     +234 907 320 9577
//                   </a>
//                   <a
//                     href="tel:+2348108624192"
//                     className="text-gray-400 hover:text-emerald-400 transition-colors text-xs"
//                   >
//                     +234 810 862 4192
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-center gap-3 group">
//                 <Mail
//                   size={16}
//                   className="text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform"
//                 />
//                 <a
//                   href="mailto:nuranation@gmail.com"
//                   className="text-gray-400 hover:text-emerald-400 transition-colors"
//                 >
//                   nuranation@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-3 group">
//                 <Globe
//                   size={16}
//                   className="text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform"
//                 />
//                 <span className="text-gray-400">Nigeria</span>
//               </li>
//             </ul>

//             {/* Newsletter Signup */}
//             <div className="mt-6">
//               <p className="text-xs text-gray-400 mb-2">
//                 Subscribe to our newsletter
//               </p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="bg-gray-800 text-white text-xs px-3 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
//                 />
//                 <button
//                   className="px-3 py-2 rounded-r-lg text-white text-xs font-semibold transition-colors hover:opacity-90"
//                   style={{ backgroundColor: brandColor }}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
//             <p className="text-center sm:text-left">
//               &copy; {currentYear} NURA Foundation. All rights reserved.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
//               <a href="#" className="hover:text-emerald-400 transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-emerald-400 transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="hover:text-emerald-400 transition-colors">
//                 Cookie Policy
//               </a>
//               <span className="flex items-center gap-1 text-gray-600">
//                 Made with{" "}
//                 <Heart size={10} fill={brandColor} color={brandColor} /> for
//                 Nigeria
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.js
// import { useState } from "react";
// import {
//   Heart,
//   MessageCircle,
//   Mail,
//   Phone,
//   Globe,
//   ChevronRight,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import { LOGOS } from "../../shared/assets/logo";
// import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   // Brand colors matching the main site
//   const brandPrimary = "#0E5A00";
//   const brandHover = "#0B4600";
//   const currentYear = new Date().getFullYear();

//   // State for collapsible sections on mobile
//   const [openSections, setOpenSections] = useState({
//     quickLinks: false,
//     ourPrograms: false,
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <footer className="bg-gray-900 text-gray-300 font-jakarta">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Brand Column - Always visible */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <a
//                 href="/"
//                 className="flex items-center gap-2 group cursor-pointer font-bold text-sm md:text-base lg:text-lg min-w-[120px]"
//               >
//                 <img
//                   className="h-10 sm:h-12 w-auto object-contain"
//                   alt="Nura Foundation Logo"
//                   src={LOGOS.NuraLogo}
//                 />
//                 <div className="leading-tight text-white">
//                   <h1 className="m-0">NURA</h1>
//                   <p className="m-0">Foundation</p>
//                 </div>
//               </a>
//             </div>
//             <p className="text-sm text-gray-400 leading-relaxed mb-4">
//               Rebuilding, Reforming, and Retranslating Nigeria into Africa's
//               number one super power through peace, unity, and youth
//               empowerment.
//             </p>
//             <div className="flex gap-3">
//               <a
//                 href="https://www.facebook.com/share/1BwhfqMX17/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0E5A00] transition-colors hover:-translate-y-0.5 transform text-gray-400 hover:text-white"
//               >
//                 <FaFacebook size={16} />
//               </a>
//               <a
//                 href="https://www.instagram.com/nura_foundation"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0E5A00] transition-colors hover:-translate-y-0.5 transform text-gray-400 hover:text-white"
//               >
//                 <FaInstagram size={16} />
//               </a>
//               <a
//                 href="https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0E5A00] transition-colors hover:-translate-y-0.5 transform text-gray-400 hover:text-white"
//               >
//                 <FaWhatsapp size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links - Collapsible on mobile */}
//           <div>
//             <button
//               onClick={() => toggleSection("quickLinks")}
//               className="w-full flex items-center justify-between md:cursor-default"
//             >
//               <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block md:mb-5">
//                 Quick Links
//                 <div
//                   className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full hidden md:block"
//                   style={{ backgroundColor: brandPrimary }}
//                 />
//               </h3>
//               <div className="md:hidden text-gray-400">
//                 {openSections.quickLinks ? (
//                   <ChevronUp size={18} />
//                 ) : (
//                   <ChevronDown size={18} />
//                 )}
//               </div>
//             </button>
//             <div
//               className={`${openSections.quickLinks ? "block" : "hidden"} md:block`}
//             >
//               <ul className="space-y-3 text-sm mt-3 md:mt-0">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#about"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#whatwedo"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Our Programs
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#faq"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     FAQ
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#donate"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Donate
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Our Programs - Collapsible on mobile */}
//           <div>
//             <button
//               onClick={() => toggleSection("ourPrograms")}
//               className="w-full flex items-center justify-between md:cursor-default"
//             >
//               <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block md:mb-5">
//                 Our Programs
//                 <div
//                   className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full hidden md:block"
//                   style={{ backgroundColor: brandPrimary }}
//                 />
//               </h3>
//               <div className="md:hidden text-gray-400">
//                 {openSections.ourPrograms ? (
//                   <ChevronUp size={18} />
//                 ) : (
//                   <ChevronDown size={18} />
//                 )}
//               </div>
//             </button>
//             <div
//               className={`${openSections.ourPrograms ? "block" : "hidden"} md:block`}
//             >
//               <ul className="space-y-3 text-sm mt-3 md:mt-0">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Youth Innovation Hub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Peace & Unity Initiative
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Anti-Terrorism Awareness
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Financial Empowerment
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
//                     />
//                     Mentorship Program
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Info - Always visible */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block">
//               Get In Touch
//               <div
//                 className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full"
//                 style={{ backgroundColor: brandPrimary }}
//               />
//             </h3>
//             <ul className="space-y-4 text-sm">
//               <li className="flex items-start gap-3 group">
//                 <Phone
//                   size={16}
//                   className="text-[#0E5A00] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
//                 />
//                 <div className="flex flex-col">
//                   <a
//                     href="tel:+2349073209577"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors"
//                   >
//                     +234 907 320 9577
//                   </a>
//                   <a
//                     href="tel:+2348108624192"
//                     className="text-gray-400 hover:text-[#0E5A00] transition-colors text-xs"
//                   >
//                     +234 810 862 4192
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-center gap-3 group">
//                 <Mail
//                   size={16}
//                   className="text-[#0E5A00] flex-shrink-0 group-hover:scale-110 transition-transform"
//                 />
//                 <a
//                   href="mailto:nuranation@gmail.com"
//                   className="text-gray-400 hover:text-[#0E5A00] transition-colors"
//                 >
//                   nuranation@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-3 group">
//                 <Globe
//                   size={16}
//                   className="text-[#0E5A00] flex-shrink-0 group-hover:scale-110 transition-transform"
//                 />
//                 <span className="text-gray-400">Nigeria</span>
//               </li>
//             </ul>

//             {/* Newsletter Signup */}
//             <div className="mt-6">
//               <p className="text-xs text-gray-400 mb-2">
//                 Subscribe to our newsletter
//               </p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="bg-gray-800 text-white text-xs px-3 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-1 focus:ring-[#0E5A00] border border-gray-700"
//                 />
//                 <button
//                   className="px-3 py-2 rounded-r-lg text-white text-xs font-semibold transition-colors hover:bg-[#0B4600]"
//                   style={{ backgroundColor: brandPrimary }}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
//             <p className="text-center sm:text-left">
//               &copy; {currentYear} NURA Foundation. All rights reserved.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
//               <a href="#" className="hover:text-[#0E5A00] transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-[#0E5A00] transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="hover:text-[#0E5A00] transition-colors">
//                 Cookie Policy
//               </a>
//               <span className="flex items-center gap-1 text-gray-600">
//                 Made with{" "}
//                 <Heart size={10} fill={brandPrimary} color={brandPrimary} /> for
//                 Nigeria
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.js
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { LOGOS } from "../../shared/assets/logo";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Brand colors matching the main site
  const brandPrimary = "#0E5A00";
  const brandHover = "#0B4600";
  const currentYear = new Date().getFullYear();

  // State for collapsible sections on mobile
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    ourPrograms: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-[#121212] text-gray-300 font-jakarta">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column - Always visible */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <a
                href="/"
                className="flex items-center gap-2 group cursor-pointer font-bold text-sm md:text-base lg:text-lg min-w-[120px]"
              >
                <img
                  className="h-10 sm:h-12 w-auto object-contain"
                  alt="Nura Foundation Logo"
                  src={LOGOS.NuraLogo}
                />
                <div className="leading-tight text-white">
                  <h1 className="m-0">NURA</h1>
                  <p className="m-0">Foundation</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Rebuilding, Reforming, and Retranslating Nigeria into Africa's
              number one super power through peace, unity, and youth
              empowerment.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1BwhfqMX17/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0E5A00] transition-colors hover:-translate-y-0.5 transform text-gray-400 hover:text-white"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/nura_foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0E5A00] transition-colors hover:-translate-y-0.5 transform text-gray-400 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb6CprC9MF90zp85My2C"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0E5A00] transition-colors hover:-translate-y-0.5 transform text-gray-400 hover:text-white"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links - Collapsible on mobile */}
          <div>
            <button
              onClick={() => toggleSection("quickLinks")}
              className="w-full flex items-center justify-between md:cursor-default"
            >
              <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block md:mb-5">
                Quick Links
                <div
                  className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full hidden md:block"
                  style={{ backgroundColor: brandPrimary }}
                />
              </h3>
              <div className="md:hidden text-gray-400">
                {openSections.quickLinks ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>
            </button>
            <div
              className={`${openSections.quickLinks ? "block" : "hidden"} md:block`}
            >
              <ul className="space-y-3 text-sm mt-3 md:mt-0">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#whatwedo"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Our Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#donate"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Programs - Collapsible on mobile */}
          <div>
            <button
              onClick={() => toggleSection("ourPrograms")}
              className="w-full flex items-center justify-between md:cursor-default"
            >
              <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block md:mb-5">
                Our Programs
                <div
                  className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full hidden md:block"
                  style={{ backgroundColor: brandPrimary }}
                />
              </h3>
              <div className="md:hidden text-gray-400">
                {openSections.ourPrograms ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>
            </button>
            <div
              className={`${openSections.ourPrograms ? "block" : "hidden"} md:block`}
            >
              <ul className="space-y-3 text-sm mt-3 md:mt-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Youth Innovation Hub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Peace & Unity Initiative
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Anti-Terrorism Awareness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Financial Empowerment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0"
                    />
                    Mentorship Program
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Always visible */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 font-roboto relative inline-block">
              Get In Touch
              <div
                className="absolute bottom-0 left-0 w-8 h-0.5 mt-2 rounded-full"
                style={{ backgroundColor: brandPrimary }}
              />
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <Phone
                  size={16}
                  className="text-[#0E5A00] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                />
                <div className="flex flex-col">
                  <a
                    href="tel:+2349073209577"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors"
                  >
                    +234 907 320 9577
                  </a>
                  <a
                    href="tel:+2348108624192"
                    className="text-gray-400 hover:text-[#0E5A00] transition-colors text-xs"
                  >
                    +234 810 862 4192
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail
                  size={16}
                  className="text-[#0E5A00] flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <a
                  href="mailto:nuranation@gmail.com"
                  className="text-gray-400 hover:text-[#0E5A00] transition-colors"
                >
                  nuranation@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Globe
                  size={16}
                  className="text-[#0E5A00] flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-gray-400">Nigeria</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white text-xs px-3 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-1 focus:ring-[#0E5A00] border border-gray-700"
                />
                <button
                  className="px-3 py-2 rounded-r-lg text-white text-xs font-semibold transition-colors hover:bg-[#0B4600]"
                  style={{ backgroundColor: brandPrimary }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p className="text-center sm:text-left">
              &copy; {currentYear} NURA Foundation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-[#0E5A00] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0E5A00] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#0E5A00] transition-colors">
                Cookie Policy
              </a>
              <span className="flex items-center gap-1 text-gray-600">
                Made with{" "}
                <Heart size={10} fill={brandPrimary} color={brandPrimary} /> for
                Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
