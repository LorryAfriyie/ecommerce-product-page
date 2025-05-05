import { useEffect, useState } from "react";

import { CartControl } from "./CartControl";
import { ImageSlider } from "../components/ImageSlider.tsx";
import { useCart } from "../context/CartContext.tsx";
import { NextIcon, PrevIcon } from "../components/SVG.tsx";

// Product image imports
import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";

// Product thumbnail imports
import thumbnail1 from "/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "/images/image-product-4-thumbnail.jpg";

const products = [img1, img2, img3, img4];

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

export function ProductPage() {
  const { slider, handleSlider, index, setIndex } = useCart();
  const [width, setWidth] = useState(getWidth());

  function getWidth() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  // Move to the next image
  function nextImage() {
    setIndex((current) => {
      if (current === products.length - 1) return 0;
      return current + 1;
    });
  }

  // Move to the previous image
  function prevImage() {
    setIndex((current) => {
      if (current === 0) return products.length - 1;
      return current - 1;
    });
  }

  function handleOverlay() {
    if (width.innerWidth >= 1024) handleSlider();

    return null;
  }

  useEffect(() => {
    function handleScreenWidth() {
      setWidth(getWidth());
    }

    window.addEventListener("resize", handleScreenWidth);
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  return (
    <div className="product-page">
      {slider && <ImageSlider images={products} thumbnails={thumbnails} />}
      <div className="product-page__grid">
        <div className="product-page__img-col">
          <div className="product-page__img-container">
            <img
              src={products[index]}
              alt={products[index]}
              className={"product-img"}
              onClick={handleOverlay}
            />

            <button className={"prev-btn"} onClick={prevImage}>
              <PrevIcon />
            </button>
            <button className={"next-btn"} onClick={nextImage}>
              <NextIcon />
            </button>
          </div>

          {/*Product Image Thumbnails*/}
          <div className={"img-thumbnails"}>
            {thumbnails.map((img, i) => (
              <button
                key={img}
                className={
                  i === index
                    ? "active-thumbnail thumbnails-btn"
                    : "thumbnails-btn"
                }
                onClick={() => setIndex(i)}
              >
                <img src={img} alt={img} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-page__info-col">
          <div className="container">
            <small className="product-page__company-name">
              Sneaker Company
            </small>

            <h1 className="product-page__product-heading">
              Fall Limited Edition Sneakers
            </h1>

            <p className="product-page__product-description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div className="product-page__price-block">
              <div className="discount">
                <p className="discount__discount-price">$125.00</p>

                <p className="discount__discount-percentage">50%</p>
              </div>

              <p className="product-page__original-price">$250.00</p>
            </div>

            <CartControl />
          </div>
        </div>
      </div>
    </div>
  );
}
