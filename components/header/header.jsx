import { ArrowDownIcon } from "./icons/arrow-down.jsx";
import { Profile } from "../profile";
import { LogoIcon } from "./icons/logo.jsx";
import { UiButton } from "../uikit/ui-button.jsx";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <LogoIcon />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" variant={"primary"} size={"lg"} >
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="Alexander" rating='1300'/>
        <ArrowDownIcon />
      </button>
    </header>
  );
}
