import { VNode } from "preact";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  link: string;
  title: string;
  svg_logos: LiveImage;
}

export default function Navlink({ link, title, svg_logos }: Props): VNode {
  return (
    <li class="flex items-center">
      <a href={link} target="_blank" class="flex items-center justify-center hover:text-gray-300">
        <span class="flex hidden md:block pr-[12px]">
          {title}
        </span>
        <img src={svg_logos} alt="Logo" class="md:hidden w-9 pr-[12px]"/>
      </a>
    </li>
  );
}
