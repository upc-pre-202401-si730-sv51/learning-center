import http from "../../shared/services/http-common.js";

/**
 * TutorialsApiService class
 * @description Service class to interact with the tutorials API
 */
export class TutorialsApiService {
    /**
     * Get all tutorials
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAll() {
        return http.get("/tutorials");
    }

    /**
     * Get tutorial by id
     * @param id - id of the tutorial to get
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getById(id) {
        return http.get(`/tutorials/${id}`);
    }

    /**
     * Create a new tutorial
     * @param tutorialResource - tutorial resource to create
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    create(tutorialResource) {
        return http.post("/tutorials", tutorialResource);
    }

    /**
     * Update a tutorial
     * @param id - id of the tutorial to update
     * @param tutorialResource - updated tutorial resource
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, tutorialResource) {
        return http.put(`/tutorials/${id}`, tutorialResource);
    }

    /**
     * Delete a tutorial
     * @param id - id of the tutorial to delete
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}