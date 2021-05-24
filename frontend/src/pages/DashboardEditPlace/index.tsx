import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, DeleteButton } from './styles';

import { AiOutlineArrowLeft, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
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
import { OverlayDelete } from '../../components/OverlayDelete';
import Dropzone from 'react-dropzone';
import { BsPlus } from 'react-icons/bs';

interface RouteParams {
    city: string;
    place: string;
}

export function DashboardEditPlace() {
    const [editSuccess, setEditSuccess] = useState(false)
    const [photoPreview, setPhotoPreview] = useState<any>([]);
    const [type, setType] = useState('food');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [numero, setNumero] = useState('');
    const [photo, setPhoto] = useState('');
    const [rua, setRua] = useState('');
    const [description, setDescription] = useState('');
    const [deleteTriggered, setDeleteTriggered] = useState(false);
    const [domingoOpen, setDomingoOpen] = useState(false);
    const [domingoFrom, setDomingoFrom] = useState('');
    const [domingoUntil, setDomingoUntil] = useState('');

    const [segundaOpen, setSegundaOpen] = useState(false);
    const [segundaFrom, setSegundaFrom] = useState('');
    const [segundaUntil, setSegundaUntil] = useState('');

    const [tercaOpen, setTercaOpen] = useState(false);
    const [tercaFrom, setTercaFrom] = useState('');
    const [tercaUntil, setTercaUntil] = useState('');

    const [quartaOpen, setQuartaOpen] = useState(false);
    const [quartaFrom, setQuartaFrom] = useState('');
    const [quartaUntil, setQuartaUntil] = useState('');

    const [quintaOpen, setQuintaOpen] = useState(false);
    const [quintaFrom, setQuintaFrom] = useState('');
    const [quintaUntil, setQuintaUntil] = useState('');

    const [sextaOpen, setSextaOpen] = useState(false);
    const [sextaFrom, setSextaFrom] = useState('');
    const [sextaUntil, setSextaUntil] = useState('');

    const [sabadoOpen, setSabadoOpen] = useState(false);
    const [sabadoFrom, setSabadoFrom] = useState('');
    const [sabadoUntil, setSabadoUntil] = useState('');

    let history = useHistory();
    let newPlace: any;

    const { city, place } = useParams<RouteParams>();

    function handleFileUploadPlace(file: any) {
        setPhoto(file);
    }

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(`http://localhost:3333/places/${place}`)

            setType(data.category)
            setBairro(data.bairro)
            setCep(data.cep);
            setName(data.name);
            setNumero(data.numero);
            setTelefone(data.telefone);
            setPhoto(data.photo);
            setRua(data.rua);
            setDescription(data.description);

            setSegundaOpen(data.segundaOpen);
            setSegundaFrom(data.segundaFrom);
            setSegundaUntil(data.segundaUntil);

            setTercaOpen(data.tercaOpen);
            setTercaFrom(data.tercaFrom);
            setTercaUntil(data.tercaUntil);

            setQuartaOpen(data.quartaOpen);
            setQuartaFrom(data.quartaFrom);
            setQuartaUntil(data.quartaUntil);

            setQuintaOpen(data.quintaOpen);
            setQuintaFrom(data.quintaFrom);
            setQuintaUntil(data.quintaUntil);

            setSextaOpen(data.sextaOpen);
            setSextaFrom(data.sextaFrom);
            setSextaUntil(data.sextaUntil);

            setSabadoOpen(data.sabadoOpen);
            setSabadoFrom(data.sabadoFrom);
            setSabadoUntil(data.sabadoUntil);

            setDomingoOpen(data.domingoOpen);
            setDomingoFrom(data.domingoFrom);
            setDomingoUntil(data.domingoUntil);
        }

        fetchData()
    }, [place])

    async function handleEditSuccess() {
        let placeFormData = new FormData();

        console.log(photo)


        if (type === "food") {
            placeFormData.append("name", name)
            placeFormData.append("city", city)
            placeFormData.append("description", description)
            placeFormData.append("telefone", telefone)
            placeFormData.append("photo", photo)
            placeFormData.append("category", type)
            placeFormData.append("cep", cep)
            placeFormData.append("rua", rua)
            placeFormData.append("bairro", bairro)
            placeFormData.append("numero", numero)
            placeFormData.append("domingoOpen", String(domingoOpen))
            placeFormData.append("domingoFrom", domingoFrom)
            placeFormData.append("domingoUntil", domingoUntil)
            placeFormData.append("segundaOpen", String(segundaOpen))
            placeFormData.append("segundaFrom", segundaFrom)
            placeFormData.append("segundaUntil", segundaUntil)
            placeFormData.append("tercaOpen", String(tercaOpen))
            placeFormData.append("tercaFrom", tercaFrom)
            placeFormData.append("tercaUntil", tercaUntil)
            placeFormData.append("quartaOpen", String(quartaOpen))
            placeFormData.append("quartaFrom", quartaFrom)
            placeFormData.append("quartaUntil", quartaUntil)
            placeFormData.append("quintaOpen", String(quintaOpen))
            placeFormData.append("quintaFrom", quintaFrom)
            placeFormData.append("quintaUntil", quintaUntil)
            placeFormData.append("sextaOpen", String(sextaOpen))
            placeFormData.append("sextaFrom", sextaFrom)
            placeFormData.append("sextaUntil", sextaUntil)
            placeFormData.append("sabadoOpen", String(sabadoOpen))
            placeFormData.append("sabadoFrom", sabadoFrom)
            placeFormData.append("sabadoUntil", sabadoUntil)

            newPlace = await axios({
                method: "patch",
                url: `http://localhost:3333/places/${place}`,
                data: placeFormData,
                headers:
                    { "Content-Type": "multipart/form-data" },
            })
        } else if (type === "event") {
            placeFormData.append("name", name)
            placeFormData.append("city", city)
            placeFormData.append("description", description)
            placeFormData.append("telefone", telefone)
            placeFormData.append("photo", photo)
            placeFormData.append("category", type)
            placeFormData.append("cep", cep)
            placeFormData.append("rua", rua)
            placeFormData.append("numero", numero)
            placeFormData.append("bairro", bairro)

            newPlace = await axios({
                method: "patch",
                url: `http://localhost:3333/places/${place}`,
                data: placeFormData,
                headers:
                    { "Content-Type": "multipart/form-data" },
            })
        } else {
            placeFormData.append("name", name)
            placeFormData.append("city", city)
            placeFormData.append("description", description)
            placeFormData.append("telefone", telefone)
            placeFormData.append("photo", photo)
            placeFormData.append("category", type)
            placeFormData.append("numero", numero)
            placeFormData.append("cep", cep)
            placeFormData.append("rua", rua)
            placeFormData.append("bairro", bairro)

            newPlace = await axios({
                method: "patch",
                url: `http://localhost:3333/places/${place}`,
                data: placeFormData,
                headers:
                    { "Content-Type": "multipart/form-data" },
            })
        }

        setEditSuccess(true);
        setTimeout(() => {
            setEditSuccess(false);
            history.push(`/dashboard/city/${city}`)
        }, 1500);
    }

    async function deletePlace() {
        await axios.delete(`http://localhost:3333/places/${place}`)

        history.push(`/dashboard/city/${city}`)
        setDeleteTriggered(false)
    }

    return (
        <Container>
            <DashboardNavbar />
            <DashboardHeader>
                <Link to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>
                <h2 className="title">Editar</h2>
                <DeleteButton>
                    <button onClick={() => setDeleteTriggered(true)} ><AiOutlineDelete />Deletar local</button>
                </DeleteButton>
            </DashboardHeader>


            <CardForm>
                <CardFormHeader
                    title="Editar local da cidade"
                    subtitle="Dados basicos"
                />

                <CardFormBody>
                    <label>Nome do local</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <label>Foto do local</label>
                    <Dropzone
                        onDrop={acceptedFiles => {
                            handleFileUploadPlace(acceptedFiles[0])
                            setPhotoPreview(acceptedFiles.map(file => Object.assign(file, {
                                preview: URL.createObjectURL(file)
                            })));
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {photoPreview.length > 0
                                        ? photoPreview.map((file: { preview: string | undefined; }) => (
                                            <div className="form-foto">
                                                <div>
                                                    <AiOutlineEdit />
                                                </div>
                                                <img src={file.preview} alt="" />
                                            </div>
                                        ))
                                        : <div className="form-foto">
                                            <div>
                                                <AiOutlineEdit />
                                            </div>
                                            <img src={photo} alt="" />
                                        </div>
                                    }
                                </div>
                            </section>
                        )}
                    </Dropzone>

                    <label>Descricao do local</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <CardCategoryPicker
                        type={type}
                        setType={setType}
                    />

                    {
                        type === 'food' &&
                        <CardFormDates
                            setDomingoOpen={setDomingoOpen}
                            domingoOpen={domingoOpen}
                            setDomingoFrom={setDomingoFrom}
                            domingoFrom={domingoFrom}
                            setDomingoUntil={setDomingoUntil}
                            domingoUntil={domingoUntil}

                            segundaOpen={segundaOpen}
                            setSegundaOpen={setSegundaOpen}
                            setSegundaFrom={setSegundaFrom}
                            segundaFrom={segundaFrom}
                            setSegundaUntil={setSegundaUntil}
                            segundaUntil={segundaUntil}

                            tercaOpen={tercaOpen}
                            setTercaOpen={setTercaOpen}
                            setTercaFrom={setTercaFrom}
                            tercaFrom={tercaFrom}
                            setTercaUntil={setTercaUntil}
                            tercaUntil={tercaUntil}

                            quartaOpen={quartaOpen}
                            setQuartaOpen={setQuartaOpen}
                            setQuartaFrom={setQuartaFrom}
                            quartaFrom={quartaFrom}
                            setQuartaUntil={setQuartaUntil}
                            quartaUntil={quartaUntil}

                            quintaOpen={quintaOpen}
                            setQuintaOpen={setQuintaOpen}
                            setQuintaFrom={setQuintaFrom}
                            quintaFrom={quintaFrom}
                            setQuintaUntil={setQuintaUntil}
                            quintaUntil={quintaUntil}

                            sextaOpen={sextaOpen}
                            setSextaOpen={setSextaOpen}
                            setSextaFrom={setSextaFrom}
                            sextaFrom={sextaFrom}
                            setSextaUntil={setSextaUntil}
                            sextaUntil={sextaUntil}

                            sabadoOpen={sabadoOpen}
                            setSabadoOpen={setSabadoOpen}
                            setSabadoFrom={setSabadoFrom}
                            sabadoFrom={sabadoFrom}
                            setSabadoUntil={setSabadoUntil}
                            sabadoUntil={sabadoUntil}
                        />
                    }

                    {
                        type === 'event' &&
                        <NextEvent />
                    }


                    <CardFormAddress
                        cep={cep}
                        setCep={setCep}
                        street={rua}
                        setStreet={setRua}
                        district={bairro}
                        setDistrict={setBairro}
                        number={numero}
                        setNumber={setNumero}
                        map
                    />

                    {
                        type === 'food' &&
                        <>
                            <label>Telefone</label>
                            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </>
                    }

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

            {
                deleteTriggered &&
                <OverlayDelete
                    title="Excluir local"
                    text={`Tem certeza que quer excluir o local ${name}?`}
                    setDeletTriggered={setDeleteTriggered}
                    handleDelete={deletePlace}
                />
            }
        </Container>
    )
}