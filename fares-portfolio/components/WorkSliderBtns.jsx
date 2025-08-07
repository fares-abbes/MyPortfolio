"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles = "",
  btnStyles = "",
  iconStyles = "",
}) => {
  const swiper = useSwiper();

  return (
    <div className={`flex gap-2 z-10 ${containerStyles}`}>
      <button
        onClick={() => swiper.slidePrev()}
        className={`bg-green-500 hover:bg-green-600 w-[36px] h-[36px] flex justify-center items-center ${btnStyles}`}
      >
        <PiCaretLeftBold className={`text-black text-2xl ${iconStyles}`} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={`bg-green-500 hover:bg-green-600 w-[36px] h-[36px] flex justify-center items-center ${btnStyles}`}
      >
        <PiCaretRightBold className={`text-black text-2xl ${iconStyles}`} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
