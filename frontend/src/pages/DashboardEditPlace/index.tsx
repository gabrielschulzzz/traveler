import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CardCategoryPicker } from '../../components/CardCategoryPicker';
import { CardForm } from '../../components/CardForm';
import { CardFormAddress } from '../../components/CardFormAddress';
import { CardFormBody } from '../../components/CardFormBody';
import { CardFormDates } from '../../components/CardFormDates';
import { CardFormFooter } from '../../components/CardFormFooter';
import { CardFormHeader } from '../../components/CardFormHeader';
import { DashboardHeader } from '../../components/DashboardHeader';
import { DashboardNavbar } from '../../components/DashboardNavbar';
import { NextEvent } from '../../components/NextEvent';
import { OverlayMessage } from '../../components/OverlayMessage';
import { Container } from './styles';

export function DashboardEditPlace() {
    const [editSuccess, setEditSuccess] = useState(false)
    const [type, setType] = useState('food');
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
                    <p>Dulce & Company</p>
                </div>
            </DashboardHeader>

            <CardForm>
                <CardFormHeader title="Editar local da cidade" subtitle="Dados basicos" />

                <CardFormBody>
                    <label>Nome do local</label>
                    <input value="Doce & Companhy" />

                    <label>Foto do local</label>
                    <div className="form-foto-edit">
                        <div>
                            <AiOutlineEdit />
                        </div>
                        <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
                    </div>

                    <label>Descricao do local</label>
                    <textarea value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere quibusdam modi provident commodi fugiat dignissimos, laborum ducimus nesciunt nostrum veniam, rerum dolore earum corporis iusto? Corrupti, rerum. Quidem, natus."></textarea>

                    <CardCategoryPicker setType={setType} />

                    {
                        type === 'food' && <CardFormDates />
                    }

                    {
                        type === 'event' && <NextEvent />
                    }


                    <CardFormAddress map />

                    <CardFormFooter>
                        <div className="footer-left">
                            <FiAlertCircle />
                            <p>Preencha todos os dados com cuidado</p>
                        </div>
                        <Button onClick={handleEditSuccess}><p className="buttonFinish">Salvar alteracao</p></Button>
                    </CardFormFooter>
                </CardFormBody>
            </CardForm>

            {
                editSuccess && <OverlayMessage text="Alteracoes salvas!" />
            }
        </Container>
    )
}