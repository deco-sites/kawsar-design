import Slider from "../../islands/Slider.tsx";
import { useId } from "preact/hooks";


import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";


export interface Props {
  media: { image: LiveImage; link?: string }[];
}


export default function SliderInfinite({ media }: Props) {
  let id = useId();
  id += "media-query";


  return (
    <div
      id={id}
      class="max-w-full m-auto w-full relative bg-primary py-8 border-b border-gray-800 overflow-hidden"
    >
      <div
        class={`flex justify-between transition w-[${
          media.length * 2 * 100
        }%] md:w-[${media.length * 2 * 20}%]`}
        data-slider-content
      >
        {media.map((item, idx) => {
          return (
            <div
              id={`${id}-${idx}`}
              class="w-[100%] md:w-[20%] flex justify-center h-10"
            >
                <img
                  src={item.image}
                  alt="Logos"
                  class="max-w-[100px] h-10 object-contain"
                />
            </div>
          );
        })}
      </div>

      <Slider
        id={id}
        items={media.length * 2}
        itemsPerPageDesktop={5}
        itemsPerPageMobile={1}
        delay={2 * 2000}
        autoTransition={true}
      />
    </div>
  );
}
