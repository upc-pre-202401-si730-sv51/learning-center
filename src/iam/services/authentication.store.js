import {AuthenticationService} from "./authentication.service.js";
import {defineStore} from "pinia";
import {SignInResponse} from "../model/sign-in.response.js";
import {SignUpResponse} from "../model/sign-up.response.js";

const authenticationService = new AuthenticationService();
/**
 * Store definition for authentication
 * @description This store is used to manage the state of the user's authentication
 * @summary This store is used to manage the state of the user's authentication. It includes:
 * - The user's signed in status
 * - The user's ID
 * - The user's username
 * - The sign-in action
 * - The sign-up action
 * - The sign-out action
 */
export const useAuthenticationStore = defineStore({
    id: 'authentication',
    state: () => ({ signedIn: false, userId: 0, username: ''}),
    getters: {
        isSignedIn: (state) => state['signedIn'],
        currentUserId: (state) => state['userId'],
        currentUsername: (state) => state['username']
    },
    actions: {
        /**
         * Sign in a user
         * @param {SignInRequest} signInRequest - The sign-in request
         * @param {Router} router - The router object
         */
        async signIn(signInRequest, router) {
            authenticationService.signIn(signInRequest)
                .then(response => {
                    let signInResponse = new SignInResponse(response.data.id, response.data.username, response.data.token);
                    this.signedIn = true;
                    this.userId = signInResponse.id;
                    this.username = signInResponse.username;
                    localStorage.setItem('token', signInResponse.token);
                    console.log(signInResponse);
                    router.push({name: 'home'});
                })
                .catch(error => {
                    console.log(error);
                    router.push({name: 'sign-in'});
                });
        },
        /**
         * Sign up a user
         * @param {SignUpRequest} signUpRequest - The sign-up request
         * @param {Router} router - The router object
         */
        async signUp(signUpRequest, router) {
            authenticationService.signUp(signUpRequest)
                .then(response => {
                    let signUpResponse = new SignUpResponse(response.data.message);
                    console.log(signUpResponse);
                    router.push({name: 'sign-in'});
                })
                .catch(error => {
                    console.log(error);
                    router.push({name: 'sign-up'});
                });
        },
        /**
         * Sign out a user
         * @param {Router} router - The router object
         */
        async signOut(router) {
            this.signedIn = false;
            this.userId = 0;
            this.username = '';
            localStorage.removeItem('token');
            await router.push({name: 'sign-in'});
        }
    }
})