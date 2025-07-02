"use client";

import { useWow } from "@/lib/hooks/useWow.js";
import { useEffect } from "react";

export const ProviderComponent = ({ children }) => {
  useWow();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("../../assets/js/jquery-ui.min.js");
  }, []);

  return <>{children}</>;
};
