import { Outlet } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="font-jakarta min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#f0fdf4] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto mb-8">
        <img
          src="https://illustrations.popsy.co/green/crashed-error.svg"
          alt="404 illustration"
          className="w-full h-70"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        404 Page Not Found -
        <span className="text-[#6AB536]"> Let’s Guide You Home</span>
      </h1>

      <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mb-8">
        We couldn't find the page you were looking for. It may have been moved,
        renamed, or never existed. Don’t worry we’re here to help you find your
        way.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#6AB536] hover:bg-[#5aa030] text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Home className="w-5 h-5" />
          Return Home
        </a>
        <a
          href="/contact-us"
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#6AB536] text-[#6AB536]  rounded-lg transition-all duration-300"
        >
          Report Issue
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
      <Outlet />
    </div>
  );
};

export default NotFoundPage;
