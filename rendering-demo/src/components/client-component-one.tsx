"use client";

import React, { useState } from "react";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1> Client Component One</h1>
      {children}
    </>
  );
};

export { ClientComponentOne };
