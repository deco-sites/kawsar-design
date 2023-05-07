import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  profileText: string;
  button: string;
  buttonURL: string;
  buttonIcon?: LiveImage;
}

export default function NextProject(props: Props) {
  return (
    <section>
      <div class="w-full bg-primary lg:px-20 ">
        <div class="mx-auto flex flex-wrap relative items-center justify-center flex-col py-20 text-sm text-secundary border-t border-gray-800">
          <h1 class="mb-8 text-4xl sm:text-6xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {props.profileText}
          </h1>

          <div class="flex items-center justify-center text-[16px]">
            <button class="bg-primary rounded-sm border border-gray-800 w-[210px] h-[60px] transition-all duration-500 ease-in-out hover:scale-90">
              <a
                href={props.buttonURL}
                target="_blank"
                class="flex justify-center items-center"
              >
                <span>{props.button}</span>

                <img src={props.buttonIcon} class="ml-2 h-4" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
