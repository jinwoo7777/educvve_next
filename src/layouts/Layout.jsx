"use client";

import React, { useLayoutEffect } from "react";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { FooterEight } from "@/components/footers/FooterEight";
import { FooterFive } from "@/components/footers/FooterFive";
import { FooterFour } from "@/components/footers/FooterFour";
import { FooterOne } from "@/components/footers/FooterOne";
import { FooterSeven } from "@/components/footers/FooterSeven";
import { FooterSix } from "@/components/footers/FooterSix";
import { FooterThree } from "@/components/footers/FooterThree";
import { FooterTwo } from "@/components/footers/FooterTwo";
import { HeaderEight } from "@/components/headers/HeaderEight";
import { HeaderFive } from "@/components/headers/HeaderFive";
import { HeaderFour } from "@/components/headers/HeaderFour";
import { HeaderNine } from "@/components/headers/HeaderNine";
import { HeaderOne } from "@/components/headers/HeaderOne";
import { HeaderSeven } from "@/components/headers/HeaderSeven";
import { HeaderSix } from "@/components/headers/HeaderSix";
import { HeaderThree } from "@/components/headers/HeaderThree";
import { HeaderTwo } from "@/components/headers/HeaderTwo";
import { ScrollToTop } from "@/components/scroll_to_top/ScrollToTop";
import { usePathname } from "next/navigation";

export const Layout = ({
  children,
  header = 3,
  footer = 3,
  bodyClass,
  breadcrumbTitle,
  breadcrumbSubtitle,
}) => {
  const pathname = usePathname();

  // theme
  useLayoutEffect(() => {
    document.body.classList.add(bodyClass);

    return () => document.body.classList.remove(bodyClass);
  }, [bodyClass, pathname]);

  return (
    <>
      {/* scroll to top */}
      <ScrollToTop />

      {/* header */}
      {header === 1 && <HeaderOne />}
      {header === 2 && <HeaderTwo />}
      {header === 3 && <HeaderThree />}
      {header === 4 && <HeaderFour />}
      {header === 5 && <HeaderFive />}
      {header === 6 && <HeaderSix />}
      {header === 7 && <HeaderSeven />}
      {header === 8 && <HeaderEight />}
      {header === 9 && <HeaderNine />}

      {/* breadcrumb */}
      {breadcrumbTitle && (
        <Breadcrumb title={breadcrumbTitle} subtitle={breadcrumbSubtitle} />
      )}

      {children}

      {/* footer */}
      {footer === 1 && <FooterOne />}
      {footer === 2 && <FooterTwo />}
      {footer === 3 && <FooterThree />}
      {footer === 4 && <FooterFour />}
      {footer === 5 && <FooterFive />}
      {footer === 6 && <FooterSix />}
      {footer === 7 && <FooterSeven />}
      {footer === 8 && <FooterEight />}
    </>
  );
};
