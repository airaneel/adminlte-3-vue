import { UserData } from "@/types/user";


export interface LoginResponse {
    access: string;
    refresh: string;
    user?: UserData;
}

export interface RefreshTokenResponse {
    access: string;
}
