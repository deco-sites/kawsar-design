import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

import Navlink from "./Navlink.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
export interface Props {
  logo: LiveImage;
  link_logo?: string;
  text_logo: string;
  link: Links[];
}

export type Links = {
  link: string;
  title: string;
  svg_logos: LiveImage;
};

export default function Header(props: Props) {
  const [linksList] = useState<Array<Links>>(
    Array.isArray(props.link) ? props.link : [],
  );

  return (
    <header class="w-full flex items-center bg-primary">
      <div class="mx-auto w-full lg:px-20">
        <nav class="flex items-center justify-between w-full h-[60px] text-sm font-semibold text-secundary md:h-[80px] border-b border-gray-800">
          <a href={props.link_logo} class="flex items-center pl-[12px]">
            <Image src={props.logo} alt="Logo" width={20} height={20} />
            <span class="pl-[12px] hover:text-gray-400">
              {props.text_logo}
            </span>
          </a>

          <div class="flex items-center justify-end">
            <ul class="flex pr-[12px] md:gap-5">
              {linksList.map((props) => (
                <Navlink
                  link={props.link}
                  title={props.title}
                  svg_logos={props.svg_logos}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
