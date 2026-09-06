import type { ReactNode } from 'react';

type ValueInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    limit?: number;
    required?: boolean;
    textarea?: boolean;
    children?: (value: string, onChange: (value: string) => void) => ReactNode;
};

export const inputCss =
    'bg-[#232428] px-3 py-2 rounded-sm outline-none focus:ring-1 focus:ring-[#5865f2]';

export function ValueInput({
    label,
    value,
    onChange,
    limit,
    required,
    textarea,
    children,
}: ValueInputProps) {
    const props = {
        className: textarea ? `min-h-40 ${inputCss}` : inputCss,
        value,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onChange(e.target.value),
        maxLength: limit,
    };

    return (
        <div className='flex flex-col w-full'>
            <p className='text-sm text-gray-300'>
                {label}
                {limit && <span className='ml-4 italic'>{`${value.length}/${limit}`}</span>}
            </p>

            {required && !value && (
                <p className='flex items-center my-1 gap-1.5 text-red-400'>
                    <span className='flex items-center justify-center size-4 shrink-0 rounded-full bg-red-400'>
                        <span className='text-xs font-bold leading-none text-[#1e1f22]'>!</span>
                    </span>
                    <span className='relative top-px font-semibold text-sm'>
                        This field is required.
                    </span>
                </p>
            )}

            {children ? (
                children(value, onChange)
            ) : textarea ? (
                <textarea {...props} />
            ) : (
                <input {...props} />
            )}
        </div>
    );
}
