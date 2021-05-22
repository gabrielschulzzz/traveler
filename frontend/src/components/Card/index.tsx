import { CardElement } from './styles'
import { BsFillStarFill } from 'react-icons/bs';
import { FiCoffee } from 'react-icons/fi'
import { AiOutlineCamera, AiOutlineCalendar, AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom';


interface CardProps {
    image: string | null;
    title: string;
    places?: string;
    rating?: string;
    category?: string;
    iconDelete?: boolean;
    iconDeleteLink?: string;
    iconEdit?: boolean;
    iconEditLink?: string;
    email?: string;
}

export function Card({ image, places, title, rating, category, iconDelete, iconEdit, iconDeleteLink, iconEditLink, email }: CardProps) {
    return (
        <CardElement>
            {image
                ? <img src={image} alt={title} />
                : <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt={title} />}

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

                {
                    email && <p>{email}</p>
                }

                {places ? <p>{places} {places.length === 1 ? 'local' : 'locais'}</p> : ''}

                {category
                    ?
                    <div className="card-bottom">
                        <p> {category === 'food' ? 'Comidas e bebidas' : ''}
                            {category === 'turistic' ? 'Pontos Turisticos' : ''}
                            {category === 'event' ? 'Eventos Organizados' : ''}
                        </p>
                        {category === 'food' ? <FiCoffee /> : ''}
                        {category === 'turistic' ? <AiOutlineCamera /> : ''}
                        {category === 'event' ? <AiOutlineCalendar /> : ''}

                    </div>
                    : ''

                }

                {
                    iconEdit
                        ?
                        <Link to={`${iconEditLink}`}>
                            <div className="iconEdit">
                                <AiOutlineEdit />
                            </div>
                        </Link>
                        : null
                }
            </div>
        </CardElement>
    )
}