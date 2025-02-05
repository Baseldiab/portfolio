import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="text-base md:text-xl  uppercase">
        <span className="!underline underline-offset-2 text-3xl font-extrabold text-gradient hover:!scale-150">
          {"b"}
        </span>
        <span className="font-bold">{"asel "}</span>
        <span className="font-bold">{"Diab"}</span>
        {/* <span className="font-bold">{"iab"}</span> */}
      </Link>
    </>
  );
}
