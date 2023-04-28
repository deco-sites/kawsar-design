import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useId } from "preact/hooks";

export interface Props {
  serviceText: string;

  card: {
    cardImg: LiveImage;
    cardTitle: string;
    cardText: string;
  }[];
}

export default function Services({ serviceText, card }: Props) {
  let id = useId();
  id += "card";
  return (
    <section>
      <div class="w-full bg-gray-900 border-t border-b">
        <div class="mt-28 mb-24 relative">
          <h3 class="pb-8 text-2xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {serviceText}
          </h3>

          <div id={id} class="flex justify-between max-w-[1140px] m-auto overflow-hidden">

            <div class="grid grid-cols-2 sm:(flex)" data-slider-content>
              {card.map((card, idx) => {
                return (

                  <div id={`${id}-${idx}`} class="mx-5 p-8 border grid grid-cols-1 h-80 w-56">
                    <div class="flex justify-start items-center">
                        <img src={card.cardImg} class="h-10" />
                    </div>
                    
                    <h4 class="font-semibold ">{card.cardTitle}</h4>
                    <p class="mt-auto">{card.cardText}</p>
                  </div>

                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
