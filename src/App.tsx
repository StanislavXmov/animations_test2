import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { Cart } from "./components/Cart";
import { Drag } from "./components/Drag";
import { Fade } from "./components/Fade";
import { Icons } from "./components/Icons";

export const App = () => {

  return (
    <div className="flex justify-center items-center flex-col my-9 gap-16">
      {/* <Icons />
      <Button title="Button"/>
      <Banner />
      <Cart />
      <Drag /> */}
      <Fade />
    </div>
  );
}
