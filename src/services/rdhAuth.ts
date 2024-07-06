import instance from '@/utils/axios';


import type { LoginResponse } from './interfaces/auth';
import useGlobalStore from '@/stores/appStore';




// Функция для входа с использованием имени пользователя и пароля
export const loginWithUsername = async (username: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await instance.post<LoginResponse>('/api/token/', {
            username,
            password,
        });
        const { access, refresh } = response.data;
        setTokens(access, refresh);
        return response.data;
    } catch (error) {
        return handleError(error);
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
        return handleError(error);
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
        return handleError(error);
    }
};

export const logout = (): void => {
    const store = useGlobalStore();

    // Удаление токенов из cookies
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');

    // Обновление состояния глобального хранилища
    store.isLoggedIn = false;
};

// Вспомогательная функция для установки токенов в cookies
const setTokens = (access: string, refresh: string): void => {
    Cookies.set('accessToken', access, { expires: 7, secure: true, sameSite: 'Strict' });
    Cookies.set('refreshToken', refresh, { expires: 7, secure: true, sameSite: 'Strict' });
};

// Вспомогательная функция для обработки ошибок
const handleError = (error: any): never => {
    // Логирование ошибки или другие действия
    throw error;
};
