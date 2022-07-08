import { HomeAboutUs } from "./HomeAboutUs";
import { HomeContact } from "./HomeContact";
import { HomeHeader } from "./HomeHeader";
import { HomeSimpleSteps } from "./HomeSimpleSteps";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { HomeWhoWeHelp } from "./HomeWhoWeHelp";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
};
