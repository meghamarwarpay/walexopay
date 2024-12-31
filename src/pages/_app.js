

import { CartProvider } from "@/context/CartContext";
// import store from "@/store";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from "react-redux";



export default function App({ Component, pageProps }) {
  return (
   <>

<CartProvider>
{/* <Provider store={store}> */}

          <Component {...pageProps} />

      {/* </Provider> */}
      </CartProvider>
      </>
  );
}
