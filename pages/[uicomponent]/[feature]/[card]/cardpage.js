import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../src/layout";
import SingleComponent from "../../../../src/components/SingleComponent/SingleComponent";

export default function card(props) {
  const router = useRouter();
  const cardData = router.query;
  // console.log("from cardpage", cardData);

  return (
    <Layout>
      <SingleComponent cardData={cardData} />
    </Layout>
  );
}
