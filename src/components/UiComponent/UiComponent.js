import React from "react";
import Feature from "../Feature/Feature";

export default function UiComponent(props) {
  const { title, description, features } = props;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:px-24">
      <h2 className="text-2xl text-gray-900 font-extrabold mb-3">{title}</h2>
      <p className="text-sm text-gray-500 border-b pb-14">{description}</p>

      <div>
        {features.map((feature, i) => (
          <Feature key={i} name={feature.name} card={feature.card} />
        ))}
      </div>
    </div>
  );
}
