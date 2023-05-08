import { useState } from 'preact/hooks';

import FooterLink from './FooterLink.tsx';

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
export interface Props {
  copyright: string;
  link: Links[];
}

export type Links = {
  link: string;
  title: string;
  svg_logos: LiveImage;
};

export default function Footer(props: Props) {
  const [linksList] = useState<Array<Links>>(
    Array.isArray(props.link) ? props.link : [],
  );

  return (
    <footer class="w-full flex items-center bg-primary">
      <div class="mx-auto w-full lg:px-20">
        <div class="flex items-center justify-between w-full h-[60px] text-sm font-semibold text-secundary md:h-[80px] border-t border-gray-800">
          <span class="flex items-center pl-[12px]">
            {props.copyright}
          </span>

          <div class="flex items-center justify-end">
            <ul class="flex pr-[12px] md:gap-5">
              {linksList.map((props) => (
                <FooterLink
                  link={props.link}
                  title={props.title}
                  svg_logos={props.svg_logos}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
