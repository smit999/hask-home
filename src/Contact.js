import React from 'react';

const Contact = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
      <p className="text-xl text-gray-500">Let's build something great together.</p>
    </div>
    <form className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
        </div>
      </div>
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
      </div>
      <button type="button" className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;