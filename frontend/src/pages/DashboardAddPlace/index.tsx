import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineEdit } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { CardCategoryPicker } from "../../components/CardCategoryPicker";
import { CardForm } from "../../components/CardForm";
import { CardFormAddress } from "../../components/CardFormAddress";
import { CardFormBody } from "../../components/CardFormBody";
import { CardFormDates } from "../../components/CardFormDates";
import { CardFormFooter } from "../../components/CardFormFooter";
import { CardFormHeader } from "../../components/CardFormHeader";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardNavbar } from "../../components/DashboardNavbar";
import { NextEvent } from "../../components/NextEvent";

export function DashBoardAddPlace() {
    const [type, setType] = useState('food');

    return (
        <>
            <DashboardNavbar />
            <DashboardHeader>
                <Link to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>
                <h2 className="title">Adicionar um local</h2>
                <p>Florianopolis</p>

            </DashboardHeader>


            <CardForm>
                <CardFormHeader title="Adicionar um local na cidade" subtitle="Dados basicos" />

                <CardFormBody>
                    <label>Nome do local</label>
                    <input />

                    <label>Foto do local</label>
                    <div className="form-foto">
                        <BsPlus />
                        <p>Adicionar uma foto</p>
                    </div>


                    <label>Descricao do local</label>
                    <textarea></textarea>

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
                        <Button><p className="buttonFinish">Salvar alteracao</p></Button>
                    </CardFormFooter>
                </CardFormBody>
            </CardForm>


        </>
    )
}