import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCartClick = (productId, stock) => {
    setAddedToCart(true);
    handleAddtoCart(productId, stock);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <Card className="relative w-full max-w-sm mx-auto transition-transform duration-500 hover:scale-105 hover:shadow-xl transform hover:-translate-y-2">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative group overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[280px] object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center items-center">
            <p className="text-white mx-4 align-middle text-center text-lg font-semibold">
              {product?.title}
            </p>
          </div>

          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">
              {`Only ${product?.totalStock} left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-base font-semibold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
            <span>{categoryOptionsMap[product?.category]}</span>
            <span>{brandOptionsMap[product?.brand]}</span>
          </div>
          <div className="flex justify-between items-center">
            <span
              className={`${
                product?.salePrice > 0
                  ? "line-through text-gray-500"
                  : "text-primary"
              } text-lg font-semibold`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-green-600">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4">
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() =>
              handleAddToCartClick(product?._id, product?.totalStock)
            }
            className={`w-full flex gap-2 transition-transform duration-300 relative ${
              addedToCart ? "animate-pulse bg-green-500" : ""
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            <div>{addedToCart ? "Adding!" : "Add to cart"}</div>
          </Button>
        )}
      </CardFooter>

      {addedToCart && (
        <>
          <div className="absolute inset-0 flex justify-center items-center bg-green-500 bg-opacity-60 text-white text-lg font-semibold rounded-lg">
            Adding to cart
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
            <div className="confetti"></div>
          </div>
        </>
      )}
    </Card>
  );
}

export default ShoppingProductTile;
