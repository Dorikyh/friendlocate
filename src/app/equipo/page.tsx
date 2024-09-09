import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FriendLocate - Equipo",
  description: "Equipo de desarrollo del proyecto FriendLocate",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Team />
    </>
  );
};

export default AboutPage;
