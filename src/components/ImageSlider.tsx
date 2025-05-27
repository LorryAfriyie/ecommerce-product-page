import { useCart } from "../context/CartContext.tsx";
import { CloseIcon, NextIcon, PrevIcon } from "./SVG.tsx";

type ImageSlider = {
  images: string[];
  thumbnails: string[];
};

export function ImageSlider({ images, thumbnails }: ImageSlider) {
  const { handleSlider, index, setIndex } = useCart();

  // Move to the next image
  function nextImage() {
    setIndex((current) => {
      if (current === images.length - 1) return 0;
      return current + 1;
    });
  }

  // Move to the previous image
  function prevImage() {
    setIndex((current) => {
      if (current === 0) return images.length - 1;
      return current - 1;
    });
  }

  return (
    <div className={"overlay"}>
      <div className={"img-slider-grid"}>
        <button onClick={handleSlider} className={"close-btn"}>
          <CloseIcon />
        </button>
        <div className={"img-slider-grid__img-container"}>
          <img
            src={images[index]}
            alt="slider image"
            className={"center-img img-slider-grid__image"}
          />
          <button onClick={prevImage} className={"img-slider-grid__prev"}>
            <PrevIcon />
          </button>
          <button onClick={nextImage} className={"img-slider-grid__next"}>
            <NextIcon />
          </button>
        </div>

        <div className={"img-slider-grid__thumbnail-grid"}>
          {thumbnails.map((thumbnail, i) => (
            <button
              key={i}
              className={
                i === index
                  ? "img-slider-grid__btn active-thumbnail"
                  : "img-slider-grid__btn"
              }
              onClick={() => setIndex(i)}
            >
              <img src={thumbnail} alt={thumbnail} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
