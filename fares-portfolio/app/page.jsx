import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Page() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Fares Abbes</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80">
              I excel at creating web applications with a great user experience
              and i can do that with various technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-7">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Downlaod CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-7 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-7 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats className="mt-[-15px]" />
    </section>
  );
}
