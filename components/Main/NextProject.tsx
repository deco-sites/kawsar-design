import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
    
    
    profileText: string;
    button: string;
    buttonURL: string;
    buttonIcon?: LiveImage
  }

export default function NextProject(props: Props) {
    return (
      <section>
        <main class="w-full bg-primary border-b border-gray-800">
          <div class="mx-auto flex flex-wrap relative items-center justify-center flex-col py-12 text-sm text-secundary">
  
            <h1 class="mb-8 text-4xl sm:text-6xl text-center bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text">
              {props.profileText}
            </h1>
  
            <div class="flex items-center justify-center text-[16px]">
              <button class="bg-primary rounded-sm border w-[216px] h-[69px] hover:(w-[194px] h-[62px] text-[14px] transition-all duration-300)">
                <a href={props.buttonURL} target="_blank" class="flex justify-center items-center">
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
