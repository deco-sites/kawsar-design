import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  image: LiveImage;
  profileTitle: string;
  profileText: string;
  button: string;
  buttonURL: string
}

export default function Profile({
  image,
  profileTitle,
  profileText,
  button,
  buttonURL
}: Props) {
  return (
    <section>
      <main class="w-full bg-black">
        <div class="mx-auto flex flex-wrap items-center justify-center flex-col py-12 text-sm text-gray-700">
          <div class="pb-8">
            <img
              src={image}
              alt="Photo Profile"
              class="inline-block text-center w-24 h-24 rounded-full"
            />
          </div>

          <div class="pb-4">
            <span>{profileTitle}</span>
          </div>

          <h1 class="pb-8 text-4xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {profileText}
          </h1>

          <div class="text-[16px]">
            <button href={buttonURL} target="_blank" class="bg-gray-800 inline-block rounded-sm w-[216px] h-[69px] hover:(w-[194px] h-[62px] text-[14px] transition-all duration-300)">
              <span>
                {button}
              </span>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
