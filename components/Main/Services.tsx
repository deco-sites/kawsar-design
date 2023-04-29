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
      <div class="w-full bg-primary border-b border-gray-800">
        <div class="pt-28 mb-24 relative">
          <h3 class="pb-8 text-2xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {serviceText}
          </h3>

          <div class="h-full">
            <div
              id={id}
              class="container max-w-[1024px] mx-auto overflow-hidden lg:px-10"
            >
              <div
                class="grid grid-cols-2 gap-3 lg:(flex justify-center) overflow-hidden"
                data-slider-content
              >
                {card.map((card, idx) => {
                  return (
                    <div
                      id={`${id}-${idx}`}
                      class="p-4 grid grid-cols-1 h-80 lg:w-56 border rounded-sm"
                    >
                      <div class="flex flex-col justify-end items-start">
                        <img src={card.cardImg} class="h-10" />
                        <h4 class="font-semibold mt-4">{card.cardTitle}</h4>
                        <p class="text-sm overflow-hidden overflow-ellipsis mb-4 mt-4">
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
