import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import RoundedButton from "../components/Button/RiArrowButton";

const areaContent = `
# [Area] Positions Openings
---
## [Area] Roles
### [Role]
- [Responsibility]
- Oversee admin officers in carrying out budget/purchase requests
- Manage funding sources and financial accounts
### Finance Specialist
- Carry out budget and purchase requests as directed by the Treasurer
- Assist in financial planning and fiscal operations
- Manage funding sources and financial accounts
### Event Coordinator
- Manage event logistics and operations
- Coordinate with team directors to plan and operate events
- Location scouting and venue reservation
`;

const applicationURL = "https://forms.gle/7cRWXCLeLCRANtS86";

export default function Positions() {
  return (
    <div className="max-w-5xl mx-auto p-6 my-28 shadow-md rounded-lg">
      <ReactMarkdown
      children={adminContent}
      remarkPlugins={[remarkGfm]}
      className="prose lg:prose-xl prose-invert mb-10"
      />
      <div className="max-w-3xl">
        <RoundedButton
          name="Apply Now"
          url={applicationURL}
        ></RoundedButton>
      </div>
      <ReactMarkdown
      children={marketingContent}
      remarkPlugins={[remarkGfm]}
      className="prose lg:prose-xl prose-invert my-10"
      />
      <div className="max-w-3xl">
        <RoundedButton
          name="Apply Now"
          url={applicationURL}
        ></RoundedButton>
      </div>
      <ReactMarkdown
      children={officerContent}
      remarkPlugins={[remarkGfm]}
      className="prose lg:prose-xl prose-invert my-10"
      />
      <div className="max-w-3xl">
        <RoundedButton
          name="Apply Now"
          url={applicationURL}
        ></RoundedButton>
      </div>
      <ReactMarkdown
      children={techContent}
      remarkPlugins={[remarkGfm]}
      className="prose lg:prose-xl prose-invert my-10"
      />
      <div className="max-w-3xl">
        <RoundedButton
          name="Apply Now"
          url={applicationURL}
        ></RoundedButton>
      </div>
    </div>
  );
}
