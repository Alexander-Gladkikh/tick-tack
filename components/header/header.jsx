import Image from "next/image";
import logoSrc from "./logo.svg";
import avatarSrc from "./avatar.png";
import arrowSrc from "./arrow.svg";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="Лого" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tight ">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors">
        <Image
          src={avatarSrc}
          width={48}
          height={48}
          alt="Аватар"
          unoptimized
        />
        <div>
          <div className="text-lg leading-tight">
            GladkikAlexander
          </div>
          <div className="text-slate-400 text-xs leading-tight">
            Рейтинг: 123
          </div>
        </div>
        <Image src={arrowSrc} alt="Стрелка" />
      </button>
    </header>
  );
}
