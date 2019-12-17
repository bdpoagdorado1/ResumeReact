import React from "react";
import Objective from "./left/objective";
import ContactInfo from "./left/contact-info";
import Education from "./left/education";
import AwardsAchievements from "./left/awards-achievements";
import Skills from "./left/skills";
import Community from "./left/community";

function MainLeft() {
  return (
    <div className="left-side">
      <div className="inner-left-side lt-teal-bg">
        <Objective />
        <ContactInfo />
        <Education />
        <AwardsAchievements />
        <Skills />
        <Community />
      </div>
    </div>
  );
}

export default MainLeft;
