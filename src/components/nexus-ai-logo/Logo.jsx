import { RiSparkling2Fill } from "../../assets/icons/index.js";

function Logo() {
  return (
    <div className="flex items-center cursor-pointer gap-2 p-4">
      <RiSparkling2Fill className="text-primary" />
      <span>Nexus-AI</span>
    </div>
  );
}

export default Logo;
