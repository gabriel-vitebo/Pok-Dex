import { IconHearth } from "./IconHearth";
import { IconArrowLeft } from "./IconArrowLeft";

export function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0 flex justify-between m-4 z-10 items-start">
        <button className="top-0 left-0">
          <IconArrowLeft />
        </button>
        <button className="top-0 right-0">
          <IconHearth />
        </button>
      </div>
      <div className="w-full relative">
        <div className="bg-green rounded-b-full flex justify-center">
          <img src="https://github.com/gabriel-vitebo.png" alt="" className="w-imageDetails h-imageDetails px-4 object-fill relative top-12" />
        </div>
      </div>
    </header>
  )
}