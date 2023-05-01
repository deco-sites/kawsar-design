import { useState } from "preact/hooks";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import MediaSlider from "./MediaSlider.tsx";

export interface Props {
  media: MediasLogos[];
}

export type MediasLogos = {
  link?: string;
  image: LiveImage;
};

export default function Slider(props: Props) {
  const [mediaList] = useState<Array<MediasLogos>>(
    Array.isArray(props.media) ? props.media : [],
  );

  return (
    <div class="w-full flex relative items-center justify-center bg-primary py-8 border border-gray-800 overflow-x-hidden">
      <div class="w-full animate-marquee">
        <ul class="flex gap-5">
          {mediaList.map((props) => (
            <MediaSlider
              link={props.link}
              image={props.image}
            />
          ))}
        </ul>
      </div>

      <div class="animate-marquee2 absolute">
        <ul class="w-full flex gap-5">
          {mediaList.map((props) => (
            <MediaSlider
              link={props.link}
              image={props.image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
