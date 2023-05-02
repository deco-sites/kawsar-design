import { useEffect, useState } from "preact/hooks";

interface Props {
  items: number;
  delay?: number;
  id: string;
  itemsPerPageDesktop: number;
  itemsPerPageMobile: number;
  autoTransition?: boolean;
}

export default function Slider({
  id,
  items,
  delay = 2000,
  autoTransition = true,
  itemsPerPageDesktop = 1,
  itemsPerPageMobile = 1,
}: Props) {
  const [index, setIndex] = useState(0);
  const [cycles, setCycles] = useState(0);

  if (autoTransition) {
    useEffect(() => {
      let id: number;
      if (window.innerWidth < 768) {
        id = setInterval(
          () =>
            setIndex((index) =>
              items - index > itemsPerPageMobile ? index + 1 : 0
            ),
          delay,
        );
      } else {
        id = setInterval(
          () =>
            setIndex((index) =>
              items - index > itemsPerPageDesktop ? index + 1 : 0
            ),
          delay,
        );
      }
      return () => {
        clearInterval(id);
      };
    }, [delay, items, itemsPerPageDesktop, itemsPerPageMobile]);

    useEffect(() => {
      const content = document.getElementById(
        id,
      )?.querySelector("[data-slider-content]") as HTMLDivElement;

      const elements = Array.from(content.querySelectorAll("div"));

      elements.forEach((element) => {
        const newElement = element.cloneNode(true) as HTMLDivElement;
        newElement.classList.add("active");
        content.appendChild(newElement);
      });
    }, []);
  }

  useEffect(() => {
    const content = document.getElementById(
      id,
    )?.querySelector("[data-slider-content]") as HTMLDivElement;

    if (content) {
      const cycleOffset = cycles * items;
      const adjustedIndex = index + cycleOffset;
      content.style.transform = `translateX(-${
        (100 / (items * (cycles + 1))) *
        adjustedIndex
      }%)`;

      if (adjustedIndex >= items * (cycles + 1)) {
        setCycles((cycles) => cycles + 1);
      }
    }
  }, [cycles, id, index, items]);

  return <div />;
}
