import { ImageResponse } from 'next/server';
 
export const size = {
  width: 400,
  height: 400,
};
export const contentType = 'image/png';
export const runtime = 'edge';
import logo from './assets/TO.png'
import Image from 'next/image';

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 44,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          
        }}
      >
         <Image src={logo.src} width={1800} height={1800} alt="Teddy Oweh Logo" />
      </div>
    ),
    size,
  );
}