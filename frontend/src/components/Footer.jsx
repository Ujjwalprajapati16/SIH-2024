import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-6 mt-auto border-t-2 border-black">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Disaster Info Hub. All rights reserved.</p>
        <p>Contact: info@disasterinfohub.com</p>
        
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">Our Team</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="team-member">
              <h3 className="text-md font-semibold">Member 1</h3>
              <p>Role: Frontend Developer</p>
              <p>Email: member1@disasterinfohub.com</p>
            </div>
            <div className="team-member">
              <h3 className="text-md font-semibold">Member 2</h3>
              <p>Role: Backend Developer</p>
              <p>Email: member2@disasterinfohub.com</p>
            </div>
            <div className="team-member">
              <h3 className="text-md font-semibold">Member 3</h3>
              <p>Role: Full Stack Developer</p>
              <p>Email: member3@disasterinfohub.com</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
