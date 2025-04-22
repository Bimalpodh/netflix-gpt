import React from "react";

const Footer = () => {
  return (
    <footer className=" relative bottom-0   left-0 w-full bg-black text-white p-4 z-50 ">
      <div className="max-w-6xl mx-auto">
        <p className="mb-6 text-sm">Questions? Call <a href="tel:000-800-919-1694" className="hover:underline"></a></p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <a href="#" className=" hidden hover:underline color ">FAQ</a>
          <a href="#" className=" hidden hover:underline">Help Center</a>
          <a href="#" className=" hidden hover:underline">Account</a>
          <a href="#" className=" hidden hover:underline">Media Center</a>
          <a href="#" className=" hidden hover:underline">Investor Relations</a>
          <a href="#" className=" hidden hover:underline">Jobs</a>
          <a href="#" className=" hidden hover:underline">Ways to Watch</a>
          <a href="#" className="  hidden hover:underline">Terms of Use</a>
          <a href="#" className="  hidden hover:underline">Privacy</a>
          <a href="#" className="  hidden hover:underline">Cookie Preferences</a>
          <a href="#" className="  hidden hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <div className="mt-6">
          <select className="bg-transparent border border-gray-600 text-white py-1 px-2 rounded text-sm">
            <option className="text-cyan-300" >English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <p className="text-sm mt-4">&copy; 2025 Netflix Clone. Built with ❤️ by bimal_babu.</p>
      </div>
    </footer>
  );
};

export default Footer;
