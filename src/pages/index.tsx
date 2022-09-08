import type { NextPage } from "next";
import Head from "next/head";
import CountryCard from "../components/CountryCard";
import { GetServerSideProps } from "next";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import FilterByRegion from "../components/FilterByRegion";
import Card from "../components/shared/Card";
import { useInView } from "react-intersection-observer";

const regions = ["africa", "americas", "asia", "europe", "oceania"];
const Home: NextPage = ({ data, countries }) => {
  const [countriesAvailable, setCountriesAvailable] = useState(
    () => data || []
  );
  const [showCountries, setShowCountries] = useState(
    () => data.slice(0, 12) || []
  );
  const [search, setSearch] = useState("");
  const [filterByRegionMenu, setFilterByRegionMenu] = useState(false);
  const numberCountriesDisplayed = showCountries.length;
  const numberCountriesAvailable = countriesAvailable.length;
  const {
    ref: sentinelRef,
    inView: sentinelInView,
    entry: sentinelEntry,
  } = useInView({
    threshold: 0,
    skip: numberCountriesAvailable === numberCountriesDisplayed,
  });

  // useEffect controlling search
  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (search.length > 0)
        setCountriesAvailable(
          data.filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
        );
      else setCountriesAvailable(() => data || []);
    }, 500);

    return () => {
      clearTimeout(timer1);
    };
  }, [search]);

  useEffect(() => {
    setShowCountries(countriesAvailable.slice(0, 12));
  }, [countriesAvailable]);

  // useEffect controllig infinite scroll
  useEffect(() => {
    const numberCountriesDisplay = showCountries.length;
    if (sentinelInView) {
      console.log("im here", numberCountriesDisplay);
      setShowCountries(
        countriesAvailable.slice(0, numberCountriesDisplay + 13)
      );
    }
  }, [sentinelInView]);
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges | Countries</title>
        <meta
          name="description"
          content="Frontend Mentor Challenges : REST Countries API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full relative">
        <div
          style={{
            position: "absolute",
            bottom: "120vh",
          }}
          ref={sentinelRef}
        ></div>
        <div className="dark:bg-[#202C37] bg-[#FAFAFA] min-h-[calc(100vh-5rem)]  max-w-screen">
          <div className="md:px-14 sm:px-9 px-4 lg:px-24 flex sm:justify-between sm:items-center py-9 relative flex-col sm:flex-row justify-center items-start">
            <Search search={search} setSearch={setSearch} />
            <FilterByRegion
              className="mt-7 sm:mt-0"
              onClick={() => setFilterByRegionMenu(!filterByRegionMenu)}
              onMouseEnter={() => setFilterByRegionMenu(true)}
            />
            {filterByRegionMenu && (
              <Card
                className="absolute  lg:right-[6rem] md:right-[3.5rem] sm:right-[2.3rem]  w-52 top-[11.5rem] sm:top-[6rem] z-50 border-none  py-4 flex flex-col justify-center items-start"
                onMouseLeave={() => {
                  setTimeout(() => {
                    setFilterByRegionMenu(false);
                  }, 300);
                }}
              >
                <ul className="w-full">
                  {regions.map((region) => (
                    <li
                      key={region}
                      className="px-6 py-1 capitalize dark:hover:bg-white hover:bg-opacity-[0.02] dark:hover:bg-opacity-10 hover:bg-black cursor-pointer"
                      onClick={() => {
                        setShowCountries(
                          data.filter(
                            (country) => country.region.toLowerCase() === region
                          )
                        );
                        setFilterByRegionMenu(false);
                      }}
                    >
                      {region}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
          <div className="w-full flex justify-center sm:justify-between items-center flex-wrap md:px-14 sm:px-9 px-4 lg:px-24 ">
            {showCountries.map((country) => (
              <div className="pr-3 py-4" key={country.name.official}>
                <CountryCard
                  name={country.name.common}
                  capital={country.capital[0]}
                  population={+country.population}
                  flag={country.flags.png}
                  region={country.region}
                />
              </div>
            ))}
          </div>
          {numberCountriesDisplayed === 0 && (
            <div className="flex justify-center items-center pb-4 w-full md:px-14 sm:px-9 px-4 lg:px-24">
              <Card className="px-8 py-64 text-center w-full ">
                Sorry we couldn&apos;t find what you&apos;re looking for!
              </Card>
            </div>
          )}
          {numberCountriesAvailable === numberCountriesDisplayed &&
            numberCountriesDisplayed >= 12 && (
              <div className="flex justify-center items-center pb-4">
                <Card className="px-8 py-2 text-center">
                  {" "}
                  You&apos;ve reached the end!
                </Card>
              </div>
            )}
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const data = (
    await (
      await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca3"
      )
    ).json()
  ).filter((country) => country.cca3 !== "ESH" && country.cca3 !== "ISR");

  return {
    props: {
      data,
      countries: data.map((country) => {
        return {
          name: country.name.common.toLowerCase(),
          code: country.cca3,
        };
      }),
    }, // will be passed to the page component as props
  };
};

export default Home;
