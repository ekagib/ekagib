import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div>
          <p className='mb-6 text-xl'>Hi, I&apos;m Eka, also known as Gibran</p>
          <p>This is My personal website LOL</p>
        </div>
      </div>
      <div className=''>
        <p>Play around with these apps:</p>
        <div className='flex flex-row items-center'>
          <a
            href='https://wordpong.ekagib.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Word pong</p>
          </a>
        </div>
      </div>
    </main>
  );
}
