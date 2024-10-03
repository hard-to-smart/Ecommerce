import Header from "./components/Header";
import { CartContext, CartContextProvider } from "./contexts/CartContext";
import { Routes } from "./routes/AllRoutes";

function App() {
  return (
    <CartContextProvider>
   <Routes/>
   </CartContextProvider>
  );
}

export default App;
