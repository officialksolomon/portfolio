
import Image from 'next/image'

export default function PicsFrame({name, role}) {
  return (
    <div className='frame d-flex flex-column justify-content-center align-items-center p-4 mt-5'>
      <Image
      src="/hero_img.png"
      alt="Picture of the author"
      width={250}
      height={300}
    />
    
        <p className="bg-light p-2 pt-1 pb-1  m-2 mb-0 text-dark fw-bold text-center align-self-end d-none d-sm-block">{ name}</p>
      <p className="m-2 mt-0  align-self-end d-none d-sm-block">{ role }</p>
    
    </div>
  );
}
