import AlienPlanets from "./AlienPlanets.jsx";
import meme from "/public/meme.webp";

export default function Home() {
  return (
    <main>
      <div className="number">1</div>
      <hr />
      <div id="blue-box"></div>
      <div className="number">2</div>
      <hr />
      <img src={meme.src} alt="meme image" />
      <div className="number">3</div>
      <hr />
      <AlienPlanets />
    </main>
  );
}
