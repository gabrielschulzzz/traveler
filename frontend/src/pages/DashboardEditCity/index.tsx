import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CardForm } from '../../components/CardForm';
import { CardFormBody } from '../../components/CardFormBody';
import { CardFormFooter } from '../../components/CardFormFooter';
import { CardFormHeader } from '../../components/CardFormHeader';
import { DashboardHeader } from '../../components/DashboardHeader';
import { DashboardNavbar } from '../../components/DashboardNavbar';
import { OverlayMessage } from '../../components/OverlayMessage';
import { Container } from './styles';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function DashboardEditCity() {
    const [editSuccess, setEditSuccess] = useState(false)
    let history = useHistory();

    function handleEditSuccess() {
        setEditSuccess(true);
        setTimeout(() => {
            setEditSuccess(false);
            history.push('/dashboard')
        }, 1500);
    }

    return (
        <Container>
            <DashboardNavbar />
            <DashboardHeader>
                <Link to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>
                <h2 className="title">Editar</h2>
                <div className="right">
                    <p>Florianopolis</p>
                </div>
            </DashboardHeader>

            <CardForm>
                <CardFormHeader
                    title="Editar cidade"
                    subtitle="Dados da cidade"
                />

                <CardFormBody>
                    <label>Nome da cidade</label>
                    <input type="text" value="Florianopolis" />
                    <label htmlFor="">Foto da cidade</label>
                    <div className="form-foto-edit">
                        <div>
                            <AiOutlineEdit />
                        </div>
                        <img src="https://images.unsplash.com/photo-1590093804249-491680485e5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    </div>

                    <label>Descricao da cidade</label>
                    <textarea value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nostrum molestiae hic voluptatum laboriosam. Officia quae iure repudiandae magni. Quibusdam qui fugit quod unde ipsam quaerat impedit natus. Deleniti, laboriosam."></textarea>
                </CardFormBody>

                <CardFormFooter>
                    <div className="footer-left">
                        <FiAlertCircle />
                        <p>Preencha todos os dados com cuidado</p>
                    </div>
                    <Button onClick={() => handleEditSuccess()}><p className="buttonFinish">Salvar alteracao</p></Button>
                </CardFormFooter>
            </CardForm>


            {
                editSuccess && <OverlayMessage text="Alteracoes salvas!" />
            }

        </Container>
    )
}