import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../src/layout";
import SingleComponent from "../../../../src/components/SingleComponent/SingleComponent";
import { componentdata } from "../../../../componentdata";

export default function CardPage() {
  const router = useRouter();
  const cardData = router.query;
  const allcomponents = componentdata.filter(
    (el) => el.cardname === cardData.cardname
  );

  const { components } = allcomponents[0];

  console.log("abid", allcomponents[0]);

  console.log("anjuman", components);

  // console.log("from cardpage", cardData);
  // console.log("abid", cardData);
  // console.log(cardData[0].variant);
  // console.log("abid", componentdata);

  return (
    <Layout>
      {components.map((el) => (
        <SingleComponent cardInfo={el} />
      ))}
      {/* <p>{cardData[0].variant}</p> */}
    </Layout>
  );
}
