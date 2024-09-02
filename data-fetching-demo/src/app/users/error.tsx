"use client";

import { useEffect } from "react";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(`Error ${error}`);
  }, [error]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Something went wrong while loading the users.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
