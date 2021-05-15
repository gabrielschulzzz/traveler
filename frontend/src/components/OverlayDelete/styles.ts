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
        background: rgba(0,0,0, 0.9);
        flex-direction: column;

        .deleteIcon {
            background-color: var(--red);
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

        h1 {
            color: var(--white);
            margin: 1rem 0;
        }

        p {
            color: var(--text);
            margin-top: 1rem;
        }

        .buttons {
            margin-top: 2rem;
            
            button {
                border: 0;
                padding: .8rem 1.5rem;
                font-size: 1.2rem;
                margin: .5rem;
                background-color: var(--red);
                color: var(--white);
                border-radius: 0.625rem;
                font-weight: bold;
            }

            .btn-remove {
                background-color: var(--green);
            }
        }

`