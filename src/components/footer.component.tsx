import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 flex-shrink-0">
      <div className="container mx-auto px-4 md:px-0 flex flex-wrap h-full">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col mb-6 md:mb-0 pr-4 lg:pr-8">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-white">ABOUT FILLIN</h3>
            <p className="text-white">
              Our grape concentrate comes from the finest wineries in Australia,
              where quality standards are high. You can use our product to make
              your own unique drinks by mixing it with other beverages or simply
              dilute it to enjoy as juice or jam.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col mb-6 md:mb-0 md:pl-4 lg:pl-8">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-white">SHIRAZ</h3>
            <p className="text-white">
              Shiraz is a red grape variety that is widely planted in Australia.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">CHARDONNAY</h3>
            <p className="text-white">
              Chardonnay is a white grape variety known for its versatility.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
