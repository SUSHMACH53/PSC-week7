import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ViewAllCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Computer Science',
      description: 'Programming, algorithms, data structures, and software engineering',
      courses: '1,524',
      students: '45,231',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Data Science',
      description: 'Machine learning, statistics, data analysis, and visualization',
      courses: '832',
      students: '28,945',
      icon: '📊',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Business',
      description: 'Management, entrepreneurship, finance, and business strategy',
      courses: '1,246',
      students: '52,187',
      icon: '💼',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      name: 'Design',
      description: 'UI/UX design, graphic design, and creative arts',
      courses: '687',
      students: '31,624',
      icon: '🎨',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Marketing',
      description: 'Digital marketing, SEO, social media, and advertising',
      courses: '445',
      students: '19,873',
      icon: '📢',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      name: 'Photography',
      description: 'Photography techniques, editing, and visual storytelling',
      courses: '298',
      students: '14,562',
      icon: '📸',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 7,
      name: 'Health & Fitness',
      description: 'Nutrition, exercise science, wellness, and personal training',
      courses: '376',
      students: '23,456',
      icon: '🏃‍♂️',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 8,
      name: 'Music',
      description: 'Music theory, instruments, composition, and production',
      courses: '234',
      students: '12,789',
      icon: '🎵',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 9,
      name: 'Language Learning',
      description: 'Foreign languages, linguistics, and communication skills',
      courses: '567',
      students: '34,921',
      icon: '🌍',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 10,
      name: 'Personal Development',
      description: 'Leadership, productivity, mindfulness, and life skills',
      courses: '423',
      students: '18,645',
      icon: '🚀',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 11,
      name: 'Science',
      description: 'Physics, chemistry, biology, and scientific research',
      courses: '312',
      students: '16,234',
      icon: '🔬',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 12,
      name: 'Teaching & Academics',
      description: 'Educational methods, curriculum design, and academic skills',
      courses: '189',
      students: '8,765',
      icon: '📚',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Categories
          </h1>
          <p className="text-xl text-gray-600">
            Explore our comprehensive collection of learning categories
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">7,000+</div>
              <div className="text-gray-600">Total Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">300K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{category.icon}</div>
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mt-4">{category.name}</h3>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{category.courses} courses</span>
                    <span>{category.students} students</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Choose a category and begin your learning journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/explore-courses"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Courses
              </Link>
              <Link
                to="/signup"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllCategories;