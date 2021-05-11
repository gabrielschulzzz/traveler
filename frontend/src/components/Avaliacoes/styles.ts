import styled from 'styled-components';

export const Container = styled.div`
    margin: 4rem 0;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 33%;

        .header-first {
            display: flex;
            align-items: center;

            h2 {
                color: var(--title);
            }
            

            .rating {
                margin-left: 2rem;
                font-weight: bold;
                display: flex;
                color: var(--orange);

                svg {
                    margin-right: .4rem;
                    font-size: 1.2rem;
                }
            }
        }

        ul {
            display: flex;

            .open {
                cursor: pointer;
            }

            li {
                list-style: none;
                margin: 0 .5rem;
                font-size: .8rem;
                color: var(--text);
                font-weight: bold;
            }
        }
    }
`