import Image from "next/image";
import SmiLogo from "@public/assets/smi-logo.png";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between pt-8 px-8">
      <Image src={SmiLogo} alt="SMI Logo" width={150} height={46} />
      <h1 className="text-5xl font-extrabold text-smiOrange">Usuários</h1>
    </div>
  );
}
