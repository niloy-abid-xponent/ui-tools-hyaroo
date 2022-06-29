import React from "react";
import Card from "../Card/Card";

export default function Feature(props) {
  const { name, card } = props;

  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-between py-8 border-b-2 last:border-b-0">
      <h3 className="flex-1 text-gray-900 font-semibold">{name}</h3>
      <div className="grid sm:grid-cols-3 flex-[3] gap-6 ">
        {card.map((singleCard, i) => (
          <Card key={i} cardData={singleCard} />
        ))}
      </div>
    </div>
  );
}
