import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Shop } from "./layout/Shop";
import { ContextProvider } from "./logic/context";

function App() {
  return (    
      <div className="App">
        <Header />
        <ContextProvider>
          <Shop />
        </ContextProvider>
        <Footer />
      </div>
     
  );
}

export default App;
