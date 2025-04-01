import React from 'react';
import { BellIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

const MyAlerts = () => {
  const alerts = [
    {
      id: 1,
      class: 'CSCE 121',
      section: '501',
      status: 'Active',
      type: 'Any Section',
      lastCheck: '2 mins ago',
      notifications: 'Email, SMS'
    },
    {
      id: 2,
      class: 'MATH 151',
      section: '502',
      status: 'Paused',
      type: 'Specific Section',
      lastCheck: '5 mins ago',
      notifications: 'Email'
    },
    {
      id: 3,
      class: 'PHYS 218',
      section: '503',
      status: 'Active',
      type: 'Multiple Sections',
      lastCheck: '12 mins ago',
      notifications: 'SMS'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">My Alerts</h1>
            <p className="text-gray-600">Manage your class availability alerts</p>
          </div>
          <button className="px-4 py-2 bg-maroon text-white rounded-lg hover:bg-maroon/90 transition-colors flex items-center gap-2">
            <BellIcon className="w-5 h-5" />
            New Alert
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search alerts..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon">
              <option>All Status</option>
              <option>Active</option>
              <option>Paused</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon">
              <option>All Types</option>
              <option>Any Section</option>
              <option>Specific Section</option>
              <option>Multiple Sections</option>
            </select>
          </div>
        </div>

        {/* Alerts Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Class</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Section</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Type</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Last Check</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Notifications</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id} className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{alert.class}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{alert.section}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      alert.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{alert.type}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{alert.lastCheck}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{alert.notifications}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <div className="flex justify-end gap-3">
                      <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <PencilIcon className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-red-50 rounded-full transition-colors">
                        <TrashIcon className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAlerts; 