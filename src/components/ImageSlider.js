import { useState, useEffect } from "react";
import Images from "../Images";

export default function Imageslider() {
  const [Image, setImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(Image === Images.length - 1 ? 0 : Image + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [Image]);

  function Handleclick() {
    setImage(Image === Images.length - 1 ? 0 : Image + 1);
  }
  function Handleclickprev() {
    setImage(Image === 0 ? Images.length - 1 : Image - 1);
  }
  return (
    <div className="w-full h-full">
      <img
        className=" w-full h-full"
        src={Images[Image].url}
        alt={Images[Image].author}
        key={Images[Image].id}
      />

      <button onClick={Handleclickprev}>prev</button>
      <button onClick={Handleclick}>Next</button>
    </div>
  );
}
