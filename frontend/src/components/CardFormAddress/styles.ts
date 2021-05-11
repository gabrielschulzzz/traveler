import styled from 'styled-components';

export const Container = styled.div`
    .split-30-70 {
        display: flex;

        .first-label {
            width: 40%;
        }
        .second-label {
            width: 70%;
        }

        .second-input {
            width: 200%;
            margin-left: 1rem;
        }
    }

    .split-70-30 {
        display: flex;

        .first-label {
            width: 90%;
        }

        .second-label {
            width: 27%;
        }

        .second-input {
            width: 30%;
            margin-left: 1rem;
        }
    }
`