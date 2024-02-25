import { Button } from "./components/Button";
import { Icons } from "./components/Icons";

export const App = () => {

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-16">
      <Icons />
      <Button title="Button"/>
    </div>
  );
}
