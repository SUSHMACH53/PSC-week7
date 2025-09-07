import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, Clock, Star, TrendingUp, Play } from 'lucide-react';

const Dashboard = () => {
  const userStats = [
    {
      icon: '✅',
      label: 'Courses Completed',
      value: '12',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔁',
      label: 'Learning Streak',
      value: '23 days',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '⏰',
      label: 'Study Hours',
      value: '147h',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🌟',
      label: 'Skill Level',
      value: 'Advanced',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const learningPath = [
    {
      id: 1,
      title: 'Data Science Fundamentals',
      progress: 75,
      completedLessons: 18,
      totalLessons: 24,
      category: 'Data Science',
      nextLesson: 'Machine Learning Basics'
    },
    {
      id: 2,
      title: 'React Development Mastery',
      progress: 45,
      completedLessons: 12,
      totalLessons: 27,
      category: 'Web Development',
      nextLesson: 'State Management with Redux'
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      progress: 90,
      completedLessons: 16,
      totalLessons: 18,
      category: 'Design',
      nextLesson: 'Prototyping with Figma'
    }
  ];

  const overallProgress = 68;

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome back, Alex! 👋
              </h1>
              <p className="text-xl text-gray-600">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="hidden md:block">
              <Link
                to="/explore-courses"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Explore More Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`bg-gradient-to-r ${stat.color} p-4`}>
                <div className="flex items-center justify-between text-white">
                  <div className="text-2xl">{stat.icon}</div>
                  <TrendingUp className="h-5 w-5 opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Path Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Your Learning Path</h2>
              </div>

              <div className="space-y-6">
                {learningPath.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600">{course.category}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {course.progress}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Next Lesson */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Next:</span> {course.nextLesson}
                      </div>
                      <button className="inline-flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors">
                        <Play className="h-4 w-4" />
                        <span className="text-sm font-medium">Continue</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overall Progress Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="h-6 w-6 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-900">Overall Progress</h2>
              </div>

              {/* Circular Progress Chart */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${overallProgress * 3.14} 314`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{overallProgress}%</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">Course Completion</p>
                  <p className="text-sm text-gray-600">
                    You're doing great! Keep up the momentum.
                  </p>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Achievements</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg">
                    <div className="text-xl">🏆</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Course Completed</p>
                      <p className="text-xs text-gray-600">JavaScript Fundamentals</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg">
                    <div className="text-xl">🔥</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">20-Day Streak</p>
                      <p className="text-xs text-gray-600">Consistent learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/explore-courses"
                  className="block w-full px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors text-center font-medium"
                >
                  Browse New Courses
                </Link>
                <button className="block w-full px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors text-center font-medium">
                  View Certificates
                </button>
                <Link
                  to="/help"
                  className="block w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;