import Imageslider from "./ImageSlider";

function Section1() {
  return (
    <div>
      <div className="h-[160vh] lg:h-[810px] pt-[43px] relative">
        <section className=" h-full before:bg-[url('https://theindiacrafthouse.com/cdn/shop/files/slider-left-img_2000x.png?v=1614301727')] before:bg-cover  before:bg-no-repeat before:absolute before:left-0 before:top-0  before:bg-right-bottom before:h-full before:w-[50%] before:z-[-1] before:bg-[#40422f] after:z-[-1] after:bg-[#f9f2ea] after:absolute after:top-0  after:right-0 after:w-[50%] after:h-full">
          <div className=" container lg:w-1200 xl:w-[100%] h-full  mx-auto">
            <div className=" full-section h-full flex ">
              <div className="left-section basis-1/2 text-red-50 flex-col align-middle pr-[10%] ">
                <div className="h-[200px] w-full">
                  <img
                    src="https://theindiacrafthouse.com/cdn/shop/files/TICH-logo_2000x.png?v=1657278272"
                    alt="img "
                    className="h-[200px] w-[200px]"
                  />
                </div>
                <h1 className=" mt-[7%] mb-[6%]  font-bold text-6xl title">
                  Embrace the <br />
                  Spirit of India
                </h1>
                <p className="mb-[7%] text-lg">
                  An unparalleled legacy that spans millennia. Pure, authentic
                  craft sourced from artisans across the Indian sub-continent.
                  Our vast collection of over 80 different craft forms
                  celebrates a heritage of some of the world’s oldest
                  handicrafts.
                </p>
                <button className="bg-[#000000] px-8 py-3 border border-black text-lg">
                  Shop Now
                </button>
              </div>
              <div className="right-section basis-1/2 pt-[6%] pl-[5%] pb-[6%]">
                <Imageslider />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full h-[100vh]"></div>
      <div className="w-full h-[100vh]"></div>
      <div className="w-full h-[100vh]"></div>
      <div className="w-full h-[100vh]"></div>
    </div>
  );
}

export default Section1;
