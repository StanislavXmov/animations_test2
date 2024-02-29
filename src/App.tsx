import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { Cart } from "./components/Cart";
import { Drag } from "./components/Drag";
import { Fade } from "./components/Fade";
import Header from "./components/Header";
import { Icons } from "./components/Icons";

export const App = () => {

  return (
    <div className="relative">
      <Header />
      <div className="flex justify-center items-center flex-col pt-32 gap-16">
        <Icons />
        <Button title="Button"/>
        <Banner />
        <Cart />
        <Drag />
        <Fade />
      </div>
    </div>
  );
}
