import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Hero = ({ children, back }) => {
  return (
    <section
      className={`relative z-0 mx-auto mt-20 flex h-[60dvh] items-center bg-white px-4 pt-12 xl:container dark:bg-[#15202b] sm:px-12`}
    >
      {back && (
        <Link
          href={"/"}
          className="group fixed top-36 inline-flex items-center gap-2"
        >
          <ArrowLeftIcon
            className="size-5 text-gray-800 transition-transform group-hover:-translate-x-1 dark:text-white"
            aria-label="hidden"
          />
          back
        </Link>
      )}
      <span className="fixed text-[min(7vw,1.85rem)] font-light leading-relaxed tracking-widest sm:text-4xl sm:leading-relaxed md:text-5xl md:leading-relaxed">
        {children}
      </span>
    </section>
  );
};

export default Hero;
// import { ArrowLeftIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import React from "react";

// const Hero = ({ children, back }) => {
//   return (
//     <section
//       className={`fixed inset-x-0 top-0 -z-10 mx-auto mt-5 flex h-[60dvh] items-center bg-white px-4 pt-12 xl:container dark:bg-[#15202b] sm:px-12`}
//     >
//       {back && (
//         <Link
//           href={"/"}
//           className="group absolute top-28 inline-flex items-center gap-2"
//         >
//           <ArrowLeftIcon
//             className="size-5 text-gray-800 transition-transform group-hover:-translate-x-1 dark:text-white"
//             aria-label="hidden"
//           />
//           back
//         </Link>
//       )}
//       <span className="text-[min(7vw,1.85rem)] font-light leading-relaxed tracking-widest sm:text-4xl sm:leading-relaxed md:text-5xl md:leading-relaxed">
//         {children}
//       </span>
//     </section>
//   );
// };

// export default Hero;
