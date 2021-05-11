import { AiOutlineCalendar, AiOutlineCamera } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { HeroDescription } from "../../pages/City/styles";

interface CityDescriptionAndStatsProps {
    cityName: string;
    cityDescription: string;
    cityFact: string;
    cityTuristicNumber: number;
    cityFoodNumber: number;
    cityEventsNumber: number;
}

export function CityDescriptionAndStats({ cityDescription, cityEventsNumber, cityFact, cityFoodNumber, cityName, cityTuristicNumber }: CityDescriptionAndStatsProps) {
    return (
        <HeroDescription>
            <div className="left">
                <h1>{cityName}</h1>
                <p className="subtitle">{cityDescription}</p>
                <p className="complement">{cityFact}</p>
            </div>

            <div className="right">
                <div>
                    <AiOutlineCamera />
                    <div>
                        <h3>{cityTuristicNumber}</h3>
                        <p>Pontos turisticos</p>
                    </div>
                </div>

                <div>
                    <FiCoffee />
                    <div>
                        <h3>{cityFoodNumber}</h3>
                        <p>Comida e Bebida</p>
                    </div>
                </div>

                <div>
                    <AiOutlineCalendar />
                    <div>
                        <h3>{cityEventsNumber}</h3>
                        <p>Eventos</p>
                    </div>
                </div>
            </div>
        </HeroDescription>
    )
}