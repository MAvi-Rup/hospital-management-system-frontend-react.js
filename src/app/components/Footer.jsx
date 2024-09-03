// src/components/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-snow p-8 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Footer Menus */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/available-rooms" className="hover:underline">
                Available Rooms
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Services</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Emergency Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Surgery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pharmacy
              </a>
            </li>
          </ul>
        </div>

        {/* Our Partner Hospitals */}
        <div>
          <h4 className="text-xl font-bold mb-4">Our Partner Hospitals</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Dhaka Medical College
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bangabandhu Sheikh Mujib Medical University
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Square Hospital
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apollo Hospital
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <p>&copy; 2024 Hospital Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
