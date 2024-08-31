import ImageSlider from "@/components/slider";

import { serverSideFunc } from "@/utils/server-utils";

const ServerRoutePage = () => {
  console.log("Server route rendered");
  const result = serverSideFunc();

  return (
    <>
      <h1> Server Route Page </h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
};

export default ServerRoutePage;
