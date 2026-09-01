import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { Card } from './components';

function App() {
    return (
        <div className='flex h-screen'>
            <div className='flex-1 flex flex-col p-8 gap-4 overflow-auto'>
                <Card></Card>
            </div>
        </div>
    );
}

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
