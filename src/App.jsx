import Header from "./components/Header";
import { CartContextProvider } from "./contexts/CartContext";
import { CurrencyContextProvider } from "./contexts/CurrencyContext";
import { Routes } from "./routes/AllRoutes";

function App() {
  return (
    <CurrencyContextProvider>
    <CartContextProvider>
   <Routes/>
   </CartContextProvider>
   </CurrencyContextProvider>
  );
}

export default App;
