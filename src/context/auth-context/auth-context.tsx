import React, { useState,createContext, useEffect, useCallback } from "react";
import { JwtPayload, jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "src/api/api";

interface UserProps {
    email: string;
    firstName: string;
    lastName: string;
}
interface AuthContextData {
    token: string | null;
    user: UserProps | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
  }

  interface CustomJwtPayload extends JwtPayload {
    exp: number; // Timestamp da expiração
    sub: string; // User ID ou outro identificador
  }

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider ({children}: React.PropsWithChildren) {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProps | null>(null)

    const isAuthenticated = token ? true : false;

    const logout = useCallback(async () => {
        setToken(null);
        setUser(null);
        await AsyncStorage.removeItem('@auth_token');
        await AsyncStorage.removeItem('@user_data');
        delete api.defaults.headers.common['Authorization'];
      }, []);

      const isTokenExpired = useCallback((token: string): boolean => {
        try {
          const decoded = jwtDecode<CustomJwtPayload>(token); 
          const currentTime = Math.floor(Date.now() / 1000); 
          return decoded.exp < currentTime; 
        } catch (error) {
          console.error("Erro ao decodificar token:", error);
          return true; 
        }
      }, []);

    useEffect(() => {
        const loadStoredData = async () => {
          const storedToken = await AsyncStorage.getItem('@auth_token');
          const storageUser = await AsyncStorage.getItem('@user_data');

          if ( storedToken && storageUser ) {
            setToken(storedToken);
            setUser(JSON.parse(storageUser));
            api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          }
        };
    
        loadStoredData();
      }, [isTokenExpired, logout]);

    async function login(email: string, password: string){
        try {
            const response = await api.post('/auth/login',{
                email,
                password
            })
            const { token, user } = response.data;
        
            if (isTokenExpired(token)) {
                throw new Error("Token recebido já está expirado.");
            }
    
            setToken(token);
            setUser(user)
            await AsyncStorage.setItem('@auth_token', token);
            await AsyncStorage.setItem('@user_data', JSON.stringify(user));

            console.log(token)
            console.log(user)
        
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }catch(error) {
            console.error("Erro ao fazer login:", error);
            throw error; 
        }
    } 

    return (
        <AuthContext.Provider value={{token, user, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
