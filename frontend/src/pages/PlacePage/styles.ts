import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    margin-top: 2rem;
`

export const ContactInfo = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;

    button {
        font-weight: bold;
        font-size: .9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        width: 14rem;
        height: 3rem;
        background-color: var(--green);
        color: var(--white);
        border-radius: 0.625rem;
        
        svg {
            margin-right: .5rem;
            font-size:  1.3rem;
        }
    }

    .contact-phone {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;

        .title {
            color: var(--text);
            margin-bottom: .2rem;
        }

        .phone {
            font-weight: bold;
            letter-spacing: .025rem;
        }
    }


`

export const Image = styled.div`
    top: 0;
    right: 0;
    position: fixed;
`