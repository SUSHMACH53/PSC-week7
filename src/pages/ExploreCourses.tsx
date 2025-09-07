import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, Filter, Search } from 'lucide-react';

const ExploreCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      duration: '40 hours',
      students: '12,543',
      rating: 4.8,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'web-development',
      description: 'Master HTML, CSS, JavaScript, React, and Node.js in this comprehensive bootcamp.'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Dr. Michael Chen',
      duration: '35 hours',
      students: '8,921',
      rating: 4.9,
      price: '$94.99',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'data-science',
      description: 'Learn Python, pandas, NumPy, and machine learning algorithms from scratch.'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Rodriguez',
      duration: '25 hours',
      students: '15,672',
      rating: 4.7,
      price: '$69.99',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'design',
      description: 'Master the principles of user interface and user experience design.'
    },
    {
      id: 4,
      title: 'Digital Marketing Masterclass',
      instructor: 'James Wilson',
      duration: '30 hours',
      students: '9,834',
      rating: 4.6,
      price: '$79.99',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'marketing',
      description: 'Learn SEO, social media marketing, and paid advertising strategies.'
    },
    {
      id: 5,
      title: 'Mobile App Development with React Native',
      instructor: 'Lisa Park',
      duration: '45 hours',
      students: '7,234',
      rating: 4.8,
      price: '$99.99',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'mobile-development',
      description: 'Build iOS and Android apps using React Native and JavaScript.'
    },
    {
      id: 6,
      title: 'Financial Analysis and Investment',
      instructor: 'Robert Taylor',
      duration: '28 hours',
      students: '5,123',
      rating: 4.5,
      price: '$84.99',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'finance',
      description: 'Learn financial modeling, valuation, and investment strategies.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'finance', label: 'Finance' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Courses</h1>
            <p className="text-gray-600 mt-2">Discover your next learning adventure</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Course Image */}
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {course.description}
                </p>
                <p className="text-gray-700 font-medium mb-3">
                  By {course.instructor}
                </p>

                {/* Course Stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Price and Enroll Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCourses;