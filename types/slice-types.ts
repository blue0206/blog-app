import { UserData } from "./auth-service-types.ts";

export type AuthState = {
    status: boolean;
    userData: object | null;
}

export type State = {
    auth: AuthState;
}

export type AuthAction = {
    payload: UserData;
}