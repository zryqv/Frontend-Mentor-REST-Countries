import Card from './shared/Card';
import Image from 'next/image';
import { useRouter } from 'next/router';
function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}) {
  const router = useRouter();
  return (
    <>
      <Card className='w-[18rem] h-[20.5rem]'>
        <div className='w-full h-1/2  overflow-hidden'>
          <Image
            onClick={() => router.push(`/${name}`)}
            className='rounded-t-[0.2rem] cursor-pointer'
            src={flag}
            alt={`The flag of ${name}`}
            layout='responsive'
            width='320px'
            height='213px'
            quality={100}
          />
          {/* <img
            src={flag}
            alt={`The flag of ${name}`}
            className="rounded-t-[0.25rem] "
          /> */}
        </div>
        <div className='px-4 flex justify-center items-start flex-col h-1/2 w-full'>
          <div
            className='-mt-3 pb-4 text-xl font-[800] cursor-pointer'
            onClick={() => router.push(`/${name}`)}
          >
            {name}
          </div>
          <div className=''>
            <div className='text-xs tracking-wider font-[300]'>
              <span className='capitalize font-[600] text-sm'>
                population:{' '}
              </span>
              {population.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </div>
            <div className='text-xs tracking-wider font-[300]'>
              <span className='capitalize font-[600] text-sm'>Region: </span>
              {region}
            </div>
            <div className='text-xs tracking-wider font-[300]'>
              <span className='capitalize font-[600] text-sm'>Capital: </span>
              {capital}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
export default CountryCard;
