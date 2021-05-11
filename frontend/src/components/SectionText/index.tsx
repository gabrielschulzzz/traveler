import { Text } from './styles';

interface CardHeaderProps {
    text: string;
}

export function SectionText({ text }: CardHeaderProps) {
    return (
        <Text>{text}</Text>
    )
}