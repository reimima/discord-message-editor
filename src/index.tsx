import { type ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function Card({ children }: { children: ReactNode }) {
    return <div className='flex bg-[#1E1F22] p-4 rounded-md'>{children}</div>;
}

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <div className='h-screen flex'>
            <div className='flex-1 overflow-auto p-6 bg-[#2B2D31] flex flex-col gap-4 text-white'>
                <Card>
                    <div className='flex justify-between w-full items-center'>
                        <h1 className='font-bold text-2xl'>Discord Message Editor</h1>

                        <a
                            href='https://github.com/reimima/discord-message-editor'
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
                </Card>

                <Card>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='flex flex-col w-full gap-3'>
                            <h1 className='font-bold text-[20px]'>User Name</h1>

                            <input
                                className='bg-[#313338] rounded-md outline-none px-3 py-2 focus:ring-1 focus:ring-[#5865F2]'
                                type='text'
                            />
                        </div>

                        <div className='flex flex-col w-full gap-3'>
                            <h1 className='font-bold text-[20px]'>Avater URL</h1>

                            <input
                                className='bg-[#313338] rounded-md outline-none px-3 py-2 focus:ring-1 focus:ring-[#5865F2]'
                                type='text'
                            />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='flex flex-col w-full gap-3'>
                        <h1 className='font-bold text-[20px]'>Content</h1>

                        <textarea
                            className='
                                bg-[#313338]
                                rounded-md
                                outline-none
                                min-h-40
                                px-4
                                py-3
                                focus:ring-1
                                focus:ring-[#5865F2]
                            '
                        />
                    </div>
                </Card>
            </div>

            <div className='flex-1 overflow-auto bg-[#313338]'></div>
        </div>
    </StrictMode>,
);
