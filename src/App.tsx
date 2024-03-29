import { BrowserRouter } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { Cart } from "./components/Cart";
import { Drag } from "./components/Drag";
import { Fade } from "./components/Fade";
import Header from "./components/Header";
import { Icons } from "./components/Icons";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Navigation } from "./components/Navigation";
import { Scale } from "./components/Scale";
import { Counter } from "./components/Counter";

export const App = () => {

  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <div className="flex justify-center items-center flex-col pt-32 gap-16">
          <Navigation />
          <Modal />
          <Icons />
          <Button title="Button"/>
          <Banner />
          <Cart />
          <Drag />
          <Fade />
          <Scale />
          <Loader />
          <Counter />
        </div>
      </div>
    </BrowserRouter>
  );
}
