import { AiFillStar } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'
import { CardBottom } from './styles'

interface ReviewModalCardProps {
    onRequestClose: () => void;
    name: string;
    review: string;
    score: string;
    avatar: string | null;
}

export function ReviewModalCard({ onRequestClose, score, name, review, avatar }: ReviewModalCardProps) {
    return (
        <>
            <CardBottom>
                <div className="first">
                    {
                        avatar ? <img src={avatar} alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                    }
                </div>

                <div className="second">
                    <h3>{name}</h3>
                    <p>{review}</p>
                    {
                        Number(score) === 1 && <AiFillStar />
                    }
                    {
                        Number(score) === 2 && <><AiFillStar /><AiFillStar /></>
                    }
                    {
                        Number(score) === 3 && <><AiFillStar /><AiFillStar /><AiFillStar /></>
                    }
                    {
                        Number(score) === 4 && <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></>
                    }
                    {
                        Number(score) === 5 && <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></>
                    }

                </div>
            </CardBottom>
        </>
    )
}
