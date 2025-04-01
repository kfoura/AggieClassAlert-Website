import React from 'react';
import { BellIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 200 },
  { name: 'Tue', value: 250 },
  { name: 'Wed', value: 180 },
  { name: 'Thu', value: 320 },
  { name: 'Fri', value: 280 },
  { name: 'Sat', value: 190 },
  { name: 'Sun', value: 220 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Welcome Back, Aggie</h1>
            <p className="text-gray-600">Track your class notifications and alerts</p>
          </div>
          <button className="px-4 py-2 bg-maroon text-white rounded-lg hover:bg-maroon/90 transition-colors">
            Add New Alert
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Alerts</p>
                <h2 className="text-3xl font-semibold text-gray-900 mt-1">24</h2>
              </div>
              <div className="bg-maroon/10 p-3 rounded-full">
                <BellIcon className="w-6 h-6 text-maroon" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-4 flex items-center">
              <span className="text-green-500">↑</span> 12% from last week
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Classes Found</p>
                <h2 className="text-3xl font-semibold text-gray-900 mt-1">8</h2>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircleIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-4">
              3 classes in last 24 hours
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Average Response Time</p>
                <h2 className="text-3xl font-semibold text-gray-900 mt-1">1.2s</h2>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <ClockIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-blue-600 text-sm mt-4">
              Faster than 95% of users
            </p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Notification Activity</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#500000" 
                  strokeWidth={2}
                  dot={{ fill: '#500000' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Alerts Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
            <button className="text-maroon hover:text-maroon/80 text-sm">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Class</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Section</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Last Check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm">CSCE 121</td>
                  <td className="py-3 px-4 text-sm">501</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Available</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">2 mins ago</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm">MATH 151</td>
                  <td className="py-3 px-4 text-sm">502</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Full</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">5 mins ago</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">PHYS 218</td>
                  <td className="py-3 px-4 text-sm">503</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Waitlist</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">12 mins ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 