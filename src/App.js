import "./App.css";
import Customers from "./components/Customers";
import { useState } from "react";

function App() {
  const [showCustomers, setShowCustomers] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowCustomers(!showCustomers);
        }}
      >
        {showCustomers ? "Hide Customers" : "Show Customers"}
      </button>
      {showCustomers ? <Customers /> : null}
    </div>
  );

  // const priceQuery = useQuery({
  //   queryKey: ["price"],
  //   queryFn: () => {
  //     return axios(
  //       "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  //     );
  //   },
  //   refetchInterval: 1000 * 20,
  // });
  // return (
  //   <div className="App">
  //     {/* {priceQuery?.error ? <p>UH oh! Error...</p> : null}
  //     {priceQuery?.isLoading ? <p>Loading...</p> : null}
  //     {priceQuery?.data?.data?.bitcoin?.usd ? (
  //       priceQuery.data.data.bitcoin.usd
  //     ) : (
  //       <p>Null</p>
  //     )} */}
  //   </div>
  // );
}

export default App;
