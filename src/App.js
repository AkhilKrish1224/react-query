import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";

function App() {
  const priceQuery = useQuery({
    queryKey: ["price"],
    queryFn: () => {
      return axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
    },
    refetchInterval: 1000 * 20,
  });

  const customerQuery = useQuery({
    queryKey: ["customers"],
    queryFn: () => {
      return axios("http://localhost:3000/api/customers");
    },
    refetchInterval: 1000 * 20,
  });

  return (
    <div className="App">
      {priceQuery?.error ? <p>UH oh! Error...</p> : null}
      {priceQuery?.isLoading ? <p>Loading...</p> : null}
      {priceQuery?.data?.data?.bitcoin?.usd ? (
        priceQuery.data.data.bitcoin.usd
      ) : (
        <p>Null</p>
      )}
    </div>
  );
}

export default App;
