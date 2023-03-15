import Button from "./Button/Button";

export default function Header() {
  return (
    <header className="bg-white h-[48px] w-screen sticky top-0 md:h-[64px]">
      <div className="flex flex-row items-center justify-between w-full h-full pl-[24px] pr-[8px] shadow-md py-[4px] md:py-[8px]">
        <h1 className="font-bold text-2xl">Busition</h1>
        <div className="h-full flex flex-row items-center gap-[16px]">
          <div className="hidden md:flex">
            <Button text="Contact sales" />
          </div>
          <Button text="Get started" primary={true} />
        </div>
      </div>
    </header>
  );
}
