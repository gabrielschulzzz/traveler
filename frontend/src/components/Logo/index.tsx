import { LogoElement } from './styles'
import { Link } from 'react-router-dom';

export function Logo() {
    return (
        <LogoElement>
            <Link to="/">Traveler</Link>
        </LogoElement>
    )
}