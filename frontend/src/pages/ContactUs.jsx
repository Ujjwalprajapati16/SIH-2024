import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    location: "",
    disasterType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ndrf/help",
        formData
      );
      setSuccess(
        "Your request has been submitted successfully. NDRF will contact you soon."
      );
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        location: "",
        disasterType: "",
        message: "",
      });
    } catch (err) {
      setError("There was an issue submitting your request. Please try again.");
      console.error("Error submitting help request:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="contact-us bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://picsum.photos/id/47/200/300/?blur=2')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact NDRF for Help
        </h1>

        {success && (
          <div className="text-green-600 text-center mb-4">{success}</div>
        )}
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Type your name here"
                className="input input-bordered w-full text-black bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                placeholder="Enter your contact number"
                className="input input-bordered w-full text-black bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="input input-bordered w-full text-black bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter your location"
                className="input input-bordered w-full text-black bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Type of Disaster
              </label>
              <select
                name="disasterType"
                value={formData.disasterType}
                onChange={handleChange}
                required
                className="input input-bordered w-full text-black bg-white"
              >
                <option value="">Select a disaster</option>
                <option value="Flood">Flood</option>
                <option value="Earthquake">Earthquake</option>
                <option value="Cyclone">Cyclone</option>
                <option value="Fire">Fire</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message or request here"
                className="textarea textarea-bordered w-full text-black bg-white"
                rows="4"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white ${
              loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {loading ? "Submitting..." : "Submit Help Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
