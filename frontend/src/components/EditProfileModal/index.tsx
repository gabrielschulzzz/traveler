import { FormEvent, useContext, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "react-modal";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import { CardTop, CardBody } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import Dropzone from "react-dropzone";
import axios from "axios";

interface EditProfileModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface File {
    path: string;
    name: string;
    size: string;
    lastModified: number;
    lastModifiedDate: Date;
    type: string;
}

export function EditProfileModal({ isOpen, onRequestClose }: EditProfileModalProps) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState<any>([]);
    const [newAvatar, setNewAvatar] = useState('');
    const [password, setPassword] = useState('');
    const notify = () => toast.error("Preencha todos os campos!");

    const { user, setUser, jwt } = useContext(AuthContext)

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

    function handleFileUpload(file: any) {
        setNewAvatar(file);
    }


    async function handleUpdateProfile(e: FormEvent) {
        e.preventDefault()

        if (!nome || !email || !password) {
            notify()
            return;
        }

        try {
            let formData = new FormData();
            formData.append('avatar', newAvatar);
            formData.append('name', nome);
            formData.append('email', email);
            formData.append('password', password);

            axios({
                method: "patch",
                url: "http://localhost:3333/users/",
                data: formData,
                headers:
                    { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${jwt}` },
            })
                .then(function (response) {
                    setUser({
                        id: response.data.id,
                        name: response.data.name,
                        avatar: response.data.avatar,
                        email: response.data.email,
                        role: response.data.role,
                        reviews: response.data.reviews,
                    })
                })
                .catch(function (response) {
                    console.log(response);
                });
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content-edit-user"
        >
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                            <Dropzone
                                onDrop={acceptedFiles => {
                                    handleFileUpload(acceptedFiles[0])
                                    setAvatarPreview(acceptedFiles.map(file => Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })));
                                }}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p><BiImageAdd /></p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                            {avatarPreview.length > 0
                                ? avatarPreview.map((file: { preview: string | undefined; }) => (
                                    <div>
                                        <img src={file.preview} alt="" />
                                    </div>
                                ))
                                : <img src={user?.avatar} alt="" />
                            }
                        </div>
                        :
                        <div className="avatar">
                            <Dropzone
                                onDrop={acceptedFiles => handleFileUpload(acceptedFiles[0])}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p><BiImageAdd /></p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                        </div>
                }
                {
                    user && <>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Senha Atual</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </>
                }

                <button onClick={handleUpdateProfile}>Alterar perfil</button>

            </CardBody>
        </Modal >
    )
}