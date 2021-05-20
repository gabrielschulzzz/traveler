import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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
    getUser(): void;
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
    const notify = () => toast.error("Usuario ou senha incorretos!");

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

    useEffect(() => {
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

            localStorage.setItem("traveler", response.data.token);
            api.defaults.headers.authorization = `Bearer ${response.data.token}`;

            const user: UserResponse = await api.get('/users/me')


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
            if (error.response.data.message === "User or password incorrect") {
                notify()
            }
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, user, signOut, getUser }}>
            {children}
        </AuthContext.Provider>
    )
}