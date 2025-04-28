import { useCart } from "../context/CartContext.tsx";

type ImageSlider = {
  images: string[];
  index: number;
};

export function ImageSlider({ images, index }: ImageSlider) {
  const { handleSlider } = useCart();

  return (
    <div className="overlay" onClick={handleSlider}>
      <div className="img-slider-grid">
        <img
          src={images[index]}
          alt="slider image"
          className={"center-img img-slider-grid__image"}
        />
      </div>
    </div>
  );
}
