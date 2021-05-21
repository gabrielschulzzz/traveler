import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    h2 {
        color: var(--title);
        margin-bottom: 4rem;
        font-size: 2rem;
        font-weight: bold;
    }

    div {
        display: flex;

        div {
            cursor: pointer;
            margin: 0 .4rem;
            border: 1px solid var(--light-grey);
            border-radius: .625rem;
            background-color: var(--white);
            width: 8rem;
            height: 10rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--text);
            transition: background-color 0.2s;

            :hover {
                background-color: var(--blue-low);
            }
            
            p {
                font-size: 1.2rem;
            }

            svg {
                margin-bottom: 1.5rem;
                color: var(--orange);
                font-size: 2rem;
            }
        }
    }
`