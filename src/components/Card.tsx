import type { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
    return <div className='flex p-4 rounded-lg bg-[#2b2d31]'>{children}</div>;
}
