import { DeliveryItems } from "@/api/deliveryExpressApiSchemas";

export enum ProductsActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
}

export interface ProductActions {
  type: ProductsActionType;
  payload: DeliveryItems;
}

export const ProductsReducer = (
  state: DeliveryItems[],
  action: ProductActions
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "REMOVE_PRODUCT":
      return {
        ...state,
        items: state.filter(
          (item: any, index: any) => index !== action.payload
        ),
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        items: state.map((item: any, index: any) =>
          index === action.payload
            ? {
                product: action.payload.product,
                quantity: action.payload.quantity,
              }
            : item
        ),
      };
    default:
      return state;
  }
};
