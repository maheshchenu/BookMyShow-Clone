import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2B3148] text-gray-300 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4">

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

          <div>
            <h3 className="text-white font-semibold mb-3">Movies</h3>
            <ul className="space-y-2 text-sm">
              <li>Now Showing</li>
              <li>Upcoming Movies</li>
              <li>Top Rated</li>
              <li>Trailers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Stream</h3>
            <ul className="space-y-2 text-sm">
              <li>New Releases</li>
              <li>Popular</li>
              <li>Kids</li>
              <li>Music</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Events</h3>
            <ul className="space-y-2 text-sm">
              <li>Comedy</li>
              <li>Workshops</li>
              <li>Sports</li>
              <li>Online Events</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">BookMyShow</h3>
            <ul className="space-y-2 text-sm">
              <li>Gift Cards</li>
              <li>Offers</li>
              <li>Careers</li>
              <li>Press Release</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-500 mt-8 pt-6"></div>

        <div className="flex flex-col items-center">
          <h2 className="text-white text-lg font-semibold">BookMyShow</h2>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} BookMyShow. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
