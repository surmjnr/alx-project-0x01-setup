import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Next.js App. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-gray-400">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 