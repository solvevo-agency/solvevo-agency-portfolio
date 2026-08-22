import Link from "next/link";
import Image from "next/image";
import solvevo from "../../../public/images/solvevo.jpg";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center font-sans text-2xl font-bold tracking-tight"
    >
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg mt-1">
        <Image
          src={solvevo}
          alt="Solvevo Logo"
          width={36}
          height={36}
          className="object-contain animate-plus"
        />
      </div>
      <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent dark:to-indigo-400">
        solvevo
      </span>
    </Link>
  );
}
