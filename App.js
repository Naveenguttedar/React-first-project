import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
export default function () {
  const card_element = data.map((item) => (
    <Card
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <>
      <Navbar />
      {card_element}
    </>
  );
}
