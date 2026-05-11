import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../shared/assets/images";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: IMAGES.Hero1,
      title: "Empowering Nigeria's Future Through Youth Development",
      subtitle:
        "NURA Foundation is committed to rebuilding and reforming Nigeria through peace, unity, mentorship, and youth empowerment.",
      cta: "Join The Movement",
    },
    {
      id: 2,
      image: IMAGES.Hero2,
      title: "Promoting Peace, Unity & National Growth",
      subtitle:
        "We inspire positive change through anti-terrorism awareness, leadership development, and community impact initiatives.",
      cta: "Explore Our Programs",
    },
    {
      id: 3,
      image: IMAGES.Hero3,
      title: "Creating Opportunities For The Next Generation",
      subtitle:
        "Through mentorship, innovation, and financial empowerment, we are building a stronger future for Nigerian youths.",
      cta: "Support Our Mission",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <section className="relative h-[75vh] sm:h-[85vh] lg:h-screen w-full overflow-hidden font-jakarta">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                  <h1
                    className="font-bold  leading-tight mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #FFFFFF 0%, #E0E7FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    data-aos="fade-up"
                  >
                    {slide.title}
                  </h1>

                  <p
                    data-aos="fade-left"
                    className="text-base font-inter sm:text-lg md:text-xl text-white/90 leading-relaxed mb-10"
                  >
                    {slide.subtitle}
                  </p>

                  <Link
                    to="/about"
                    className="inline-block bg-[#0E5A00] hover:bg-[#0B4600] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 "
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 h-1.5 bg-white"
                : "w-2 h-1.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
