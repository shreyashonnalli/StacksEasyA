import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/logo.png";

export default function NavBar() {
  return (
    <div className="w-full flex justify-between-items-center border b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div>
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Logo"
            Layout="responsive"
            height={50}
            width={50}
          />
        </div>
      </Link>
    </div>
  );
}
