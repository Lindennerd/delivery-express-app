import { DeliveryItems } from "@/api/deliveryExpressApiSchemas";
import { Dispatch, useState } from "react";
import { ProductActions, ProductsActionType } from "./ProductsReducer";

export const Products = ({
  dispatch,
}: {
  dispatch: Dispatch<ProductActions>;
}) => {
  const [productsForm, setProductsForm] = useState<DeliveryItems>(
    {} satisfies DeliveryItems
  );

  const addProduct = (e: any) => {
    e.preventDefault();
    setProductsForm({} satisfies DeliveryItems);
    dispatch({ type: ProductsActionType.ADD_PRODUCT, payload: productsForm });
  };

  return (
    <div className="grid">
      <div className="grid">
        <input
          type="number"
          placeholder="Produto"
          value={productsForm.product ?? ""}
          onChange={(e) =>
            setProductsForm({
              ...productsForm,
              product: parseInt(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={productsForm.quantity ?? ""}
          onChange={(e) =>
            setProductsForm({
              ...productsForm,
              quantity: parseInt(e.target.value),
            })
          }
        />
      </div>
      <div>
        <button onClick={(e) => addProduct(e)}>Adicionar</button>
      </div>
    </div>
  );
};
