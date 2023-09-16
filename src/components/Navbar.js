import { useState } from "react";
function Navbar() {
  const [bgColor, setbgColor] = useState(false);

  const colorChange = () => {
    if (window.scrollY >= 60) {
      setbgColor(true);
    } else {
      setbgColor(false);
    }
  };
  window.addEventListener("scroll", colorChange);
  //{"w-full h-[43px] fixed  z-[999]"}
  return (
    <div
      className={
        "w-full h-[43px] fixed z-[999] " +
        (bgColor ? "bg-[#f9f2ea]  shadow" : "bg-transparent")
      }
    >
      <div className="lg:container h-full mx-auto flex justify-between items-center">
        <ul className="text-[#999] flex flex-wrap ">
          <li href="./" className="mr-3 nav">
            Home
          </li>
          <li href="./" className="mx-3 nav">
            Contact
          </li>
          <li href="./" className="mx-3 nav">
            Our Story
          </li>
          <li href="./" className="mx-3 nav">
            Shop
          </li>
          <li href="./" className="mx-3 nav ">
            About Us
          </li>
        </ul>
        <ul className="text-black flex  ">
          <li href="./" className="mx-3 cursor-pointer">
            Our Story
          </li>
          <li href="./" className="mx-3 cursor-pointer">
            Shop
          </li>
          <li href="./" className="ml-3 cursor-pointer">
            About Us
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
