import { ChevronDown, ChevronRight } from 'lucide-react';
import { type ReactNode, useState } from 'react';

type CardProps = {
    label?: string;
    p?: boolean;
    children: ReactNode;
};

export function Card({ label, p = true, children }: CardProps) {
    const [open, setOpen] = useState(true);

    return (
        <div className='rounded-sm bg-[#292b2f]'>
            {label && (
                <button
                    type='button'
                    className={`flex w-full items-center gap-2 pt-4 ${
                        p ? 'px-4' : ''
                    } ${!open && p ? 'pb-4' : ''} hover:opacity-80`}
                    onClick={() => setOpen(v => !v)}
                >
                    {open ? (
                        <ChevronDown className='size-5 shrink-0' />
                    ) : (
                        <ChevronRight className='size-5 shrink-0' />
                    )}
                    <span className='text-xl font-bold'>{label}</span>
                </button>
            )}

            {open && (
                <div className={`flex flex-col gap-4 pt-4 ${p ? 'px-4 pb-4' : ''}`}>{children}</div>
            )}
        </div>
    );
}
