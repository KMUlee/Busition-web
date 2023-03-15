interface buttonProps {
  text: string;
  primary?: boolean;
}

export default function Button({ text, primary = false }: buttonProps) {
  return (
    <div
      className={`flex flex-row items-center px-[24px] py-[8px] md:py-[12px] bg-${
        primary ? "blue-500" : "white"
      } rounded cursor-pointer border-[1px] ${
        primary ? "" : "border-gray-300"
      }`}
    >
      <h3 className={`${primary ? "text-white" : "text-blue-500"}`}>{text}</h3>
    </div>
  );
}
