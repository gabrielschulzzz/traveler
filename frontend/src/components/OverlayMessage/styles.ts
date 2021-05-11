import styled from 'styled-components';

export const Container = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(18, 57, 82, 0.9);
        flex-direction: column;

        div {
            background-color: var(--green);
            border-radius: 50%;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                color: var(--white);
                font-size: 1.5rem;
            }
        }


        p {
            color: var(--white);
            font-size: 3rem;
            font-weight: 500;
            font-family: 'Heebo', sans-serif;
        }
`