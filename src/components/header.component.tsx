// imports
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-inset border-b transition-all duration-300 ease-in-out">
      <div className="container mx-auto">
        <Image
          src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/fillin-website_SmmRUtXkw.svg"
          alt="Filling Logo"
          height={28}
          width={200}
          className="mx-auto"
        />
      </div>
    </header>
  );
};

export default Header;
