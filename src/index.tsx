import type { APIEmbed } from 'discord-api-types/v10';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { Card, ValueInput } from './components';

function App() {
    const [username, setUsername] = useState('');
    const [avaterURL, setAvaterURL] = useState('');
    const [content, setContent] = useState('');

    const [embeds, setEmbeds] = useState<APIEmbed[]>([{}, {}, {}]);
    const [selectedEmbed, setSelectedEmbed] = useState(0);

    const currentEmbed = embeds[selectedEmbed];

    function updateEmbed(path: string, value: string) {
        setEmbeds(prev => {
            const embeds = [...prev];
            const embed = structuredClone(embeds[selectedEmbed]) as APIEmbed;

            // biome-ignore lint/suspicious/noExplicitAny: To dynamically modify the object
            let target = embed as Record<string, any>;
            const keys = path.split('.');

            for (const key of keys.slice(0, -1)) {
                target[key] ??= {};
                target = target[key];
            }

            target[String(keys.at(-1))] = value;
            embeds[selectedEmbed] = embed;

            return embeds;
        });
    }

    return (
        <div className='flex h-screen'>
            <div className='flex-1 flex flex-col p-8 gap-4 overflow-auto bg-[#313338]'>
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

                <Card label='Message Author'>
                    <ValueInput
                        label='Username'
                        value={username}
                        onChange={setUsername}
                        limit={80}
                    />

                    <ValueInput label='Avater URL' value={avaterURL} onChange={setAvaterURL} />
                </Card>

                <Card label='Message Content'>
                    <ValueInput
                        label='Content'
                        value={content}
                        onChange={setContent}
                        limit={2000}
                        textarea
                    />
                </Card>

                <Card label='Embeds'>
                    <div className='relative flex overflow-x-auto pb-1'>
                        {embeds.map((_, index) => (
                            <button
                                type='button'
                                key={index}
                                onClick={() => setSelectedEmbed(index)}
                                className='w-25 shrink-0 px-3 py-3 text-sm font-bold hover:opacity-80'
                            >
                                Embed {index + 1}
                            </button>
                        ))}

                        <div
                            className='absolute bottom-1 left-0 h-0.5 w-25 transition-transform duration-200 ease-out bg-[#5865F2]'
                            style={{
                                transform: `translateX(${selectedEmbed * 100}px)`,
                            }}
                        />
                    </div>

                    <Card
                        label={`Author${currentEmbed?.author?.name ? ` - ${currentEmbed.author.name}` : ''}`}
                        p={false}
                    >
                        <ValueInput
                            label='Author Name'
                            value={currentEmbed?.author?.name ?? ''}
                            onChange={value => updateEmbed('author.name', value)}
                            limit={256}
                        />

                        <ValueInput
                            label='Author URL'
                            value={currentEmbed?.author?.url ?? ''}
                            onChange={value => updateEmbed('author.url', value)}
                        />

                        <ValueInput
                            label='Author Icon URL'
                            value={currentEmbed?.author?.icon_url ?? ''}
                            onChange={value => updateEmbed('author.icon_url', value)}
                        />
                    </Card>

                    <Card
                        label={`Body${currentEmbed?.title ? ` - ${currentEmbed.title}` : ''}`}
                        p={false}
                    >
                        <ValueInput
                            label='Title'
                            value={currentEmbed?.title ?? ''}
                            onChange={value => updateEmbed('title', value)}
                            limit={80}
                        />

                        <ValueInput
                            label='Title URL'
                            value={currentEmbed?.url ?? ''}
                            onChange={value => updateEmbed('url', value)}
                        />

                        <ValueInput
                            label='Description'
                            value={currentEmbed?.description ?? ''}
                            onChange={value => updateEmbed('description', value)}
                            limit={4000}
                            textarea
                        />
                    </Card>

                    <Card
                        label={`Footer${currentEmbed?.footer?.text ? ` - ${currentEmbed.footer.text}` : ''}`}
                        p={false}
                    >
                        <ValueInput
                            label='Footer Text'
                            value={currentEmbed?.footer?.text ?? ''}
                            onChange={value => updateEmbed('footer.text', value)}
                            limit={2048}
                        />

                        <ValueInput
                            label='Footer Icon URL'
                            value={currentEmbed?.footer?.icon_url ?? ''}
                            onChange={value => updateEmbed('footer.icon_url', value)}
                        />
                    </Card>
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
