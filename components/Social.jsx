
import Image from 'next/image'

export default function Social() {
  return (
    <div className='social-wrapper w-25 icons-container d-flex justify-content-evenly align-items-center mb-5'>
      <Image
      className="img"
      src="/s1.png"
      alt="Picture of the author"
      width={20}
      height={20}
    />
      <Image
      src="/s2.png"
      alt="Picture of the author"
      width={20}
      height={20}
    />
      <Image
      src="/s3.png"
      alt="Picture of the author"
      width={20}
      height={20}
    />
      <Image
      src="/s4.png"
      alt="Picture of the author"
      width={20}
      height={20}
    />

    </div>
  );
}