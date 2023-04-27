import { useState } from "preact/hooks";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Navlink from "./Navlink.tsx";

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
    <header class="w-full flex items-center bg-gray-900">
      <div class="mx-auto w-full md:px-10">
        <nav class="flex items-center justify-between w-full h-[60px] text-sm text-black md:h-[80px]">
          <a href={props.link_logo} class="flex items-center pl-[12px]">
            <img src={props.logo} alt="Logo" class="w-8" />
            <span class="pl-[12px] hover:text-gray-400">
              {props.text_logo}
            </span>
          </a>

          <div class="flex items-center justify-end">
            <ul class="flex pr-[12px]">
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
