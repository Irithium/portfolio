"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2">
        <div>
          <li>JavaScript</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Express</li>
        </div>
        <div>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
        </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack, SoyHenry</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link
            href="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=f3c04fc5803cf1d65987e351e976a7607c2726572566e9a18dce66a5384ec070"
            target="_blank"
            className="text-[#ADB7BE] hover:text-white"
          >
            Fullstack Developer
            <ArrowTopRightOnSquareIcon className=" pb-1 w-5 h-5 text-white inline" />
          </Link>
        </li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About-Image"
          width={500}
          height={500}
          className="rounded "
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          <p className="text-base md:text-lg">
            I am a Full Stack developer, passionate about technology, video
            games, and music. My curious nature and constant desire to learn
            have led me to explore the exciting field of information technology.
            Undoubtedly, one of the most motivating experiences was my approach
            to code. I am always looking for ways to improve and learn more
            about the latest technologies and trends in the world of web
            development. My main goal is to impact the world with code.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
