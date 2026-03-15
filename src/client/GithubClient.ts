import { request } from "../utils/request.utils";

export class GithubClient {
    private readonly token: string;
    public readonly baseUrl: string;

    constructor(token: string) {
        this.token = token;
        this.baseUrl = 'https://api.github.com'
    }

    public async request<T>(path: string, options: RequestInit): Promise<T> {
        return request<T>(`${this.baseUrl, path}`, options, this.token)
    }
}