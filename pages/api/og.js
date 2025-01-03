import { ImageResponse } from '@vercel/og';
import getConfig from 'next/config';
import fs from 'fs';
import path from 'path';
export const config = {
  runtime: 'edge',
};

export default async function handler(req, res) {
  // 1. 解析 URL，取得 query string 中的參數
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || '@Flexolk';
  const description = searchParams.get('description') || '預設描述';
  const image = `${process.env.NEXT_PUBLIC_BASE_URL}/images/commissions/ysu_1.jpg`;

  const fontData = await fetch(
    new URL('../../public/fonts/Oswald-Bold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());


  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#9ceaf8',
          color: '#000000',
          fontSize: 48,
          padding: '50px',
          textAlign: 'center',
        }}
      >
        {/* 圖片 */}
        <img
          src={image}
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '48px',
          }}
          alt="og image"
        />

        {/* 標題 */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            marginBottom: '0px',
            maxWidth: '800px',
          }}
        >
          {title}
        </div>

        {/* 描述 */}
        <div
          style={{
            fontSize: 40,
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Oswald",
          data: fontData,
          style: "normal",
          weight: 400,
        },
        // {
        //   name: "Regular",
        //   data: fontData2,
        //   style: "normal",
        // },
      ],
    },
  );
}