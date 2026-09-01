type ValueInputProps = {
    label: string;
    value?: string;
    limit?: number;
    required?: boolean;
    textarea?: boolean;
};

export function ValueInput({ label, value, limit, required, textarea }: ValueInputProps) {
    return (
        <div>
            {textarea ? <textarea /> : <input />}
        </div>
    );
}
