import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { CardsContainer } from "../../components/CardsContainer";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardNavbar } from "../../components/DashboardNavbar";
import { ReviewCardAdmin } from "../../components/ReviewCardAdmin";
import { api } from "../../services/api";

interface Place {
    name: string;
    photo: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
}

interface ReviewAtributes {
    id: string;
    review: string;
    score: string;
    place: Place;
    user: User;
}

export function AdminDashboardReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('/reviews')

            setReviews(result.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <DashboardNavbar />

            <DashboardHeader>
                <h1>Reviews</h1>
            </DashboardHeader>


            <CardsContainer>


                {
                    reviews && reviews.map((review: ReviewAtributes) => (
                        <ReviewCardAdmin
                            key={review.id}
                            review={review}
                        />
                    ))
                }

            </CardsContainer>

        </>
    )
}