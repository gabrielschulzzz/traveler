import { useContext } from "react";
import { BiImageAdd } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "react-modal";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../Button";
import { CardTop, CardBody } from './styles'

interface EditProfileModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function EditProfileModal({ isOpen, onRequestClose }: EditProfileModalProps) {
    const { user } = useContext(AuthContext)

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
                        <input type="text" value={user.name} />
                        <label>Email</label>
                        <input type="text" value={user.email} />
                        <label>Nova senha</label>
                        <input type="text" />
                    </>
                }


                <Button>Alterar perfil</Button>

            </CardBody>
        </Modal>
    )
}