import type { NextPage } from "next";
import { getComponent } from "../DynamicComponent";

const cmsData = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "B",
  },
];

const Home: NextPage = () => {
  return (
    <>
      {cmsData.map(({ id, name }) => {
        const Component = getComponent(name);
        return <Component key={id} />;
      })}
    </>
  );
};

export default Home;
