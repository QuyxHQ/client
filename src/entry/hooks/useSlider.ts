import { useRef } from "react";

const useCustomSlider = (slideAmount: number | undefined) => {
  const slider = useRef<HTMLDivElement | null>(null);

  const slideLeft = () =>
    slider.current && (slider.current.scrollLeft -= slideAmount ? slideAmount : 500);

  const slideRight = () =>
    slider.current && (slider.current.scrollLeft += slideAmount ? slideAmount : 500);

  return { slider, slideLeft, slideRight };
};

export default useCustomSlider;
