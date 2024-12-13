import { ReactNode } from "react";

type ContentItemTypes = {
  id: number;
  title: string;
  content: ReactNode;
  button: string;
};

const content = [
  {
    id: 1,
    title: "How To Join ACM at ASU",
    content: [
      <p key="p1">
        Want to join ACM at ASU? Just go to one of our meetings! Everyone who attends
        our meetings is a ACM at ASU member.
      </p>,
    ],
    button: "Join our SunDevilSync",
  },
  {
    id: 2,
    title: "Professional Development",
    content: [
      <p key="p2">
        We want students to become familiar with industry by helping them
        prepare for technical interviews, and showing them how and when to
        apply.
      </p>,
    ],
    button: "Learn more",
  },
  {
    id: 3,
    title: "Technical Workshops",
    content: [
      <p key="p3">
        Want to join ACM at ASU? Just go to one of our meetings! Everyone who attends
        our meetings is a ACM at ASU member.
      </p>,
    ],
    button: "Learn more",
  },
  {
    id: 4,
    title: "ACM at ASU Code Challenge X",
    content: [
      <p key="p4">
        Want to join ACM at ASU? Just go to one of our meetings! Everyone who attends
        our meetings is a ACM at ASU member.
      </p>,
    ],
    button: "Sign up now",
  },
  {
    id: 5,
    title: "Community",
    content: [
      <p key="p5">
        Want to join ACM at ASU? Just go to one of our meetings! Everyone who attends
        our meetings is a ACM at ASU member.
      </p>,
    ],
    button: "Join our SunDevilSync",
  },
];

export default content;
