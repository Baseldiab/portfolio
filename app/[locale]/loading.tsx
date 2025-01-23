// // import Image from "next/image";
// // import loadImg from "@/public/images/loading.gif";

// import TypingLoader from "@/app/components/loading/typing";

// export default async function Loading() {
//   return (
//     <main className="flex justify-center items-center h-screen bg-theme-background-main dark:bg-theme-background-dark">
//       {/* <Image
//         className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
//         src={loadImg}
//         alt="loading..."
//         width={50}
//       /> */}

//       <TypingLoader />
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import TypingLoader from "@/app/components/loading/typing";

export default function Loading() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    if (hasLoaded) {
      setIsFirstLoad(false);
    } else {
      sessionStorage.setItem("hasLoadedBefore", "true");
      // Force the loading state to stay for 2 seconds
      setTimeout(() => {
        setIsFirstLoad(false);
      }, 2000);
    }
  }, []);

  if (!isFirstLoad) {
    return null;
  }

  return (
    <main className="flex justify-center items-center h-screen bg-theme-background-main dark:bg-theme-background-dark">
      <TypingLoader />
    </main>
  );
}
