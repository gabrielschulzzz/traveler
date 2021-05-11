import styled from 'styled-components';

export const FormHeader = styled.div`
    .card-header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        .step-number {
            margin-right: 1rem;
        }

        p {
            background-color: var(--green);
            color: var(--white);
            font-family: Barlow, serif;
            padding: 1rem;
            border-radius: 0.625rem;
            font-size: 1.2rem;
        }

        h2 {
            color: var(--green);
            font-family: Barlow, serif;
            font-size: 2.25rem;
        }
    }

    h3 {
        font-size: 1.5rem;
        color: var(--title);
        border-bottom: 1px solid var(--light-grey);
        padding-bottom: 1rem;
    }
`