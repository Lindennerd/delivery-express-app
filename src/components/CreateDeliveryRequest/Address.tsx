import { CreateDeliveryRequest } from "@/api/deliveryExpressApiSchemas";
import { UseFormReturn } from "react-hook-form";

export const Address = (props: {
  form: UseFormReturn<CreateDeliveryRequest, any>;
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Rua"
        {...props.form.register("address.street")}
      />
      <input
        type="number"
        placeholder="Número"
        {...props.form.register("address.number")}
      />
      <input
        type="text"
        placeholder="Complemento"
        {...props.form.register("address.complement")}
      />
      <input
        type="text"
        placeholder="Bairro"
        {...props.form.register("address.neighborhood")}
      />
      <input
        type="text"
        placeholder="CEP"
        {...props.form.register("address.zipCode")}
      />
      <input
        type="text"
        placeholder="Cidade"
        {...props.form.register("address.city")}
      />
      <input
        type="text"
        placeholder="Estado"
        {...props.form.register("address.state")}
      />
    </>
  );
};
