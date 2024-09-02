const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-4 text-lg text-gray-600">Loading Users...</p>
      </div>
    </div>
  );
};

export default Loading;
