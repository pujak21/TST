import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/test');
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }

    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'Ghaziabad, Delhi/NCR\nUttar Pradesh, India'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 XXXXX XXXXX'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@tsttechnologies.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9 AM - 6 PM\nSat: 9 AM - 2 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/30 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Let's <span className="text-emerald-600">Connect</span>
          </h1>
          <p className="text-xl text-gray-600">
            Have a question? We’re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded-xl" />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-3 border rounded-xl" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-xl" />
              <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full p-3 border rounded-xl" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" className="w-full p-3 border rounded-xl"></textarea>

              <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <info.icon className="text-emerald-600" />
                <div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
