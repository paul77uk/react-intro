"use client";
import defaultPlanets from "../../planets.js";
import React, { useState } from "react";

const AlienPlanets = () => {
  const [planets, setPlanets] = useState(defaultPlanets);
  return (
    <div>
      <h4>Alien Planets</h4>
      <div id="planets">
        {planets.map((planet) => (
          <div className="planet" key={planet.id}>
            <div className="planet-img">{planet.emoji}</div>
            <div>{planet.name}</div>
            <div>
              {planet.name} is {planet.distanceFromEarth} miles from earth.{" "}
              {planet.name} is believed to {planet.hasLife ? "" : "not"} have
              life. The atmosphere of {planet.name} is {planet.atmosphere}.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlienPlanets;
