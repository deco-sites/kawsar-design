import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  profileImage: LiveImage;
  profileTitle: string;
  profileText: string;
  buttonText: string;
  buttonURL: string;
  buttonIcon: LiveImage;
}

export default function Profile(props: Props) {
  return (
    <section>
      <main class="w-full bg-primary">
        <div class="mx-auto flex flex-wrap relative items-center justify-center flex-col py-12 text-sm text-secundary md:px-24">
          <div class="py-8">
            <Image src={props.profileImage} alt="Photo Profile" width={128} height={128} class="inline-block text-center rounded-full"/>
          </div>

          <div class="pb-4 font-semibold">
            <span>{props.profileTitle}</span>
          </div>

          <h1 class="pb-6 mb-8 text-4xl sm:text-6xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
            {props.profileText}
          </h1>

          <div class="flex items-center justify-center text-[16px]">
            <button class="bg-primary rounded-sm border border-gray-800 w-[210px] h-[60px] transition-all duration-500 ease-in-out hover:scale-90">
              <a
                href={props.buttonURL}
                target="_blank"
                class="flex justify-center items-center"
              >
                <span class="font-semibold">{props.buttonText}</span>

                <Image src={props.buttonIcon} alt="Button Icon" width={16} height={16} class="ml-2" />
                
              </a>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
