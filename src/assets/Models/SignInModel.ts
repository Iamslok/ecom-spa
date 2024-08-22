export class SignInDto{
    UserEmailId : string | undefined;
    UserPassword : string | undefined
}

export class TokenModel {
    TokenValidity:Date | undefined;
    Token: string | undefined
}