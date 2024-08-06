import Cookies from "js-cookie";
import { useRauthStore } from "@/store/auth";
import logger from "@/utils/logger";
import { AuthApi } from "@/api";
import config from "./apiConf";
import { handleError } from "@/utils/helpers";

const AuthService = new AuthApi(config);

export const login = async (username: string, password: string) => {
    await AuthService.authTokenCreate({
        data: {
            username,
            password,
        },
    })
        .then((response) => {
            logger.debug("Loging in with username: " + username);
            logger.debug("Loging in with pasword: " + password);
            Cookies.set("accessToken", response.access, {
                expires: 7,
                secure: true,
                sameSite: "Strict",
            });
            Cookies.set("refreshToken", response.refresh, {
                expires: 30,
                secure: true,
                sameSite: "Strict",
            });
            logger.debug(
                "Got access token and refresh token :" +
                response.access +
                " and " +
                response.refresh
            );
            useRauthStore().setIsLoggedIn(true);
        })
        .catch((error) => {
            return handleError(error as Error);
        })
        .finally(() => {
            logger.info("Logged in successfully");
        });
};

export const refreshToken = async () => {
    await AuthService.authTokenRefreshCreate({
        data: {
            refresh: Cookies.get("refreshToken") || "",
        },
    })
        .then((response) => {
            logger.debug("Got refreshed access token: " + response.access);
            setTokens(response.access, Cookies.get("refreshToken") || "");
        })
        .catch((error) => {
            return handleError(error as Error);
        })
        .finally(() => {
            logger.info("Refreshed token successfully");
        });
};

export const logout = (): void => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    useRauthStore().setIsLoggedIn(false);
    useRauthStore().setCurrentUser(null);
};

// Вспомогательная функция для установки токенов в cookies
const setTokens = (access: string, refresh: string): void => {
    Cookies.set("accessToken", access, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
    });
    Cookies.set("refreshToken", refresh, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
    });
};
