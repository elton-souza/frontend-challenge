import { useEffect, useRef } from "react";

interface ImageProps {
  src: string;
  className?: string;
}

export default function ImageWrapper({ src, className }: ImageProps) {
  const containerImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerImage.current && className) {
      const currentImage = document.querySelector(
        ".product__img"
      ) as HTMLElement;

      currentImage.setAttribute("class", className);
    }
  }, []);

  return <div ref={containerImage} dangerouslySetInnerHTML={{ __html: src }} />;
}
