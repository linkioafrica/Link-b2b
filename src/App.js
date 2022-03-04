import { BsDroplet } from "react-icons/bs";
import { Button } from "./components/button/Button";

const App = () => {
  return (
    <div>
      <Button
        text="Droplet"
        textSize="text-lg"
        bgColor="bg-secondary"
        ringColor="ring-green-300"
        icon={<BsDroplet />}
        paddingX="px-12"
      />
    </div>
  );
};

export default App;
