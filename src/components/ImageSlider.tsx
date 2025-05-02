import { useCart } from "../context/CartContext.tsx";

type ImageSlider = {
  images: string[];
  thumbnails: string[];
};

export function ImageSlider({ images, thumbnails }: ImageSlider) {
  const { handleSlider, index, setIndex } = useCart();

  return (
    <div className={"overlay"}>
      <button onClick={handleSlider}>Close</button>
      <div className="img-slider-grid">
        <img
          src={images[index]}
          alt="slider image"
          className={"center-img img-slider-grid__image"}
        />

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
