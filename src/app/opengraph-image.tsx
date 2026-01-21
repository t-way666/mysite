import { ImageResponse } from 'next/og';
 

 
// Image metadata
export const alt = 'Ibodullo Ismatov - Frontend Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617', // Dark background from theme
          position: 'relative',
        }}
      >
        {/* Neon Glow Background */}
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                backgroundImage: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(2, 6, 23, 0) 70%)', // Blue accent glow
                borderRadius: '50%',
            }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
            <h1
                style={{
                    fontSize: 80,
                    fontWeight: 900,
                    color: 'white',
                    marginBottom: 20,
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                Ibodullo Ismatov
            </h1>
            <div
                style={{
                    fontSize: 40,
                    color: '#94a3b8', // Slate-400
                    fontFamily: 'sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <span style={{ color: '#2563eb', marginRight: 15 }}>&lt;/&gt;</span>
                Frontend Developer
            </div>
        </div>

        {/* Bottom Decoration */}
        <div style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#475569',
            fontFamily: 'sans-serif',
        }}>
            t-way666.github.io/mysite
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
