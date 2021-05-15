import { CardElement } from './styles'
import { BsFillStarFill } from 'react-icons/bs';
import { FiCoffee } from 'react-icons/fi'
import { AiOutlineCamera, AiOutlineCalendar, AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom';


interface CardProps {
    image: string;
    title: string;
    places?: string;
    rating?: string;
    category?: string;
    iconDelete?: boolean;
    iconDeleteLink?: string;
    iconEdit?: boolean;
    iconEditLink?: string;
}

export function Card({ image, places, title, rating, category, iconDelete, iconEdit, iconDeleteLink, iconEditLink }: CardProps) {
    return (
        <CardElement>
            <img src={image} alt={title} />
            <div>
                {rating
                    ?
                    <div className="rating">
                        <BsFillStarFill />
                        <p>{rating}</p>
                    </div>
                    : ''
                }
                <h2>{title}</h2>
                {places ? <p>{places} {places.length === 1 ? 'local' : 'locais'}</p> : ''}
                {category
                    ?
                    <div className="card-bottom">
                        <p>{category === 'food' ? 'Comidas e bebidas' : ''}
                            {category === 'turistic' ? 'Pontos Turisticos' : ''}
                            {category === 'events' ? 'Eventos Organizados' : ''}
                        </p>
                        {category === 'food' ? <FiCoffee /> : ''}
                        {category === 'turistic' ? <AiOutlineCamera /> : ''}
                        {category === 'events' ? <AiOutlineCalendar /> : ''}

                    </div>
                    : ''

                }

                {
                    iconEdit
                        ? <div className="iconEdit">
                            <Link to={`${iconEditLink}`}><AiOutlineEdit /></Link>
                        </div>
                        : null
                }
            </div>
        </CardElement>
    )
}