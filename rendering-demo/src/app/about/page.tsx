import { cookies } from "next/headers";

const AboutPage = () => {
  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  return <h1> About Page {new Date().toLocaleTimeString()}</h1>;
};

export default AboutPage;
