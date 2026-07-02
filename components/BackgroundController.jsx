"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundController() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.className = "";

    if (pathname === "/") {
      document.body.classList.add("home-bg");
    }

    if (pathname.startsWith("/comic")) {
      document.body.classList.add("comic-bg");
    }
  }, [pathname]);

  return null;
}
