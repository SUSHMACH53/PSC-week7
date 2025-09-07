import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                eduNova
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering learners worldwide with high-quality online education. 
              Join thousands of students in their journey to success.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@edunova.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore-courses" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 eduNova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;