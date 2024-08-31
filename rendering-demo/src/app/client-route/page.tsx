"use client";
import React from "react";
import { useTheme } from "@/components/theme-provider";
import { ClientSideFunc } from "@/utils/client-utils";

const ClientRoutePage = () => {
  const theme = useTheme();
  const result = ClientSideFunc();

  return (
    <h1 style={{ color: theme.colors.secondary }}>Client route {result}</h1>
  );
};

export default ClientRoutePage;
