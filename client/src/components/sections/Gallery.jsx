import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { IMAGES } from "../../shared/assets/images";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: IMAGES.gallery1,
    caption: "Lassa Fever sensitisation Outreach- Bauchi State",
  },
  {
    id: 2,
    src: IMAGES.gallery2,
    caption: "Lassa Fever sensitisation Outreach- Bauchi State",
  },
  {
    id: 3,
    src: IMAGES.gallery3,
    caption: "Lassa Fever sensitisation Outreach- Bauchi State",
  },
  {
    id: 4,
    src: IMAGES.gallery4,
    caption: "Lassa Fever sensitisation Outreach- Bauchi State",
  },
  {
    id: 5,
    src: IMAGES.gallery5,
    caption: "Child Protection Outreach- Plateau State",
  },
  {
    id: 6,
    src: IMAGES.gallery6,
    caption: "Child Protection 0utreach- Plateau State",
  },
  {
    id: 7,
    src: IMAGES.gallery7,
    caption: "Child Protection 0utreach- Plateau State",
  },
  {
    id: 8,
    src: IMAGES.gallery8,
    caption: "A visit to Langtang local government Plateau State",
  },
  {
    id: 9,
    src: IMAGES.gallery9,
    caption: "A visit to Langtang local government Plateau State",
  },
  {
    id: 10,
    src: IMAGES.gallery10,
    caption:
      "Bauchi Lassa Fever Outreach, -Dass Local government, Bauchi State. ",
  },
  { id: 11, src: IMAGES.gallery11, caption: "Bauchi State Empowerment Drive" },
  {
    id: 12,
    src: IMAGES.gallery12,
    caption: "Covid-19 Sensitisation School visitation- Bauchi",
  },
  { id: 13, src: IMAGES.gallery13, caption: "School visitation- Bauchi" },
  { id: 14, src: IMAGES.gallery14, caption: "School Outreach- Ogun State" },
  {
    id: 16,
    src: IMAGES.gallery16,
    caption: "South-Western Regional Peace Advocation Outreach",
  },
  { id: 17, src: IMAGES.gallery17, caption: "School Sponsorship Outreach" },
  {
    id: 18,
    src: IMAGES.gallery18,
    caption: "Anti-Corruption and Anti-Terrorism Seminar- The Crop 1.0",
  },
  {
    id: 19,
    src: IMAGES.gallery19,
    caption: "Child Protection Program",
  },
  {
    id: 20,
    src: IMAGES.gallery20,
    caption: " Strategic sSchool outreach- Iyana Isolo Lagos",
  },
  {
    id: 21,
    src: IMAGES.gallery21,
    caption: "strategic school outreach- Iyana Isolo Lagos",
  },
];

const Gallery = () => {
  const brandPrimary = "#0E5A00";
  const brandLight = "#E8F5E5";
  const brandLighter = "#F4F9F2";

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      className="py-16 font-jakarta"
      style={{ backgroundColor: brandLighter }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
            <span className="text-sm font-semibold text-[#0E5A00] uppercase tracking-wider">
              Our Gallery
            </span>
            <div className="w-8 h-0.5 bg-[#0E5A00] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Moments of Impact
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            A visual journey of our footprints across communities in Nigeria
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full text-[#0E5A00] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Caption */}
              <div className="p-4">
                <p className="text-gray-700 font-medium text-sm line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-white border-t border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {selectedImage.caption}
              </h4>
              <p className="text-sm text-gray-500">
                NURA Foundation Impact Gallery
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
