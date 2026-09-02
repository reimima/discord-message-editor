type ValueInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    limit?: number;
    required?: boolean;
    textarea?: boolean;
};

const inputCss = 'bg-[#1e1f22] px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-[#5865F2]';

export function ValueInput({ label, value, onChange, limit, required, textarea }: ValueInputProps) {
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

            {textarea ? (
                <textarea
                    className={`min-h-40 ${inputCss}`}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    maxLength={limit}
                />
            ) : (
                <input
                    className={inputCss}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    maxLength={limit}
                />
            )}
        </div>
    );
}
