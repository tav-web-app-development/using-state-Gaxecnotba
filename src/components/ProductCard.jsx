import { useState } from "react";
export default function ProductCard({ product }) {
  const [currentImageIndex, setImage] = useState(0);
  const [itemsInCart, setItems] = useState(1);
  const [showDescription, setShow] = useState(false);

  const handleAddToCartClick = () => {
    setItems(itemsInCart + 1);
    alert(`you added ${itemsInCart}`);
  };
  // function nextClick() {
  //   setImage(currentImageIndex + 1);
  // }

  return (
    <>
      <div id="image-carousel">
        <img src={product.imageUrls[currentImageIndex]} alt={product.name} />
        <button
          onClick={() => setImage(currentImageIndex + 1)}
          disabled={currentImageIndex === product.imageUrls.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => setImage(currentImageIndex - 1)}
          disabled={currentImageIndex === 0}
        >
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>

      {showDescription && <p>{product.description}</p>}
      <button onClick={() => setShow(!showDescription)}>
        {showDescription ? "Hide Descriptions" : "Show Description"}
      </button>

      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
