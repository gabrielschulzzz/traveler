import styled from 'styled-components';

export const Container = styled.div`
.userRatings {
        margin-top: 2rem;
        display: flex;

        img {
            width: 5rem;
            height: 5rem;
            object-fit: cover;
            border-radius: 100%;
        }

        .userProfile {
            margin-left: 1.2rem;
            width: 25%;

            div {
                p {
                    width: 70%;
                    color: var(--text);
                }

                .name-star {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    h3 {
                        font-size: 1.2rem;
                        margin-bottom: 1rem;
                    }

                    svg {
                        color: var(--orange);
                    }


                }
            }
        }
    }
`