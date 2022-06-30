import React from "react";
import SubHeading from "../src/components/SubHeading/SubHeading";
import UiComponent from "../src/components/UiComponent/UiComponent";
import Layout from "../src/layout";
import { maindata } from "../maindata";

export default function HomePage() {
  return (
    <Layout>
      <SubHeading />
      {maindata.map((single) => (
        <UiComponent
          title={single.title}
          description={single.description}
          features={single.features}
        />
      ))}
    </Layout>
  );
}
