import { IoCloseSharp } from "react-icons/io5";
import { CardTop, CardBody } from './styles';
import Modal from "react-modal";
import { useState } from "react";
import { api } from "../../services/api";

interface currentCityPlacesType {
    id: string;
    name: string;
    category: string;
    photo: string;
    description: string;
}

interface currentCityType {
    id: string;
    photo: string;
    name: string;
    fact: string;
    description: string;
    places: currentCityPlacesType[];
    highlight: highlightType;
}

interface highlightType {
    id: string;
    photo: string;
    name: string;
    description: string;
}

interface HighlightModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    places: currentCityPlacesType[];
    currentCity: currentCityType;
    cityId: string;
    setCurrentCity: React.Dispatch<React.SetStateAction<currentCityType>>;
}

export function HighlightModal({ isOpen, onRequestClose, places, currentCity, cityId, setCurrentCity }: HighlightModalProps) {
    const [activeHighlight, setActiveHighlight] = useState('');

    async function handleSetNewHighlight(id: string, description: string, photo: string, name: string) {
        await api.put(`cities/${cityId}`, {
            name: currentCity.name,
            description: currentCity.description,
            fact: currentCity.fact,
            photo: currentCity.photo,
            highlight: id,
        })

        setCurrentCity({
            id: cityId,
            name: currentCity.name,
            description: currentCity.description,
            fact: currentCity.fact,
            photo: currentCity.photo,
            places,
            highlight: {
                id,
                description,
                name,
                photo
            }
        })
        onRequestClose()
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
                    <h3>Adicionar destaque</h3>
                </div>

                <div className="second">
                    <button className="close" onClick={onRequestClose}><IoCloseSharp /></button>
                </div>
            </CardTop>

            {
                places && <CardBody>
                    {places.map(place => (
                        <div className="place-card" onClick={() => handleSetNewHighlight(place.id, place.description, place.photo, place.name)}>
                            <h2>{place.name}</h2>
                            <img src={place.photo} alt="" />
                        </div>
                    ))}
                </CardBody>
            }

        </Modal>
    )
}