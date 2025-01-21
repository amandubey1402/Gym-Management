import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const navigate = useNavigate();  // React Router hook to navigate programmatically
  
  useEffect(() => {
    // Optionally, you can redirect to the home page or another page after some time
    const timer = setTimeout(() => {
      navigate('/');  // Redirect to home page or another route after 5 seconds
    }, 5000);

    // Cleanup timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-green-600 text-center mb-4">Form Submitted Successfully!</h2>
      <p className="text-lg text-center text-gray-600">Your form has been successfully submitted. We will get back to you once it is approved.</p>
      <p className="text-sm text-center text-gray-500 mt-4">You will be redirected shortly...</p>
    </div>
  </div>
  
  );
};

export default Modal;
