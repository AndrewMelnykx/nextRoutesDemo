import fs from "fs";

const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component.tsx", "utf-8");

  return (
    <>
      <h1> Server Component One</h1>
    </>
  );
};

export { ServerComponentOne };
