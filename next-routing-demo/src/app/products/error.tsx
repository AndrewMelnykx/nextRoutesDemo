"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
