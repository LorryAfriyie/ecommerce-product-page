import { useCart } from "../context/CartContext.tsx";

type ImageSlider = {
  images: string[];
  index: number;
  thumbnails: string[];
};

export function ImageSlider({ images, index, thumbnails }: ImageSlider) {
  const { handleSlider } = useCart();

  return (
    <div className="overlay" onClick={handleSlider}>
      <div className="img-slider-grid">
        <img
          src={images[index]}
          alt="slider image"
          className={"center-img img-slider-grid__image"}
        />

        <div className="img-slider-grid__thumbnail-grid">
          {thumbnails.map((thumbnail, i) => (
            <button key={i} className={"img-slider-grid__btn"}>
              <img src={thumbnail} alt={thumbnail} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
