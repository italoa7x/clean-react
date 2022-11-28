import { AccountModel } from "domain/models/Account-model"

type AuthenticatonParams = {
    email: string,
    password: string
}
export interface Authenticaton {
    auth(params: AuthenticatonParams): Promise<AccountModel>;

}