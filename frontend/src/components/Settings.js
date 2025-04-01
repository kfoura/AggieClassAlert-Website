import React, { useState } from 'react';
import { KeyIcon, EnvelopeIcon, PhoneIcon, BellIcon } from '@heroicons/react/24/outline';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [emailPreference, setEmailPreference] = useState('all');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [carrier, setCarrier] = useState('');
  const [notificationFrequency, setNotificationFrequency] = useState('instant');

  const carriers = [
    { id: 'verizon', name: 'Verizon', domain: '@vtext.com' },
    { id: 'att', name: 'AT&T', domain: '@txt.att.net' },
    { id: 'tmobile', name: 'T-Mobile', domain: '@tmomail.net' },
    { id: 'sprint', name: 'Sprint', domain: '@messaging.sprintpcs.com' },
    { id: 'cricket', name: 'Cricket', domain: '@sms.cricketwireless.net' },
    { id: 'boost', name: 'Boost Mobile', domain: '@sms.myboostmobile.com' },
    { id: 'uscellular', name: 'U.S. Cellular', domain: '@email.uscc.net' },
    { id: 'metro', name: 'Metro by T-Mobile', domain: '@mymetropcs.com' },
  ];

  const emailPreferences = [
    { id: 'all', name: 'All Notifications' },
    { id: 'important', name: 'Important Only' },
    { id: 'digest', name: 'Daily Digest' },
    { id: 'none', name: 'None' }
  ];

  const notificationFrequencies = [
    { id: 'instant', name: 'Instant' },
    { id: '5min', name: 'Every 5 minutes' },
    { id: '15min', name: 'Every 15 minutes' },
    { id: '30min', name: 'Every 30 minutes' },
    { id: '1hour', name: 'Every hour' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and notification preferences</p>
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <EnvelopeIcon className="w-6 h-6 text-maroon" />
              <h2 className="text-xl font-semibold text-gray-900">Email Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Preferences</label>
                <select
                  value={emailPreference}
                  onChange={(e) => setEmailPreference(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon bg-white"
                >
                  {emailPreferences.map((pref) => (
                    <option key={pref.id} value={pref.id}>
                      {pref.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <KeyIcon className="w-6 h-6 text-maroon" />
              <h2 className="text-xl font-semibold text-gray-900">Password Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                />
              </div>
            </div>
          </div>

          {/* Phone Number Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <PhoneIcon className="w-6 h-6 text-maroon" />
              <h2 className="text-xl font-semibold text-gray-900">Phone Number Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Carrier</label>
                <select
                  value={carrier}
                  onChange={(e) => setCarrier(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon bg-white"
                >
                  <option value="">Select your carrier</option>
                  {carriers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Notification Frequency */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <BellIcon className="w-6 h-6 text-maroon" />
              <h2 className="text-xl font-semibold text-gray-900">Notification Frequency</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check Frequency</label>
              <select
                value={notificationFrequency}
                onChange={(e) => setNotificationFrequency(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon bg-white"
              >
                {notificationFrequencies.map((freq) => (
                  <option key={freq.id} value={freq.id}>
                    {freq.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-maroon text-white rounded-lg hover:bg-maroon/90 transition-colors font-medium"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings; 