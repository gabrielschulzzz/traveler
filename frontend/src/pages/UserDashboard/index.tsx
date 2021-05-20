import { useContext, useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { EditProfileModal } from '../../components/EditProfileModal'
import { Logo } from '../../components/Logo'
import { AuthContext } from '../../context/AuthContext'
import { HeaderContent } from '../City/styles'
import { Container, DashboardBody, ReviewCard, Profile, ReviewCardGrid } from './styles'
import { OverlayDelete } from '../../components/OverlayDelete';
import { api } from '../../services/api'
import { useHistory } from 'react-router'

export function UserDashboard() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [deletTriggered, setDeletTriggered] = useState(false);
    const { user, signOut } = useContext(AuthContext);

    let history = useHistory();

    function handleEditModalOpen() {
        setIsEditModalOpen(true)
    }

    function handleEditModalClose() {
        setIsEditModalOpen(false)
    }

    function handleDeleteUser() {
        setDeletTriggered(true)
    }

    async function deleteCity() {
        await api.delete(`/users`)

        setDeletTriggered(false)
        signOut()
    }


    return (
        <>
            <Container>
                <HeaderContent>
                    <Logo />
                    <div className="buttons">
                        <button className="delete-btn" onClick={handleDeleteUser}>Deletar perfil</button>
                        <Button onClick={signOut}>Logout</Button>
                    </div>
                </HeaderContent>
            </Container>

            <EditProfileModal
                isOpen={isEditModalOpen}
                onRequestClose={handleEditModalClose}
            />

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
                                <AiOutlineEdit onClick={handleEditModalOpen} />
                            </div>
                        </Profile>
                    }

                </div>
            </DashboardBody >


            {
                deletTriggered && user &&
                <OverlayDelete
                    title="Excluir perfil"
                    text={`Tem certeza que quer excluir o seu perfil e seus ${user.reviews.length} reviews?`}
                    setDeletTriggered={setDeletTriggered}
                    handleDelete={deleteCity}
                />
            }

        </>
    )
}