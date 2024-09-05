import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "John has over 20 years of experience in disaster management and is passionate about leveraging technology to save lives.",
    image: "path/to/john-image.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Data Scientist",
    bio: "Jane specializes in data analytics and ensures our platform provides accurate, real-time information.",
    image: "path/to/jane-image.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Lead Software Developer",
    bio: "Emily leads our development team, focusing on creating a user-friendly and robust platform.",
    image: "path/to/emily-image.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to SwiftAid</h2>
        <p className="text-lg leading-relaxed">
          At SwiftAid, our mission is to enhance safety and coordination during
          disasters by providing real-time, actionable information to those who
          need it most. We are dedicated to harnessing technology to support
          first responders, organizations, and individuals in navigating through
          crises with greater efficiency and effectiveness.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          Our vision is to create a world where timely and accurate disaster
          information is readily accessible to everyone, empowering communities
          to respond quickly and effectively in times of need. We strive to be
          the leading platform for real-time disaster aggregation, offering
          seamless integration of data from various sources to support informed
          decision-making and coordinated response efforts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>
            Real-Time Updates: Receive instant alerts and updates on natural and
            man-made disasters, including earthquakes, floods, fires, and more.
          </li>
          <li>
            Integrated Maps and Data: Access interactive maps and detailed
            information about disaster zones, affected areas, and resource
            locations.
          </li>
          <li>
            Emergency Notifications: Stay informed with customized alerts and
            notifications based on your location and preferences.
          </li>
          <li>
            Resource Coordination: Connect with local emergency services,
            shelters, and support organizations through our integrated network.
          </li>
          <li>
            User Contributions: Report incidents, share information, and
            collaborate with others to enhance situational awareness and
            response efforts.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Technology</h2>
        <p className="text-lg leading-relaxed">
          Leveraging cutting-edge technology and data analytics, SwiftAid brings
          together diverse data streams, including satellite imagery, weather
          data, social media updates, and official reports. Our advanced
          algorithms ensure that you receive accurate and timely information to
          help you stay safe and make informed decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg leading-relaxed">
          Our team is comprised of experienced professionals in disaster
          management, data science, and software development. We are passionate
          about using our expertise to make a difference during critical times
          and are committed to continuous improvement and innovation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>
            Accuracy and Reliability: Our data sources are rigorously vetted to
            ensure you receive the most accurate and reliable information.
          </li>
          <li>
            User-Centric Design: Our platform is designed with user needs in
            mind, offering an intuitive interface and customizable features.
          </li>
          <li>
            Commitment to Safety: We prioritize user safety and work tirelessly
            to provide tools and resources that support effective disaster
            response.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg leading-relaxed">
          We believe that collaboration is key to effective disaster management.
          Whether you’re a first responder, a community leader, or an individual
          looking to stay informed, we invite you to explore SwiftAid and join
          us in making a difference.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          For more information, support, or to get involved, please reach out to
          us at [Contact Information]. Follow us on [Social Media Links] for the
          latest updates and announcements.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">
          Join Us in Building a Safer Future
        </h2>
        <p className="text-lg leading-relaxed">
          Thank you for choosing SwiftAid. Together, we can navigate through
          crises with greater resilience and hope for a safer tomorrow.
        </p>
      </section>
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            /> */}
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-24 rounded-full">
                <span className="text-3xl">D</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-800 mt-2">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
