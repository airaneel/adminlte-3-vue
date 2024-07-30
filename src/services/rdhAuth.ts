import instance from '@/utils/rdhaxios';
import Cookies from 'js-cookie';
import { LoginResponse } from './rdhAuth/interfaces/auth';
import { useRauthStore } from '@/rdhStore/auth';

// Функция для входа с использованием имени пользователя и пароля
export const login = async (username: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await instance.post<LoginResponse>('/api/token/', {
            username,
            password,
        });
        const { access, refresh } = response.data;
        setTokens(access, refresh);
        return response.data;
    } catch (error) {
        return handleError(error as Error);
    }
};

// Функция для регистрации с использованием email и пароля
export const registerWithEmail = async (email: string, password: string): Promise<void> => {
    try {
        await instance.post('/api/register/', {
            email,
            password,
        });
    } catch (error) {
        return handleError(error as Error);
    }
};

// Функция для обновления access токена с использованием refresh токена
export const refreshAccessToken = async (): Promise<string> => {
    try {
        const refreshToken = Cookies.get('refreshToken');
        if (!refreshToken) throw new Error('No refresh token available');

        const response = await instance.post<{ access: string }>('/auth/token/refresh/', {
            refresh: refreshToken,
        });
        const { access } = response.data;
        Cookies.set('accessToken', access, { expires: 7, secure: true, sameSite: 'Strict' });
        return access;
    } catch (error) {
        return handleError(error as Error);
    }
};

export const logout = (): void => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    useRauthStore().setIsLoggedIn(false);
    useRauthStore().setCurrentUser(null);
};

// Вспомогательная функция для установки токенов в cookies
const setTokens = (access: string, refresh: string): void => {
    Cookies.set('accessToken', access, { expires: 7, secure: true, sameSite: 'Strict' });
    Cookies.set('refreshToken', refresh, { expires: 7, secure: true, sameSite: 'Strict' });
};

// Вспомогательная функция для обработки ошибок
const handleError = (error: Error): never => {
    // Логирование ошибки или другие действия
    throw error;
};