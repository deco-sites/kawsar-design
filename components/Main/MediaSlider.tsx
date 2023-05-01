import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  link?: string;
  image: LiveImage;
}

export default function MediaSlider({ link, image }: Props) {
  return (
    <li class="w-full flex items-center justify-center">
      <a
        href={link}
        target="_blank"
        class=""
      >
        <img
          src={image}
          alt="Logo"
          class=""
        />
      </a>
    </li>
  );
}
