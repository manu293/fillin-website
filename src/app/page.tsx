"use client";
// imports
import Image from "next/image";

// local imports
import Footer from "@/components/footer.component";
import Header from "@/components/header.component";
import Dropdown from "@/components/dropdown.component";

export default function Home() {
  const mainPageSection1 = () => (
    <div className="flex flex-col justify-center items-center ml-5 mr-5 md:flex-row mt-12 mb-6 md:mt-24 space-y-4 md:space-y-0 md:mb-0">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/fillin-grup_i-Hi42FHS.jpg"
          alt="Fillin Banner"
          className="max-w-full bannerImage"
          width={320}
          height={300}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center pt-6 md:pt-0">
        <div className="flex flex-wrap place-content-evenly">
          <div className="flex items-center justify-center w-45 h-45 productQualityImage">
            <Image
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/100-natural_C4dz1hacP.jpg"
              alt="100 natural"
              width={250}
              height={250}
            />
          </div>
          <div className="flex items-center justify-center w-45 h-45 productQualityImage">
            <Image
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/refreshing_FzhAgEu0J.jpg"
              alt="Refreshing"
              width={250}
              height={250}
            />
          </div>
          <div className="flex items-center justify-center w-45 h-45 productQualityImage">
            <Image
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/no-additives_3EetSYnH6.jpg"
              alt="No Additives"
              width={250}
              height={250}
            />
          </div>
          <div className="flex items-center justify-center w-45 h-45 productQualityImage">
            <Image
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/no-preservatives_RgzLFNdiH.jpg"
              alt="No Prespective"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4 md:justify-center">
          <button className="py-2 px-4 border border-black bg-black text-white rounded-full">
            SHOP FILLIN
          </button>
        </div>
      </div>
    </div>
  );

  const mainPageSection2 = () => (
    <div className="flex flex-col items-center mt-12 mb:mt-0">
      <h1 className="text-4xl md:text-8xl font-bold md:mb-8">HYDRATION</h1>

      <section className="my-4 md:my-12 flex flex-wrap justify-center md:justify-around">
        <div className="w-full md:w-1/2 p-4">
          <div className="p-4 flex flex-col justify-center items-center productImageContainer md:w-3/4">
            <Image
              className="w-full rounded-lg mb-4"
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/chardonnay_A2hT-OfsD.jpg"
              alt="CHARDONNAY"
              width={320}
              height={400}
            />
            <h2 className="text-lg md:text-3xl text text-center font-semibold mb-2">
              CHARDONNAY
            </h2>
            <Dropdown />
            <button className="py-2 px-4 bg-black text-white rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="p-4 flex flex-col justify-center items-center productImageContainer md:w-3/4">
            <Image
              className="w-full rounded-lg mb-4"
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/shiraz_dZIix3zXf.jpg"
              alt="SHIRAZ"
              width={320}
              height={400}
            />
            <h2 className="text-lg md:text-3xl text text-center font-semibold mb-2">
              SHIRAZ
            </h2>
            <Dropdown />
            <button className="py-2 px-4 bg-black text-white rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const mainPageSection3 = () => (
    <div className="container mx-auto px-4 py-8 md:flex">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Benefits of Grapes</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-bold">Nutrient-rich powerhouse:</span> Grapes
            are packed with essential nutrients like potassium, phosphorus,
            magnesium, and calcium, making them a great choice for promoting
            overall health and well-being.
          </li>
          <li>
            <span className="font-bold">Antioxidant powerhouse:</span> Grape
            juice concentrate contains powerful antioxidants that help protect
            the body against oxidative stress, which can contribute to various
            chronic diseases.
          </li>
          <li>
            <span className="font-bold">Cardiovascular support:</span> The
            antioxidant properties found in grape juice concentrate are
            particularly beneficial for cardiovascular health. Regular
            consumption of grapes can help maintain healthy blood pressure
            levels and promote a healthy heart.
          </li>
          <li>
            <span className="font-bold">Natural source of energy:</span> Grapes
            are a natural source of energy due to their carbohydrate content.
            Including grapes in your diet can provide a quick and natural boost
            of energy to keep you going throughout the day.
          </li>
          <li>
            <span className="font-bold">Digestive health support:</span> Grapes
            contain dietary fiber, which promotes healthy digestion and helps
            prevent constipation. By incorporating grapes into your diet, you
            can support a healthy digestive system and improve overall gut
            health.
          </li>
          <li>
            <span className="font-bold">Versatile and delicious:</span> Grapes
            are not only nutritious but also incredibly versatile and delicious.
            Whether eaten fresh, added to salads, or transformed into juice or
            wine, grapes offer a delightful taste that can be enjoyed in various
            ways, adding a burst of flavor to your meals and snacks.
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">
          Where is Grape Concentrate Used
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-bold">Sweeten with natural sugars:</span>{" "}
            Grape concentrate can be used as a natural sweetener, adding a touch
            of sweetness to your favorite recipes and beverages without the need
            for refined sugars or artificial sweeteners.
          </li>
          <li>
            <span className="font-bold">Fermentation process:</span> Grape
            concentrate is commonly used in the fermentation process,
            particularly for making homemade wines and beers. Its natural sugars
            provide the necessary fuel for yeast to convert into alcohol,
            resulting in delightful homemade libations.
          </li>
          <li>
            <span className="font-bold">
              Enhance other alcoholic beverages:
            </span>{" "}
            Grape concentrate can be a fantastic addition to other alcoholic
            beverages. It can be mixed with spirits, such as vodka or rum, to
            add a fruity and flavorful twist to cocktails or as an ingredient in
            liqueurs.
          </li>
          <li>
            <span className="font-bold">Natural source of energy:</span> Grape
            concentrate is a key ingredient in the winemaking process. It allows
            winemakers to control the flavor profile, sweetness, and balance of
            their wines, ensuring consistent quality and taste across different
            batches.
          </li>
          <li>
            <span className="font-bold">DIY drink creation:</span> With grape
            concentrate, you have the opportunity to create your own flavorful
            drink. Mix it with water, sparkling water, or other juices to make
            refreshing and customized beverages tailored to your taste
            preferences.
          </li>
          <li>
            <span className="font-bold">Versatile container options:</span> We
            offer grape concentrate in various container sizes to suit your
            specific needs. Whether you require small bottles for personal use
            or larger containers for commercial purposes, we ensure appropriate
            packaging and shipping to preserve the product&apos;s integrity
            during transit.
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8 overflow-auto">
        {mainPageSection1()}
        {mainPageSection2()}
        {mainPageSection3()}
      </div>
      <Footer />
    </div>
  );
}
