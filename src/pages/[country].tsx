import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import Card from '../components/shared/Card';

function Country({ data }) {
  const countryInfo = [
    { property: 'Native Name: ', value: data.nativeName },
    { property: 'Population: ', value: data.population },
    { property: 'Region: ', value: data.region },
    { property: 'Sub Region: ', value: data.subregion },
    { property: 'Capital: ', value: data.capital },
    { property: 'Top Level Domain: ', value: data.topLevelDomain[0] },
    {
      property: 'Currencies: ',
      value: data.currencies.map((currency) => currency.name).join(', '),
    },
    {
      property: 'Languages: ',
      value: data.languages.map((language) => language.name).join(', '),
    },
  ];
  return (
    <div className='dark:bg-[#202C37] bg-[#FAFAFA] min-h-[calc(100vh-5rem)] max-w-screen'>
      <div className='py-8 md:px-14 sm:px-9 px-4 lg:px-24'>
        <Card className='px-6 py-2 flex justify-center items-start w-fit -ml-2 cursor-pointer'>
          <HiArrowNarrowLeft className='text-2xl mr-4' />
          Back
        </Card>
      </div>
      <div className='flex justify-between items-start flex-col md:flex-row md:px-14 sm:px-9 px-4 lg:px-24'>
        <div className='md:w-[40%] md:h-[20rem] '>
          <Image
            src={data.flags.png}
            alt={`The flag of ${data.name}`}
            layout='responsive'
            width='320px'
            height='213px'
            quality={100}
          />
        </div>
        <div className='flex flex-col justify-between items-start md:w-[50%] md:h-[14rem]  my-auto'>
          <div className='font-extrabold text-3xl py-6'>{data.name}</div>
          <ul className='flex flex-col   justify-start items-start flex-wrap w-full md:h-[10rem] '>
            {/* <li>
              <span className='font-bold'>Native Name: </span> {data.nativeName}
            </li> */}
            {countryInfo.map((info) => (
              <li key={info.property} className='py-1'>
                <span className='font-bold'>{info.property}</span> {info.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await (
    await fetch(`https://restcountries.com/v2/name/${context.query.country}`)
  ).json();
  // const randomNumber = Math.floor(Math.random() * 241);

  return {
    props: { data: data[0] }, // will be passed to the page component as props
  };
};

export default Country;
