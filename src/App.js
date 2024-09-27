import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
    },
  });

  return (
    <div className="App">
      {error ? <p>UH oh! Error...</p> : null}
      {isLoading ? <p>Loading...</p> : null}
      {data?.data?.bitcoin?.usd ? data.data.bitcoin.usd : <p>Null</p>}
    </div>
  );
}

export default App;
