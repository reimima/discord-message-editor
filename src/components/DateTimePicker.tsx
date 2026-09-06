import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

type DateTimePickerProps = {
    value: string;
    onChange: (value: string) => void;
};

export function DateTimePicker({ value, onChange }: DateTimePickerProps) {
    const date = value ? new Date(value) : new Date();
    const [open, setOpen] = useState(false);
    const [view, setView] = useState(new Date(date.getFullYear(), date.getMonth()));

    const update = (fn: (d: Date) => void) => {
        const next = new Date(date);
        fn(next);
        onChange(next.toISOString());
    };

    const year = view.getFullYear();
    const month = view.getMonth();
    const start = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();

    return (
        <div className='relative'>
            <button
                type='button'
                onClick={() => setOpen(v => !v)}
                className='w-full rounded-sm bg-[#232428] px-3 py-2 text-left'
            >
                {value ? date.toLocaleString() : 'Select date and time'}
            </button>

            {open && (
                <div className='absolute z-20 mt-2 w-80 rounded-md bg-[#232428] p-4 shadow-xl'>
                    <div className='mb-4 flex items-center justify-between'>
                        <button
                            type='button'
                            onClick={() => setView(new Date(year, month - 1))}
                            className='rounded p-1 hover:bg-[#313338]'
                        >
                            <ChevronLeft className='size-5' />
                        </button>

                        <span className='font-semibold'>
                            {year}年 {month + 1}月
                        </span>

                        <button
                            type='button'
                            onClick={() => setView(new Date(year, month + 1))}
                            className='rounded p-1 hover:bg-[#313338]'
                        >
                            <ChevronRight className='size-5' />
                        </button>
                    </div>

                    <div className='grid grid-cols-7 gap-1 text-center text-sm'>
                        {['日', '月', '火', '水', '木', '金', '土'].map(day => (
                            <span key={day} className='py-1 text-gray-500'>
                                {day}
                            </span>
                        ))}

                        {Array.from({ length: start }, (_, i) => (
                            <span key={`empty-${i}`} />
                        ))}

                        {Array.from({ length: days }, (_, i) => i + 1).map(day => {
                            const selected =
                                date.getFullYear() === year &&
                                date.getMonth() === month &&
                                date.getDate() === day;

                            return (
                                <button
                                    type='button'
                                    key={day}
                                    onClick={() => update(d => d.setFullYear(year, month, day))}
                                    className={`rounded py-1.5 ${
                                        selected
                                            ? 'bg-[#5865f2] font-semibold'
                                            : 'hover:bg-[#313338]'
                                    }`}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>

                    <div className='mt-4 flex items-center gap-2 border-t border-[#313338] pt-4'>
                        <select
                            value={date.getHours()}
                            onChange={e => update(d => d.setHours(+e.target.value))}
                            className='flex-1 rounded bg-[#313338] px-2 py-2 outline-none'
                        >
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={i}>
                                    {String(i).padStart(2, '0')}
                                </option>
                            ))}
                        </select>

                        <span>:</span>

                        <select
                            value={date.getMinutes()}
                            onChange={e => update(d => d.setMinutes(+e.target.value))}
                            className='flex-1 rounded bg-[#313338] px-2 py-2 outline-none'
                        >
                            {Array.from({ length: 60 }, (_, i) => (
                                <option key={i} value={i}>
                                    {String(i).padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}
