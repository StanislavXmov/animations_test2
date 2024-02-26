import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { Cart } from "./components/Cart";
import { Drag } from "./components/Drag";
import { Icons } from "./components/Icons";

export const App = () => {

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-16">
      <Icons />
      <Button title="Button"/>
      <Banner />
      <Cart />
      <Drag />
    </div>
  );
}
