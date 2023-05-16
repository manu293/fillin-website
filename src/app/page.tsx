// imports
import Image from "next/image";

// local imports
import Footer from "@/components/footer.component";
import Header from "@/components/header.component";

export default function Home() {
  const mainPageSection1 = () => (
    <div className="flex flex-col justify-center items-center ml-5 mr-5 md:flex-row mt-12 mb-6 md:mt-24 space-y-4 md:space-y-0 md:mb-0">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/fillin-group_vMV9CdJi4.svg"
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
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/electrolytes_mMLcJf-9J.jpg"
              alt="Electorlytes"
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
    <div className="flex flex-col items-center h-screen mt-12 mb-12 mb:mt-0">
      <h1 className="text-4xl md:text-8xl font-bold md:mb-8">HYDRATION</h1>

      <section className="my-4 md:my-12 flex flex-wrap justify-center md:justify-around">
        <div className="w-full md:w-1/2 p-4">
          <div className="p-4 flex flex-col justify-center items-center productImageContainer md:w-3/4">
            <Image
              className="w-full rounded-lg mb-4"
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/fillin-drink-2_qWBvkHwEQo.svg"
              alt="CHARDONNAY"
              width={320}
              height={300}
            />
            <h2 className="text-lg md:text-3xl text text-center font-semibold mb-2">
              CHARDONNAY
              <br />
              (WHITE)
            </h2>
            <button className="py-2 px-4 bg-black text-white rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="p-4 flex flex-col justify-center items-center productImageContainer md:w-3/4">
            <Image
              className="w-full rounded-lg mb-4"
              src="https://ik.imagekit.io/egjlzyqlxq9/Fillin_Website/fillin-drink-1_x-u_Wxw5OL.svg"
              alt="SHIRAZ"
              width={320}
              height={300}
            />
            <h2 className="text-lg md:text-3xl text text-center font-semibold mb-2">
              SHIRAZ
              <br />
              (RED)
            </h2>
            <button className="py-2 px-4 bg-black text-white rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow overflow-auto">
        {mainPageSection1()}
        {mainPageSection2()}
      </div>
      <Footer />
    </div>
  );
}
