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
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';

interface RouteParams {
    city: string;
    place: string;
}

type Place = {
    name: string;
    photo: string;
}

interface userAttr {
    avatar: string | null;
    email: string;
    id: string;
    name: string;
}

interface reviewsAttr {
    id: string;
    review: string;
    score: string;
    user: userAttr;
    place: Place;
}

export function PlacePage() {
    const [name, setName] = useState('')
    const [bairro, setBairro] = useState('')
    const [category, setCategory] = useState('')
    const [photo, setPhoto] = useState('')
    const [description, setDescription] = useState('');
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [rua, setRua] = useState('')
    const [telefone, setTelefone] = useState('');
    const [reviews, setReviews] = useState<reviewsAttr[]>([]);

    const [segundaOpen, setSegundaOpen] = useState(false)
    const [segundaOpenFrom, setSegundaOpenFrom] = useState('')
    const [segundaOpenUntil, setSegundaOpenUntil] = useState('')

    const [tercaOpen, setTercaOpen] = useState(false)
    const [tercaOpenFrom, setTercaOpenFrom] = useState('')
    const [tercaOpenUntil, setTercaOpenUntil] = useState('')

    const [quartaOpen, setQuartaOpen] = useState(false)
    const [quartaOpenFrom, setQuartaOpenFrom] = useState('')
    const [quartaOpenUntil, setQuartaOpenUntil] = useState('')

    const [quintaOpen, setQuintaOpen] = useState(false)
    const [quintaOpenFrom, setQuintaOpenFrom] = useState('')
    const [quintaOpenUntil, setQuintaOpenUntil] = useState('')

    const [sextaOpen, setSextaOpen] = useState(false)
    const [sextaOpenFrom, setSextaOpenFrom] = useState('')
    const [sextaOpenUntil, setSextaOpenUntil] = useState('')

    const [sabadoOpen, setSabadoOpen] = useState(false)
    const [sabadoOpenFrom, setSabadoOpenFrom] = useState('')
    const [sabadoOpenUntil, setSabadoOpenUntil] = useState('')

    const [domingoOpen, setDomingoOpen] = useState(false)
    const [domingoOpenFrom, setDomingoOpenFrom] = useState('')
    const [domingoOpenUntil, setDomingoOpenUntil] = useState('')

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
            setTelefone(data.telefone)

            setSegundaOpen(data.segundaOpen)
            setSegundaOpenFrom(data.segundaFrom)
            setSegundaOpenUntil(data.segundaUntil)

            setTercaOpen(data.tercaOpen)
            setTercaOpenFrom(data.tercaFrom)
            setTercaOpenUntil(data.tercaUntil)

            setQuartaOpen(data.quartaOpen)
            setQuartaOpenFrom(data.quartaFrom)
            setQuartaOpenUntil(data.quartaUntil)

            setQuintaOpen(data.quintaOpen)
            setQuintaOpenFrom(data.quintaFrom)
            setQuintaOpenUntil(data.quintaUntil)

            setSextaOpen(data.sextaOpen)
            setSextaOpenFrom(data.sextaFrom)
            setSextaOpenUntil(data.sextaUntil)

            setSabadoOpen(data.sabadoOpen)
            setSabadoOpenFrom(data.sabadoFrom)
            setSabadoOpenUntil(data.sabadoUntil)

            setDomingoOpen(data.domingoOpen)
            setDomingoOpenFrom(data.domingoFrom)
            setDomingoOpenUntil(data.domingoUntil)

            setDescription(data.description);
            setReviews(data.reviews);


        }

        fetchData()
    }, [place])


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
            <LogoWhiteBg city={city} />

            <ReviewModal
                reviews={reviews}
                isOpen={isReviewsModalOpen}
                onRequestClose={handleReviewsModalClose}
                handleAddReviewsModalOpen={handleAddReviewsModalOpen}
            />

            <AddReviewModal
                isOpen={isAddReviewModalOpen}
                onRequestClose={handleAddReviewModalClose}
                place={place}
                setReviews={setReviews}
                reviews={reviews}
                city={city}
                name={name}
                photo={photo}
            />

            <Container>
                <PlaceDescription
                    title={name}
                    description={description}
                />

                {
                    category === 'food' &&
                    <>
                        <Atendimento
                            segundaOpen={segundaOpen}
                            segundaOpenFrom={segundaOpenFrom}
                            segundaOpenUntil={segundaOpenUntil}

                            tercaOpen={tercaOpen}
                            tercaOpenFrom={tercaOpenFrom}
                            tercaOpenUntil={tercaOpenUntil}

                            quartaOpen={quartaOpen}
                            quartaOpenFrom={quartaOpenFrom}
                            quartaOpenUntil={quartaOpenUntil}

                            quintaOpen={quintaOpen}
                            quintaOpenFrom={quintaOpenFrom}
                            quintaOpenUntil={quintaOpenUntil}

                            sextaOpen={sextaOpen}
                            sextaOpenFrom={sextaOpenFrom}
                            sextaOpenUntil={sextaOpenUntil}

                            sabadoOpen={sabadoOpen}
                            sabadoOpenFrom={sabadoOpenFrom}
                            sabadoOpenUntil={sabadoOpenUntil}

                            domingoOpen={domingoOpen}
                            domingoOpenFrom={domingoOpenFrom}
                            domingoOpenUntil={domingoOpenUntil}
                        />


                        {
                            telefone && <ContactInfo>
                                <a
                                    href={`http://api.whatsapp.com/send?phone=${telefone.trim()}&text=bom%20dia`}
                                    rel="noreferrer"
                                    target="_blank"
                                ><button><FaWhatsapp />Entrar em contato</button></a>
                                <div className="contact-phone">
                                    <p className="title">Telefone</p>
                                    <p className="phone">{telefone}</p>
                                </div>
                            </ContactInfo>
                        }

                    </>
                }

                <Endereco
                    cep={cep}
                    rua={rua}
                />

                {
                    reviews &&
                    <Avaliacoes
                        reviews={reviews}
                        handleReviewsModalOpen={handleReviewsModalOpen}
                        handleAddReviewsModalOpen={handleAddReviewsModalOpen}
                    />
                }

                <Image>
                    <img src={photo} alt="" />
                </Image>
            </Container>
            <Footer />
        </>
    )
}