import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Layout/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
