import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { CardsContainer } from "../../components/CardsContainer";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardNavbar } from "../../components/DashboardNavbar";
import { api } from "../../services/api";

interface UserAttributes {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
}

export function AdminDashboardUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('/users')

            setUsers(result.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <DashboardNavbar />

            <DashboardHeader>
                <h1>Usuarios</h1>
            </DashboardHeader>


            <CardsContainer>


                {
                    users && users.map((user: UserAttributes) => (
                        <Card
                            key={user.id}
                            image={user.avatar}
                            title={user.name}
                            email={user.email}
                        />
                    ))
                }

            </CardsContainer>

        </>
    )
}