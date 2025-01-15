import conf from "../conf/conf.ts";
import { Client, Account, ID } from "appwrite";
import {CreateAccount, EmailLogin} from "../../types/auth-service-types.ts";

export class AuthService {
    client: Client = new Client();
    account: Account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: CreateAccount): Promise<unknown> {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (!userAccount) {
                throw new Error("Failed to create account.");
            }
            return this.login({ email, password });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login({ email, password }: EmailLogin): Promise<unknown> {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: Error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: Logout :: Error", error);
        }
    }
}

const authService = new AuthService();

export default authService;