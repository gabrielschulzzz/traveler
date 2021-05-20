import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`

export const Wrapper = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    > a {
        margin-left: 24%;
    }

    .go-back {
        cursor: pointer;
        padding: .7rem;
        border: 1px solid var(--light-grey);
        border-radius: 0.625rem;
        
        
        svg {
            color: var(--text);
        }
    }
`

export const WhiteBackground = styled.div`
    flex: 1;
    height: 5.938rem;
    background: var(--white);
    display: flex;
    align-items: center;

`