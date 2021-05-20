import { FormEvent, useContext, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "react-modal";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import { Button } from "../Button";
import { CardTop, CardBody } from './styles'

interface EditProfileModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function EditProfileModal({ isOpen, onRequestClose }: EditProfileModalProps) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useContext(AuthContext)

    useEffect(() => {
        function fillData() {
            if (user) {
                setNome(user?.name)
                setEmail(user?.email)
                setAvatar(user?.avatar)
            }
        }
        fillData()
    }, [user])

    async function handleUpdateProfile(e: FormEvent) {
        e.preventDefault()
        try {
            await api.patch("/users", {
                name: nome,
                avatar,
                email,
                password
            })

            onRequestClose()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <CardTop>
                <div className="first">
                    <h3>Editar perfil</h3>
                </div>

                <div className="second">
                    <button className="close" onClick={onRequestClose}><IoCloseSharp /></button>
                </div>
            </CardTop>

            <CardBody>
                {
                    user?.avatar ?
                        <div className="avatar">
                            <BiImageAdd />
                            <img src={user?.avatar} alt="" />
                        </div>
                        :
                        <div className="avatar">
                            <BiImageAdd />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                        </div>
                }

                {
                    user && <>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Nova senha</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </>
                }


                <button onClick={handleUpdateProfile}>Alterar perfil</button>

            </CardBody>
        </Modal>
    )
}