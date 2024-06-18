import Image from "next/image";
import SectionContainer from "@/components/shared/section-container";
import CustomOverlay from "@/components/shared/custom-overlay";
import { Button } from "@/components/ui/button";

const itemArray = [1, 2, 3, 4, 5, 6];

const Destinations = () => {
  return (
    <SectionContainer
      centered
      highlight="Top Destinations"
      title="Explore Top Destinations"
      description="Choose from a wide range of destinations!"
    >
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-8">
        {itemArray.map((item) => (
          <div
            key={item}
            className="relative overflow-hidden transition duration-500 cursor-pointer group rounded-lg"
          >
            <Image
              src="https://picsum.photos/600"
              alt="image"
              width={600}
              height={600}
              className="group-hover:scale-105 transition duration-500"
            />
            <div className="absolute flex items-center justify-between bottom-0 p-8 w-full z-10">
              <div className="max-w-[160px]">
                <h5 className="mb-0 text-brand-dark text-xl font-medium">
                  England Long Text Here
                </h5>
                <div className="text-white text-2xl">London</div>
              </div>
              <Button className="bg-brand-dark text-sm hover:bg-brand">
                15 Tours
              </Button>
            </div>
            <CustomOverlay />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Destinations;
