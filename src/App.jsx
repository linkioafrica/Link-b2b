// import { BsDroplet } from "react-icons/bs";
import { Button } from "./components/button/Button";
import { Converter } from "./components/converter/Converter";

const App = () => {
  return (
    <div>
      <Button
        text="Droplet"
        textSize="text-lg"
        bgColor="bg-secondary"
        ringColor="ring-green-300"
        // icon={<BsDroplet />}
        paddingX="px-14"
      />
      <Converter width="max-w-md" />
    </div>
  );
};

export default App;
