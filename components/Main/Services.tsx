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
      <div class="w-full bg-primary ">
        <div class="py-32 relative">
          <h3 class="pb-10 text-2xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {serviceText}
          </h3>

          <div class="h-full">
            <div
              id={id}
              class="container max-w-[1024px] mx-auto overflow-hidden"
            >
              <div
                class="grid grid-cols-2 gap-2 lg:(flex justify-center) md:gap-5 overflow-hidden"
                data-slider-content
              >
                {card.map((card, idx) => {
                  return (
                    <div
                      id={`${id}-${idx}`}
                      class="grid grid-cols-1 h-80 lg:(h-[340px] w-[260px]) border border-gray-800 rounded-sm pl-4 pb-8"
                    >
                      <div class="flex flex-col justify-end items-start text-secundary mr-2">
                        <img src={card.cardImg} class="h-8" />
                        <h4 class="bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text font-semibold mt-5">{card.cardTitle}</h4>
                        <p class="text-sm overflow-hidden overflow-ellipsis mb-4 mt-5 whitespace-pre-line">
                          {card.cardText}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
