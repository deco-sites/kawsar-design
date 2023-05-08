import Image from 'deco-sites/std/components/Image.tsx';
import { useId } from 'preact/hooks';

import Slider from '../../islands/Slider.tsx';


import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  media: { image: LiveImage; link?: string }[];
}


export default function SliderInfinite({ media }: Props) {
  let id = useId();
  id += "media-query";


  return (
    <div
      id={id}
      class="max-w-full m-auto w-full relative bg-primary py-14 border-t border-b border-gray-800 overflow-hidden"
    >
      <div
        class={`flex justify-between transition w-[${
          media.length * 1 * 100
        }%] md:w-[${media.length * 2 * 14.3}%]`}
        data-slider-content
      >
        {media.map((item, idx) => {
          return (
            <div
              id={`${id}-${idx}`}
              class="w-[100%] md:w-[20%] flex items-center justify-center h-10"
            >
                <Image src={item.image} alt="Logos" width={100} height={40} class="object-contain" />

            </div>
          );
        })}
      </div>

      <Slider
        id={id}
        items={media.length * 2}
        itemsPerPageDesktop={7}
        itemsPerPageMobile={2}
        delay={2 * 2000}
        autoTransition={true}
      />
    </div>
  );
}
