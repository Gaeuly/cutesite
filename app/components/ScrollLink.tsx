"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MouseEvent } from "react";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "a" | "span"; // <-- NEW
}

const ScrollLink = ({ href, children, className, as = "a" }: ScrollLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [targetPath, hash] = href.split("#");

  const scrollWithOffset = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (pathname === targetPath || (!targetPath && pathname === "/")) {
      // Same page — scroll directly
      scrollWithOffset(hash);
    } else {
      // Different page — store target and scroll after navigation
      sessionStorage.setItem("scrollTo", hash);
      router.push(targetPath || "/");
    }
  };

  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        scrollWithOffset(scrollTo);
      }, 100);
      sessionStorage.removeItem("scrollTo");
    }
  }, [pathname]);

  const Component = as;

  return (
    <Component
      href={as === "a" ? href : undefined} // only add href for <a>
      role={as === "span" ? "link" : undefined}
      tabIndex={as === "span" ? 0 : undefined}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Component>
  );
};

export default ScrollLink;