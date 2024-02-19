import Dropup from "@/components/ui/general/dropup";
import ToggleList from "./toggle-list";
const FloatCart = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div className="flex">
        <Dropup />
        <ToggleList/>
      </div>
    </div>
  );
};

export default FloatCart;
