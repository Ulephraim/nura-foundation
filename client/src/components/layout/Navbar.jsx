import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { LOGOS } from "../../shared/assets/logo";

const navLinks = [
  { label: "About Us", href: "#about", dropdown: true },
  { label: "Our Programs", href: "#whatwedo", dropdown: true },
  { label: "Get Involved", href: "#career", dropdown: true },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const brandColor = "#0E5A00";
  const brandLight = "#e8f5e5";

  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-jakarta">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <a
            href="/"
            className="flex items-center gap-2 group cursor-pointer font-bold text-sm md:text-base lg:text-lg min-w-[120px]"
          >
            <img
              className="h-10 sm:h-12 w-auto object-contain"
              alt="Nura Foundation Logo"
              src={LOGOS.NuraLogo}
            />
            <div className="leading-tight text-[#0E5A00]">
              <h1 className="m-0">NURA</h1>
              <p className="m-0">Foundation</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm lg:text-base font-medium text-gray-700">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 hover:text-[#0E5A00] transition-colors py-2 px-1 whitespace-nowrap"
                  style={{
                    color:
                      activeDropdown === link.label ? brandColor : undefined,
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </a>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <a
                        href="#about"
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0E5A00] hover:bg-emerald-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Who We Are
                      </a>
                      <a
                        href="#about"
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0E5A00] hover:bg-emerald-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Mission & Vision
                      </a>
                      <a
                        href="#career"
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0E5A00] hover:bg-emerald-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our Team
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#donate"
              className="text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all hover:opacity-90 hover:scale-105 transform shadow-md whitespace-nowrap"
              style={{ backgroundColor: brandColor }}
            >
              Donate Now
            </a>
          </div>

          <button
            className="md:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors active:bg-gray-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 fixed left-0 right-0 top-[64px] sm:top-[72px] md:top-[80px] bottom-0 overflow-y-auto z-40 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-50 pb-2">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-[#0E5A00] py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                      aria-expanded={activeDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="pl-4 space-y-2 border-l-2 border-emerald-200 ml-2 mt-2">
                        <a
                          href="#about"
                          className="block text-sm text-gray-600 hover:text-[#0E5A00] py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Who We Are
                        </a>
                        <a
                          href="#about"
                          className="block text-sm text-gray-600 hover:text-[#0E5A00] py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Mission & Vision
                        </a>
                        <a
                          href="#career"
                          className="block text-sm text-gray-600 hover:text-[#0E5A00] py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Our Team
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block text-base font-medium text-gray-700 hover:text-[#0E5A00] py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}

            <div className="pt-4 pb-6">
              <a
                href="#donate"
                className="block text-center bg-[#0E5A00] hover:bg-[#0B4600] text-white rounded-full px-5 py-3 text-base font-medium transition-all active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
