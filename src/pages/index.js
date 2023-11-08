import React from "react";
import {
  //AboutSection,
  //ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Mohammed Chauhan's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="details" heading="Skills and Languages" />
        <ProjectsSection sectionId="features" heading="" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
