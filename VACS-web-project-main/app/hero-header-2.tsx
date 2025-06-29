"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroHeader2 = ({
  title = "Building <accent>dreams</accent>, one school at a time",
  subtitle = "",
  backgroundUrl = "",
}) => {
  // Split title using <accent> and </accent> tags
  const parseTitle = (title) => {
    const parts = title.split(/<accent>|<\/accent>/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="text-[--clr-accent]">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div
  className="absolute items-center p-16 top-0 left-0 right-0 w-full h-full bg-primary/70 text-white text-center z-50 "
  style={{ background: "rgba(95,131,153,.28)" }}
>
      {/* <div
        className="bg-primary/70 text-white p-12 rounded-[24px] max-w text-center mx-auto"
        style={{ background: "rgba(95,131,153,.78)" }}
      > */}
      <div
      className="flex-auto items-center p-20 mt-20">
        <h1 className="text-[clamp(2rem,6vw,3.25rem)] leading-[1.15] font-display mb-6">
          {parseTitle(title)}
        </h1>
        <p className="font-body text-sm mb-8">{subtitle}</p>
        {/* Uncomment and customize the button below if needed */}
        {/*
        <Button
          asChild
          className="bg-[--clr-accent] text-white font-bold uppercase rounded-full px-8 py-6 hover:bg-orange-600"
        >
          <Link href="/about/mission">Our Mission</Link>
        </Button>
        */}
        </div>
      </div>
    </section>
  );
};

export default HeroHeader2;