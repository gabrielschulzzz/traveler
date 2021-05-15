import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--orange);
    width: 5rem;
    position: fixed;
    color: var(--white);
    height: 51.313rem;
    padding-bottom: 2rem;
    font-size: 1.2rem;
    border-bottom-right-radius: 0.625rem;

    a {
        color: var(--white);
    }

    .logo {
        font-size: 2rem;
    }

    div {
        display: flex;
        flex-direction: column;

        svg {
            margin: 1rem;
        }
    }
`