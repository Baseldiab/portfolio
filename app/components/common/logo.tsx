import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="text-base md:text-xl capitalize text-gray-800 dark:text-gray-100">
    
        <span className="font-bold">{"basel Diab"}</span>
        {/* <span className="font-bold">{"iab"}</span> */}
      </Link>
    </>
  );
}
