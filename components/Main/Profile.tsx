import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  profileImage: LiveImage;
  profileTitle: string;
  profileText: string;
  button: string;
  buttonURL: string;
  buttonIcon?: LiveImage;
}

export default function Profile(props: Props) {
  return (
    <section>
      <main class="w-full bg-primary border-b border-gray-800">
        <div class="mx-auto flex flex-wrap relative items-center justify-center flex-col py-12 text-sm text-secundary md:px-24">
          <div class="py-8">
            <img
              src={props.profileImage}
              alt="Photo Profile"
              class="inline-block text-center w-32 h-32 rounded-full"
            />
          </div>

          <div class="pb-4">
            <span>{props.profileTitle}</span>
          </div>

          <h1 class="pb-6 mb-8 text-4xl sm:text-6xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {props.profileText}
          </h1>

          <div class="flex items-center justify-center text-[16px]">
            <button class="bg-primary rounded-sm border w-[216px] h-[69px] transition-all duration-500 ease-in-out hover:scale-90">
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
      </main>
    </section>
  );
}
