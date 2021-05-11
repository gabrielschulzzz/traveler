import styled from 'styled-components';

export const FormFooter = styled.div`
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .footer-left { 
            display: flex;
            align-items: center;
            
            p {
                color: var(--text);
                width: 46%;
            }
            
            svg {
                font-size: 1.8rem;
                color: var(--orange);
                margin-right: 1.5rem;
            }
        }

        button {
                background-color: var(--green);
                color: var(--white);
        }
`
