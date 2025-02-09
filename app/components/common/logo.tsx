import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link
        href="/"
        className="text-base md:text-xl capitalize main-text"
      >
        <span className="font-bold">{"basel Diab"}</span>
        {/* <span className="font-bold">{"iab"}</span> */}
      </Link>
    </>
  );
}
