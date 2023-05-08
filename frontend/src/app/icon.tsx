import { ImageResponse } from 'next/server';
 
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
export const runtime = 'edge';
import logo from './assets/TO.png'

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
         <img src={logo.src} alt="Teddy Oweh Logo" />
      </div>
    ),
    size,
  );
}