import { useEffect, useState } from "react";

import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
} from "@microsoft/signalr";

export const DeliveryRequestCreated = () => {
  const [lastPong, setLastPong] = useState(null);
  const [connection, setConnection] = useState<null | HubConnection>(null);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://localhost:5169/deliveryExpressHub", {
        transport: HttpTransportType.WebSockets,
        skipNegotiation: true,
      })
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then(() => {
        console.log("connected");

        connection.on("DeliveryRequestCreated", (data) => {
          setLastPong(data);
          console.log(data);
        });
      });
    }
  }, [connection]);

  return <div>{JSON.stringify(lastPong)}</div>;
};
