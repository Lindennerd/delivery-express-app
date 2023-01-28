import {
  CreateDeliveryRequest,
  DeliveryItems,
} from "@/api/deliveryExpressApiSchemas";
import { useMutation } from "@tanstack/react-query";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { Address } from "./Address";
import { Products } from "./Products";
import { ProductsReducer } from "./ProductsReducer";

export const Form = () => {
  const form = useForm<CreateDeliveryRequest>();

  const [state, dispatch] = useReducer(
    ProductsReducer,
    [] satisfies DeliveryItems[]
  );

  const mut = useMutation((data: CreateDeliveryRequest) => {
    return fetch("http://localhost:5169/api/deliveryRequest", {
      method: "POST",
      body: JSON.stringify({ ...data, clientId: 1, items: state }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  const onSubmit = (data: CreateDeliveryRequest) => {
    mut.mutate(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {mut.isLoading && <p>Carregando...</p>}
      {mut.isError && <p>Erro ao enviar</p>}
      {mut.isSuccess && <p>Enviado com sucesso</p>}
      <details open>
        <summary role="button" className="secondary">
          Produtos
        </summary>
        <Products dispatch={dispatch} />
        {JSON.stringify(state)}
      </details>
      <details>
        <summary role="button" className="secondary">
          Endereço de entrega
        </summary>
        <Address form={form} />
      </details>
      <input type="submit" value="Enviar" />
    </form>
  );
};
