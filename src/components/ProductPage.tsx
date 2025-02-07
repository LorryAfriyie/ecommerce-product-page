export function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-page__grid">
        <div className="product-page__img-col">Images</div>

        <div className="product-page__info-col">
          <p className="product-page__company-name">Sneaker Company</p>
          <h1 className="product-page__product-heading">
            Fall Limited Edition Sneakers
          </h1>

          <p className="product-page__product-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="proudct-page__price-block">
            <div className="discount">
              <p className="product-page__discount-price">$125.00</p>

              <p className="proudct-page__discount-percentage">50% </p>
            </div>

            <p className="product-page__original-price">$250.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
