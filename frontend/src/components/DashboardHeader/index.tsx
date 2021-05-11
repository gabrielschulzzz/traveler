import { ReactNode } from 'react';
import { WhiteBackground, Wrapper } from './styles';

interface DashboardHeaderProps {
    children: ReactNode;
}

export function DashboardHeader({ children }: DashboardHeaderProps) {
    return (
        <WhiteBackground>
            <Wrapper>
                {children}
            </Wrapper>
        </WhiteBackground>
    )
}