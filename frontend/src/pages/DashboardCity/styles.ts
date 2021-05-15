import styled from 'styled-components';

export const Container = styled.div`
    .icons-right {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon {
            border: 1px solid var(--light-grey);
            padding: .5rem;
        }

        .icon-edit {
            border-top-left-radius: .625rem;
            border-bottom-left-radius: .625rem;
            margin-right: .2rem;
        }

        .icon-remove {
            border-top-right-radius: .625rem;
            border-bottom-right-radius: .625rem;
            margin-right: 1.2rem;
            cursor: pointer;
        }

        svg {
            font-size: 1.3rem;
        }

        button {
            color: var(--white);
            background-color: var(--green);
        }
    }
`
export const AllHeader = styled.div`
    margin: 2rem auto;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        font-size: 1.8rem;
        color: var(--title);
    }

    ul {
        display: flex;
        border-bottom: 1px solid var(--light-grey);

        li {
            margin-bottom: 1rem;
            margin-left: 2rem;
            list-style: none;
        }
    }


`