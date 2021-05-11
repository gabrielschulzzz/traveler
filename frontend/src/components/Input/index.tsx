import { InputElement } from "./style";
import { FiSearch } from 'react-icons/fi'

interface InputProps {
    placeholder: string;
}

export function Input({ placeholder }: InputProps) {
    return (
        <InputElement>
            <FiSearch />
            <input type="text" placeholder={placeholder} />
        </InputElement>
    )
}