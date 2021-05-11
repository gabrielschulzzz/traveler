import { FormHeader } from './styles';

interface CardFormHeaderProps {
    step?: string;
    title: string;
    subtitle: string;
}

export function CardFormHeader({ step, subtitle, title }: CardFormHeaderProps) {
    return (
        <FormHeader>
            <div className="card-header">
                {step ? <p className="step-number">{step}</p> : null}
                <h2>{title}</h2>
            </div>

            <div>
                <h3>{subtitle}</h3>
            </div>
        </FormHeader>
    )
}