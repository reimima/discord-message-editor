import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <div className='h-screen flex'>
            <div className='flex-1 overflow-auto p-8 bg-[#2B2D31]'>

                <div className='flex bg-[#1E1F22] p-4'>
                    <div className='flex justify-between w-full items-center'>
                        <h1 className='font-bold text-2xl text-white'>Discord Message Editor</h1>

                        <a
                            href='https://github.com/reimima/react-weather-app'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                className='h-[2em] w-[2em] hover:opacity-80'
                                src='/GitHub_Invertocat_White.svg'
                                alt='Github repository'
                            />
                        </a>
                    </div>
                </div>

                

            </div>

            <div className='flex-1 overflow-auto bg-[#313338]'>

            </div>
        </div>
    </StrictMode>,
);

