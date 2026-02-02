import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-[#ffffff] text-black z-50">
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">Asha Film Casting</h4>
            <p className="text-sm leading-relaxed text-black">
              Office No 105, 1st Floor, Off<br />
              Veera Desai Rd, Veera Desai<br />
              Industrial Estate, Andheri West,<br />
              Mumbai, Maharashtra 400053
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-black">
              <li>About 1on1 Screen</li>
              <li>How it Works</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Artists</h4>
            <ul className="space-y-2 text-sm text-black">
              <li>Browse Castings</li>
              <li>Create Profile</li>
              <li>Get Verified</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Producers</h4>
            <ul className="space-y-2 text-sm text-black">
              <li>Post a Casting</li>
              <li>Hire Artists</li>
              <li>Manage Projects</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <div className="flex gap-4 mb-4 text-black">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>

            <p className="text-sm text-black mb-2">
              Mumbai, Maharashtra
            </p>
            <p className="text-sm text-black mb-2">
              +91-98765 43210
            </p>
            <p className="text-sm text-black">
              hello@1on1screen.com
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center text-sm text-black py-3">
        © 2025 1on1 Screen. Designed and Developed by Techmet Solutions.
        <span className="mx-2">|</span>
        Terms <span className="mx-1">|</span> Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;
