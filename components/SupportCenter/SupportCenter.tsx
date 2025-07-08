"use client";
import { useEffect } from "react";

const SupportCenter = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("tawkto-script")) return;

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/686d05cabe8a1b1910b8675f/1ivktt90m";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  // No visible UI needed; Tawk.to widget floats bottom right by default
  return null;
};

export default SupportCenter;

