import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { useHistory } from 'react-router-dom';

type Place = {
    name: string;
    photo: string;
}

type Review = {
    id: string;
    review: string;
    score: string;
    place: Place;
}

type User = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: string;
    reviews: Review[];
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    user: User | undefined | null;
    isAuthenticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>();
    const isAuthenticated = !!user;
    let history = useHistory();

    useEffect(() => {
        async function getUser() {
            const jwt = localStorage.getItem("traveler");

            if (jwt) {
                const user = await api.get('/users/me', { headers: { "Authorization": `Bearer ${jwt}` } })
                api.defaults.headers.authorization = `Bearer ${jwt}`;

                setUser({
                    id: user.data.id,
                    name: user.data.name,
                    email: user.data.email,
                    avatar: user.data.avatar,
                    role: user.data.role,
                    reviews: user.data.reviews
                });
            }

        }
        getUser()
    }, [])

    type UserResponse = {
        data: User
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem("traveler");
        history.push('/')
    }


    async function signIn({ email, password }: SignInCredentials) {
        try {
            const response = await api.post('/sessions', {
                email, password
            })

            const user: UserResponse = await api.get('/users/me', { headers: { "Authorization": `Bearer ${response.data.token}` } })

            localStorage.setItem("traveler", response.data.token);

            setUser({
                id: user.data.id,
                name: user.data.name,
                email: user.data.email,
                avatar: user.data.avatar,
                role: user.data.role,
                reviews: user.data.reviews
            });

            if (user.data.role === "user") {
                history.push('/user/dashboard')
            }

            if (user.data.role === "admin") {
                history.push('/dashboard')
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, user, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}