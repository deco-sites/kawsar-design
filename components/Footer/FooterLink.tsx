import Image from "deco-sites/std/components/Image.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  link: string;
  title: string;
  svg_logos: LiveImage;
}

export default function Navlink({ link, title, svg_logos }: Props) {
  return (
    <li class="flex items-center">
      <a
        href={link}
        target="_blank"
        class="flex items-center justify-center pl-4 hover:text-gray-400"
      >
        <span class="flex hidden md:block">
          {title}
        </span>
        <Image
          src={svg_logos}
          alt="Logo"
          width={16}
          height={16}
          class="md:hidden "
        />
      </a>
    </li>
  );
}
