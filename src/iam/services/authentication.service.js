import http from "../../shared/services/http-common.js";

/**
 * @class AuthenticationService
 * @description Authentication service class
 * @summary This class is responsible for handling authentication related operations.
 * @author Angel Velasquez
 */
export class AuthenticationService {
    /**
     * @method signIn
     * @description This method is responsible for signing in the user.
     * @param signInRequest {SignInRequest} - The sign in request object.
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    signIn(signInRequest) {
        return http.post('/authentication/sign-in/', signInRequest);
    }

    /**
     * @method signUp
     * @description This method is responsible for signing up the user.
     * @param signUpRequest {SignUpRequest} - The sign-up request object.
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    signUp(signUpRequest) {
        return http.post('/authentication/sign-up/', signUpRequest);
    }
}