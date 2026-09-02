import { ChevronDown, ChevronRight } from 'lucide-react';
import { type ReactNode, useState } from 'react';

export function Card({ label, children }: { label?: string; children: ReactNode }) {
    const [open, setOpen] = useState(true);

    return (
        <div className='rounded-lg bg-[#2b2d31]'>
            {label && (
                <button
                    type='button'
                    className='flex items-center w-full gap-2 px-4 pt-4'
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <ChevronDown className='size-5 shrink-0 hover:opacity-80' />
                    ) : (
                        <ChevronRight className='size-5 shrink-0 hover:opacity-80' />
                    )}
                    <span className='font-bold text-xl'>{label}</span>
                </button>
            )}

            <div className={`flex flex-col px-4 ${label ? 'pt-2' : 'pt-4'} pb-4 gap-4`}>
                {open && children}
            </div>
        </div>
    );
}
