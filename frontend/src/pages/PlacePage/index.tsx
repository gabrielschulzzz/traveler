import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'

import { Atendimento } from "../../components/Atendimento";
import { LogoWhiteBg } from "../../components/LogoWhiteBg";
import { PlaceDescription } from "../../components/PlaceDescription";

import { Container, ContactInfo, Image } from './styles';
import { Endereco } from "../../components/Endereco";
import { Avaliacoes } from "../../components/Avaliacoes";
import { ReviewModal } from '../../components/ReviewModal';
import { AddReviewModal } from '../../components/AddReviewModal';

export function PlacePage() {
    const [isReviewsModalOpen, setReviewsModalIsOpen] = useState(false);
    const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);

    function handleReviewsModalClose() {
        setReviewsModalIsOpen(false)
    }

    function handleReviewsModalOpen() {
        setReviewsModalIsOpen(true)
    }

    function handleAddReviewModalClose() {
        setIsAddReviewModalOpen(false);
    }

    function handleAddReviewsModalOpen() {
        setIsAddReviewModalOpen(true)
    }

    return (
        <>

            <LogoWhiteBg />
            <ReviewModal
                isOpen={isReviewsModalOpen}
                onRequestClose={handleReviewsModalClose}
            />

            <AddReviewModal
                isOpen={isAddReviewModalOpen}
                onRequestClose={handleAddReviewModalClose}
            />
            <Container>
                <PlaceDescription
                    title="Doce & Compania"
                    description="O melhor lugar da cidade para voce tomar um bom cafe. Fatias de tortas artesanais, bolos, lanches e biscoitos caseiros."
                />

                <Atendimento
                    segunda="Fechado"
                    terca="08h - 17h"
                    quarta="08h - 17h"
                    quinta="08h - 17h"
                    sexta="08h - 17h"
                    sabado="08h - 17h"
                    domingo="08h - 17h"
                />

                <ContactInfo>
                    <button><FaWhatsapp />Entrar em contato</button>
                    <div className="contact-phone">
                        <p className="title">Telefone</p>
                        <p className="phone">(47) 3598-7815</p>
                    </div>
                </ContactInfo>


                <Endereco
                    cep="86547-321"
                    rua="7 de setembro, 319 - Jardim America"
                />

                <Avaliacoes
                    handleReviewsModalOpen={handleReviewsModalOpen}
                    handleAddReviewsModalOpen={handleAddReviewsModalOpen}
                />

                <Image>
                    <img src="https://images.unsplash.com/photo-1536782896453-61d09f3aaf3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                </Image>
            </Container>
        </>
    )
}