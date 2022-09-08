import { GetServerSideProps } from "next";
import Image from "next/image";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Card from "../components/shared/Card";
import { useRouter } from "next/router";
function Country({ data, countries }) {
  const router = useRouter();
  const countryInfo = [
    { property: "Native Name: ", value: data.nativeName },
    {
      property: "Population: ",
      value: data.population.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      }),
    },
    { property: "Region: ", value: data.region },
    { property: "Sub Region: ", value: data.subregion },
    { property: "Capital: ", value: data.capital },
    { property: "Top Level Domain: ", value: data.topLevelDomain[0] },
    {
      property: "Currencies: ",
      value: data.currencies.map((currency) => currency.name).join(", "),
    },
    {
      property: "Languages: ",
      value: data.languages.map((language) => language.name).join(", "),
    },
  ];
  return (
    <div className="dark:bg-[#202C37] bg-[#FAFAFA] min-h-[calc(100vh-5rem)] max-w-screen">
      <div className="py-8 md:px-14 sm:px-9 px-4 lg:px-24 ">
        <Card className="px-6 py-2 flex justify-center items-start w-fit -ml-2 cursor-pointer">
          <HiArrowNarrowLeft className="text-2xl mr-4" />
          Back
        </Card>
      </div>
      <div className="h-fit flex   justify-between items-start flex-col md:flex-row md:px-14 sm:px-9 px-4 lg:px-24 ">
        <div className="md:w-[40%] md:min-h-[14rem] my-auto">
          <Image
            src={data.flags.png}
            alt={`The flag of ${data.name}`}
            layout="responsive"
            width="320px"
            height="213px"
            quality={100}
          />
        </div>
        <div className="flex flex-col  justify-between items-start min-w-[50%] md:min-h-[14rem]  my-auto pl-10 xl:pl-0">
          <div className="font-extrabold text-3xl py-6">{data.name}</div>
          <ul className="flex flex-col  justify-start items-start flex-wrap w-full  md:h-fit lg:h-[10rem] ">
            {countryInfo.map((info) => (
              <li key={info.property} className="py-1">
                <span className="font-bold">{info.property}</span> {info.value}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-start w-full ">
            <div className="font-bold capitalize ">Border countries:</div>
            <ul className="flex items-center justify-start  flex-wrap max-w-full pl-1">
              {data.borders?.map((borderCountry) => {
                const borderCountryName = countries.find(
                  (country) => country.code === borderCountry
                )?.name;
                if (!borderCountryName) return;
                return (
                  <li key={borderCountry} className="capitalize">
                    <Card
                      className="cursor-pointer px-6 py-1 mx-2 my-1 border-2 "
                      onClick={() => router.push(`/${borderCountryName}`)}
                    >
                      {borderCountryName}
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const countries = [
    {
      name: "finland",
      code: "FIN",
    },
    {
      name: "guatemala",
      code: "GTM",
    },
    {
      name: "chile",
      code: "CHL",
    },
    {
      name: "uruguay",
      code: "URY",
    },
    {
      name: "kyrgyzstan",
      code: "KGZ",
    },
    {
      name: "zambia",
      code: "ZMB",
    },
    {
      name: "niue",
      code: "NIU",
    },
    {
      name: "austria",
      code: "AUT",
    },
    {
      name: "georgia",
      code: "GEO",
    },
    {
      name: "trinidad and tobago",
      code: "TTO",
    },
    {
      name: "south korea",
      code: "KOR",
    },
    {
      name: "united states minor outlying islands",
      code: "UMI",
    },
    {
      name: "french guiana",
      code: "GUF",
    },
    {
      name: "mali",
      code: "MLI",
    },
    {
      name: "north macedonia",
      code: "MKD",
    },
    {
      name: "fiji",
      code: "FJI",
    },
    {
      name: "madagascar",
      code: "MDG",
    },
    {
      name: "dominica",
      code: "DMA",
    },
    {
      name: "nauru",
      code: "NRU",
    },
    {
      name: "costa rica",
      code: "CRI",
    },
    {
      name: "palau",
      code: "PLW",
    },
    {
      name: "algeria",
      code: "DZA",
    },
    {
      name: "nicaragua",
      code: "NIC",
    },
    {
      name: "zimbabwe",
      code: "ZWE",
    },
    {
      name: "rwanda",
      code: "RWA",
    },
    {
      name: "turkey",
      code: "TUR",
    },
    {
      name: "monaco",
      code: "MCO",
    },
    {
      name: "tajikistan",
      code: "TJK",
    },
    {
      name: "cocos (keeling) islands",
      code: "CCK",
    },
    {
      name: "jamaica",
      code: "JAM",
    },
    {
      name: "latvia",
      code: "LVA",
    },
    {
      name: "saint helena, ascension and tristan da cunha",
      code: "SHN",
    },
    {
      name: "aruba",
      code: "ABW",
    },
    {
      name: "pakistan",
      code: "PAK",
    },
    {
      name: "belarus",
      code: "BLR",
    },
    {
      name: "solomon islands",
      code: "SLB",
    },
    {
      name: "eswatini",
      code: "SWZ",
    },
    {
      name: "new caledonia",
      code: "NCL",
    },
    {
      name: "mexico",
      code: "MEX",
    },
    {
      name: "guernsey",
      code: "GGY",
    },
    {
      name: "liechtenstein",
      code: "LIE",
    },
    {
      name: "botswana",
      code: "BWA",
    },
    {
      name: "saint vincent and the grenadines",
      code: "VCT",
    },
    {
      name: "åland islands",
      code: "ALA",
    },
    {
      name: "israel",
      code: "ISR",
    },
    {
      name: "guinea",
      code: "GIN",
    },
    {
      name: "north korea",
      code: "PRK",
    },
    {
      name: "philippines",
      code: "PHL",
    },
    {
      name: "guadeloupe",
      code: "GLP",
    },
    {
      name: "tunisia",
      code: "TUN",
    },
    {
      name: "central african republic",
      code: "CAF",
    },
    {
      name: "nigeria",
      code: "NGA",
    },
    {
      name: "greece",
      code: "GRC",
    },
    {
      name: "jersey",
      code: "JEY",
    },
    {
      name: "palestine",
      code: "PSE",
    },
    {
      name: "ivory coast",
      code: "CIV",
    },
    {
      name: "northern mariana islands",
      code: "MNP",
    },
    {
      name: "comoros",
      code: "COM",
    },
    {
      name: "togo",
      code: "TGO",
    },
    {
      name: "lesotho",
      code: "LSO",
    },
    {
      name: "united states virgin islands",
      code: "VIR",
    },
    {
      name: "saint kitts and nevis",
      code: "KNA",
    },
    {
      name: "marshall islands",
      code: "MHL",
    },
    {
      name: "equatorial guinea",
      code: "GNQ",
    },
    {
      name: "indonesia",
      code: "IDN",
    },
    {
      name: "canada",
      code: "CAN",
    },
    {
      name: "armenia",
      code: "ARM",
    },
    {
      name: "falkland islands",
      code: "FLK",
    },
    {
      name: "panama",
      code: "PAN",
    },
    {
      name: "guam",
      code: "GUM",
    },
    {
      name: "egypt",
      code: "EGY",
    },
    {
      name: "malta",
      code: "MLT",
    },
    {
      name: "laos",
      code: "LAO",
    },
    {
      name: "azerbaijan",
      code: "AZE",
    },
    {
      name: "turks and caicos islands",
      code: "TCA",
    },
    {
      name: "saint lucia",
      code: "LCA",
    },
    {
      name: "cambodia",
      code: "KHM",
    },
    {
      name: "tokelau",
      code: "TKL",
    },
    {
      name: "cuba",
      code: "CUB",
    },
    {
      name: "são tomé and príncipe",
      code: "STP",
    },
    {
      name: "antigua and barbuda",
      code: "ATG",
    },
    {
      name: "grenada",
      code: "GRD",
    },
    {
      name: "serbia",
      code: "SRB",
    },
    {
      name: "chad",
      code: "TCD",
    },
    {
      name: "vietnam",
      code: "VNM",
    },
    {
      name: "sri lanka",
      code: "LKA",
    },

    {
      name: "burkina faso",
      code: "BFA",
    },
    {
      name: "ireland",
      code: "IRL",
    },
    {
      name: "martinique",
      code: "MTQ",
    },
    {
      name: "qatar",
      code: "QAT",
    },
    {
      name: "sierra leone",
      code: "SLE",
    },
    {
      name: "slovakia",
      code: "SVK",
    },
    {
      name: "montenegro",
      code: "MNE",
    },
    {
      name: "iceland",
      code: "ISL",
    },
    {
      name: "gambia",
      code: "GMB",
    },
    {
      name: "guyana",
      code: "GUY",
    },
    {
      name: "morocco",
      code: "MAR",
    },
    {
      name: "sint maarten",
      code: "SXM",
    },
    {
      name: "sweden",
      code: "SWE",
    },
    {
      name: "tuvalu",
      code: "TUV",
    },
    {
      name: "united arab emirates",
      code: "ARE",
    },
    {
      name: "venezuela",
      code: "VEN",
    },
    {
      name: "samoa",
      code: "WSM",
    },
    {
      name: "lebanon",
      code: "LBN",
    },
    {
      name: "benin",
      code: "BEN",
    },
    {
      name: "united states",
      code: "USA",
    },
    {
      name: "tonga",
      code: "TON",
    },
    {
      name: "curaçao",
      code: "CUW",
    },
    {
      name: "isle of man",
      code: "IMN",
    },
    {
      name: "bosnia and herzegovina",
      code: "BIH",
    },
    {
      name: "haiti",
      code: "HTI",
    },
    {
      name: "seychelles",
      code: "SYC",
    },
    {
      name: "tanzania",
      code: "TZA",
    },
    {
      name: "faroe islands",
      code: "FRO",
    },
    {
      name: "eritrea",
      code: "ERI",
    },
    {
      name: "ethiopia",
      code: "ETH",
    },
    {
      name: "norfolk island",
      code: "NFK",
    },
    {
      name: "mongolia",
      code: "MNG",
    },
    {
      name: "germany",
      code: "DEU",
    },
    {
      name: "vatican city",
      code: "VAT",
    },
    {
      name: "cameroon",
      code: "CMR",
    },
    {
      name: "nepal",
      code: "NPL",
    },
    {
      name: "south africa",
      code: "ZAF",
    },
    {
      name: "syria",
      code: "SYR",
    },
    {
      name: "san marino",
      code: "SMR",
    },
    {
      name: "brunei",
      code: "BRN",
    },
    {
      name: "italy",
      code: "ITA",
    },
    {
      name: "south sudan",
      code: "SSD",
    },
    {
      name: "portugal",
      code: "PRT",
    },
    {
      name: "iraq",
      code: "IRQ",
    },
    {
      name: "mayotte",
      code: "MYT",
    },
    {
      name: "luxembourg",
      code: "LUX",
    },
    {
      name: "saint martin",
      code: "MAF",
    },
    {
      name: "albania",
      code: "ALB",
    },
    {
      name: "uganda",
      code: "UGA",
    },
    {
      name: "bhutan",
      code: "BTN",
    },
    {
      name: "wallis and futuna",
      code: "WLF",
    },
    {
      name: "namibia",
      code: "NAM",
    },
    {
      name: "réunion",
      code: "REU",
    },
    {
      name: "spain",
      code: "ESP",
    },
    {
      name: "oman",
      code: "OMN",
    },
    {
      name: "bangladesh",
      code: "BGD",
    },
    {
      name: "djibouti",
      code: "DJI",
    },
    {
      name: "taiwan",
      code: "TWN",
    },
    {
      name: "mauritius",
      code: "MUS",
    },
    {
      name: "svalbard and jan mayen",
      code: "SJM",
    },
    {
      name: "thailand",
      code: "THA",
    },
    {
      name: "honduras",
      code: "HND",
    },
    {
      name: "paraguay",
      code: "PRY",
    },
    {
      name: "liberia",
      code: "LBR",
    },
    {
      name: "slovenia",
      code: "SVN",
    },
    {
      name: "somalia",
      code: "SOM",
    },
    {
      name: "gibraltar",
      code: "GIB",
    },
    {
      name: "new zealand",
      code: "NZL",
    },
    {
      name: "british virgin islands",
      code: "VGB",
    },
    {
      name: "bahamas",
      code: "BHS",
    },
    {
      name: "malawi",
      code: "MWI",
    },
    {
      name: "saudi arabia",
      code: "SAU",
    },
    {
      name: "guinea-bissau",
      code: "GNB",
    },
    {
      name: "ecuador",
      code: "ECU",
    },
    {
      name: "timor-leste",
      code: "TLS",
    },
    {
      name: "switzerland",
      code: "CHE",
    },
    {
      name: "libya",
      code: "LBY",
    },
    {
      name: "senegal",
      code: "SEN",
    },
    {
      name: "bolivia",
      code: "BOL",
    },
    {
      name: "australia",
      code: "AUS",
    },
    {
      name: "papua new guinea",
      code: "PNG",
    },
    {
      name: "barbados",
      code: "BRB",
    },
    {
      name: "republic of the congo",
      code: "COG",
    },
    {
      name: "kosovo",
      code: "UNK",
    },
    {
      name: "french polynesia",
      code: "PYF",
    },
    {
      name: "lithuania",
      code: "LTU",
    },
    {
      name: "bulgaria",
      code: "BGR",
    },
    {
      name: "sudan",
      code: "SDN",
    },
    {
      name: "saint barthélemy",
      code: "BLM",
    },
    {
      name: "turkmenistan",
      code: "TKM",
    },
    {
      name: "myanmar",
      code: "MMR",
    },
    {
      name: "brazil",
      code: "BRA",
    },
    {
      name: "colombia",
      code: "COL",
    },
    {
      name: "heard island and mcdonald islands",
      code: "HMD",
    },
    {
      name: "iran",
      code: "IRN",
    },
    {
      name: "moldova",
      code: "MDA",
    },
    {
      name: "montserrat",
      code: "MSR",
    },
    {
      name: "denmark",
      code: "DNK",
    },
    {
      name: "macau",
      code: "MAC",
    },
    {
      name: "norway",
      code: "NOR",
    },
    {
      name: "cape verde",
      code: "CPV",
    },
    {
      name: "japan",
      code: "JPN",
    },
    {
      name: "bahrain",
      code: "BHR",
    },
    {
      name: "cyprus",
      code: "CYP",
    },
    {
      name: "gabon",
      code: "GAB",
    },
    {
      name: "niger",
      code: "NER",
    },
    {
      name: "cook islands",
      code: "COK",
    },
    {
      name: "maldives",
      code: "MDV",
    },
    {
      name: "andorra",
      code: "AND",
    },
    {
      name: "dominican republic",
      code: "DOM",
    },
    {
      name: "singapore",
      code: "SGP",
    },
    {
      name: "dr congo",
      code: "COD",
    },
    {
      name: "south georgia",
      code: "SGS",
    },
    {
      name: "bouvet island",
      code: "BVT",
    },
    {
      name: "el salvador",
      code: "SLV",
    },
    {
      name: "yemen",
      code: "YEM",
    },
    {
      name: "ukraine",
      code: "UKR",
    },
    {
      name: "france",
      code: "FRA",
    },
    {
      name: "china",
      code: "CHN",
    },
    {
      name: "peru",
      code: "PER",
    },
    {
      name: "saint pierre and miquelon",
      code: "SPM",
    },
    {
      name: "suriname",
      code: "SUR",
    },
    {
      name: "pitcairn islands",
      code: "PCN",
    },
    {
      name: "afghanistan",
      code: "AFG",
    },
    {
      name: "hungary",
      code: "HUN",
    },
    {
      name: "united kingdom",
      code: "GBR",
    },
    {
      name: "mauritania",
      code: "MRT",
    },
    {
      name: "american samoa",
      code: "ASM",
    },
    {
      name: "estonia",
      code: "EST",
    },
    {
      name: "kuwait",
      code: "KWT",
    },
    {
      name: "french southern and antarctic lands",
      code: "ATF",
    },
    {
      name: "india",
      code: "IND",
    },
    {
      name: "netherlands",
      code: "NLD",
    },
    {
      name: "jordan",
      code: "JOR",
    },
    {
      name: "caribbean netherlands",
      code: "BES",
    },
    {
      name: "cayman islands",
      code: "CYM",
    },
    {
      name: "malaysia",
      code: "MYS",
    },
    {
      name: "ghana",
      code: "GHA",
    },
    {
      name: "puerto rico",
      code: "PRI",
    },
    {
      name: "croatia",
      code: "HRV",
    },
    {
      name: "czechia",
      code: "CZE",
    },
    {
      name: "uzbekistan",
      code: "UZB",
    },
    {
      name: "burundi",
      code: "BDI",
    },
    {
      name: "british indian ocean territory",
      code: "IOT",
    },
    {
      name: "christmas island",
      code: "CXR",
    },
    {
      name: "belize",
      code: "BLZ",
    },
    {
      name: "kenya",
      code: "KEN",
    },
    {
      name: "antarctica",
      code: "ATA",
    },
    {
      name: "kazakhstan",
      code: "KAZ",
    },
    {
      name: "argentina",
      code: "ARG",
    },
    {
      name: "hong kong",
      code: "HKG",
    },
    {
      name: "micronesia",
      code: "FSM",
    },
    {
      name: "romania",
      code: "ROU",
    },
    {
      name: "kiribati",
      code: "KIR",
    },
    {
      name: "vanuatu",
      code: "VUT",
    },
    {
      name: "angola",
      code: "AGO",
    },
    {
      name: "anguilla",
      code: "AIA",
    },
    {
      name: "poland",
      code: "POL",
    },
    {
      name: "belgium",
      code: "BEL",
    },
    {
      name: "mozambique",
      code: "MOZ",
    },
    {
      name: "bermuda",
      code: "BMU",
    },
    {
      name: "russia",
      code: "RUS",
    },
    {
      name: "greenland",
      code: "GRL",
    },
  ];
  const countryName = context.query.country as string;
  const isCountry = countries.find(
    (country) => country.name === countryName.toLowerCase()
  );
  const code = isCountry?.code;
  if (!code) return { notFound: true };
  const data = await (
    await fetch(`https://restcountries.com/v2/alpha/${code}`)
  ).json();
  // const randomNumber = Math.floor(Math.random() * 241);

  return {
    props: { data: data, countries }, // will be passed to the page component as props
  };
};

export default Country;
