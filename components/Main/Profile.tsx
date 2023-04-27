import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  profileImage: LiveImage;
  profileTitle: string;
  profileText: string;
  button: string;
  buttonURL: string;
  buttonSVG: LiveImage;
}

export default function Profile(props: Props) {
  return (
    <section>
      <main class="w-full bg-gray-900">
        <div class="mx-auto flex flex-wrap items-center justify-center flex-col py-12 text-sm text-gray-400">
          <div class="py-8">
            <img
              src={props.profileImage}
              alt="Photo Profile"
              class="inline-block text-center w-24 h-24 rounded-full"
            />
          </div>

          <div class="pb-4">
            <span>{props.profileTitle}</span>
          </div>

          <h1 class="pb-8 text-4xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {props.profileText}
          </h1>

          <div class="text-[16px]">
            <a
              href={props.buttonURL}
              target="_blank"
              class="flex items-center justify-center bg-gray-900 inline-block rounded-sm border w-[216px] h-[69px] hover:(w-[194px] h-[62px] text-[14px] transition-all duration-300)"
            >
              <span>
                {props.button}
              </span>
              <img src={props.buttonSVG} class="pl-[8px] w-7" />
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
