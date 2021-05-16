import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'

import { Atendimento } from "../../components/Atendimento";
import { LogoWhiteBg } from "../../components/LogoWhiteBg";
import { PlaceDescription } from "../../components/PlaceDescription";

import { Container, ContactInfo, Image } from './styles';
import { Endereco } from "../../components/Endereco";
import { Avaliacoes } from "../../components/Avaliacoes";
import { ReviewModal } from '../../components/ReviewModal';
import { AddReviewModal } from '../../components/AddReviewModal';
import { useParams } from 'react-router';
import axios from 'axios';

interface RouteParams {
    city: string;
    place: string;
}

export function PlacePage() {
    const [name, setName] = useState('')
    const [bairro, setBairro] = useState('')
    const [category, setCategory] = useState('')
    const [photo, setPhoto] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [rua, setRua] = useState('')
    const [segunda, setSegunda] = useState('')
    const [terca, setTerca] = useState('')
    const [quarta, setQuarta] = useState('')
    const [quinta, setQuinta] = useState('')
    const [sexta, setSexta] = useState('')
    const [sabado, setSabado] = useState('')
    const [domingo, setDomingo] = useState('')

    const [isReviewsModalOpen, setReviewsModalIsOpen] = useState(false);
    const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);

    const { city, place } = useParams<RouteParams>();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(`http://localhost:3333/places/${place}`)

            setName(data.name)
            setBairro(data.bairro)
            setCategory(data.category)
            setPhoto(data.photo)
            setCep(data.cep)
            setNumero(data.numero)
            setRua(data.rua)
            setSegunda(data.segunda)
            setTerca(data.terca)
            setQuarta(data.quarta)
            setQuinta(data.quinta)
            setSexta(data.sexta)
            setSabado(data.sabado)
            setDomingo(data.domingo)
            console.log(data)
        }

        fetchData()
    })

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
                    title={name}
                    description="O melhor lugar da cidade para voce tomar um bom cafe. Fatias de tortas artesanais, bolos, lanches e biscoitos caseiros."
                />

                <Atendimento
                    segunda={segunda}
                    terca={terca}
                    quarta={quarta}
                    quinta={quinta}
                    sexta={sexta}
                    sabado={sabado}
                    domingo={domingo}
                />

                <ContactInfo>
                    <button><FaWhatsapp />Entrar em contato</button>
                    <div className="contact-phone">
                        <p className="title">Telefone</p>
                        <p className="phone">(47) 3598-7815</p>
                    </div>
                </ContactInfo>


                <Endereco
                    cep={cep}
                    rua={rua}
                />

                <Avaliacoes
                    handleReviewsModalOpen={handleReviewsModalOpen}
                    handleAddReviewsModalOpen={handleAddReviewsModalOpen}
                />

                <Image>
                    <img src={photo} alt="" />
                </Image>
            </Container>
        </>
    )
}