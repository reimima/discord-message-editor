import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { Card, ValueInput } from './components';

function App() {
    const [content, setContent] = useState('');

    return (
        <div className='flex h-screen'>
            <div className='flex-1 flex flex-col p-8 gap-4 overflow-auto'>
                <Card>
                    <div className='flex w-full justify-between'>
                        <h1 className='text-2xl font-bold'>Discord Message Editor</h1>

                        <a
                            href='https://github.com/reimima/discord-message-editor'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                className='h-8 w-8 shrink-0 hover:opacity-80'
                                src='/GitHub_Invertocat_White.svg'
                                alt='Github repository'
                            />
                        </a>
                    </div>
                </Card>

                <Card label='Message Content'>
                    <ValueInput label='Content' value={content} onChange={setContent} limit={2000} textarea />
                </Card>
            </div>

            <div className='flex-1 overflow-auto'></div>
        </div>
    );
}

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
