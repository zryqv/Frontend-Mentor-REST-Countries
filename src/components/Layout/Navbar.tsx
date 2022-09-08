import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { useRouter } from "next/router";
function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const router = useRouter();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="dark:bg-[#2B3945] bg-[#FFFFFF]  flex justify-between items-center md:px-14 sm:px-9 px-4 lg:px-24 h-[5rem] drop-shadow-lg w-full">
      <div
        className="font-extrabold text-xl dark:text-[#FFFFFF] text-[#111517] cursor-pointer"
        onClick={() => router.push("/")}
      >
        Where in the world?
      </div>
      <div className="cursor-pointer">
        {theme === "system" ? (
          resolvedTheme === "light" ? (
            <div
              className="flex justify-center items-center capitalize font-[600] dark:text-[#FFFFFF] text-[#111517] text-sm "
              onClick={() => setTheme("dark")}
            >
              <HiMoon className="mr-2 text-lg" />
              Dark mode
            </div>
          ) : (
            <div
              className="flex justify-center items-center capitalize font-[600] dark:text-[#FFFFFF] text-[#111517] text-sm  "
              onClick={() => setTheme("light")}
            >
              <HiSun className="mr-2 text-lg" /> Light mode
            </div>
          )
        ) : theme === "light" ? (
          <div
            className="flex justify-center items-center capitalize font-[600] dark:text-[#FFFFFF] text-[#111517] text-sm "
            onClick={() => setTheme("dark")}
          >
            <HiMoon className="mr-2 text-lg" /> Dark mode
          </div>
        ) : (
          <div
            className="flex justify-center items-center capitalize font-[600] dark:text-[#FFFFFF] text-[#111517] text-sm "
            onClick={() => setTheme("light")}
          >
            <HiSun className="mr-2 text-lg" /> Light mode
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
