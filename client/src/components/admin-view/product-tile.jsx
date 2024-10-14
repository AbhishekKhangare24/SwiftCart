import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <Card className="w-full rounded-md max-w-sm mx-auto flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <div className="flex-grow">
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 && (
              <span className="text-lg font-semibold">
                ${product?.salePrice}
              </span>
            )}
          </div>
        </CardContent>
      </div>
      <CardFooter className="sticky bottom-0 bg-white px-4 shadow-md z-10">
        <div className="flex justify-between w-full">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
            className="flex-1 mr-2"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(product?._id)}
            className="flex-1 transition-colors duration-200 bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AdminProductTile;
