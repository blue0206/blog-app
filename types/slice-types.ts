import { UserData } from "./auth-service-types.ts";

export type AuthState = {
    status: boolean;
    userData: object | null;
}

export type AuthAction = {
    payload: UserData;
}