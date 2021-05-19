import { useContext } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Logo } from '../../components/Logo'
import { AuthContext } from '../../context/AuthContext'
import { HeaderContent } from '../City/styles'
import { Container, DashboardBody, ReviewCard, Profile, ReviewCardGrid } from './styles'

export function UserDashboard() {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <>
            <Container>
                <HeaderContent>
                    <Logo />
                    <Button>Logout</Button>
                </HeaderContent>
            </Container>

            <DashboardBody>
                <h1>Bem vindo, {user && user.name}!</h1>

                <div>
                    {
                        user && <h3>Voce ja postou {user.reviews.length} {user.reviews.length > 1 ? 'reviews' : 'review'} em nossa plataforma.</h3>
                    }

                    <h2>Seus reviews</h2>

                    <ReviewCardGrid>
                        {
                            user ? user.reviews.map(review => (
                                <ReviewCard key={review.id}>
                                    <div className="image">
                                        <img src={review.place.photo} alt={review.place.name} />
                                    </div>

                                    <div className="content">
                                        <p><strong>Review</strong>: {review.review}</p>
                                        <p><strong>Nota</strong>: {review.score}</p>
                                        <p><strong>Local</strong>: {review.place.name}</p>
                                        <AiOutlineDelete />
                                    </div>
                                </ReviewCard>
                            ))
                                : ''
                        }
                    </ReviewCardGrid>



                    <h2>Seu perfil</h2>

                    {
                        user && <Profile>
                            <div className="image">
                                {user.avatar ? <img src={user.avatar} alt="avatar do usuario" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="avatar do usuario" />}
                            </div>
                            <div className="content">
                                <p><strong>Nome</strong>: {user.name}</p>
                                <p><strong>Email</strong>: {user.email}</p>
                                <AiOutlineEdit />
                            </div>
                        </Profile>
                    }

                </div>
            </DashboardBody >




        </>
    )
}