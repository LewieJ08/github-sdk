import { request } from "../utils/request.utils";

interface GithubClientConfig {
    token: string
}

export class GithubClient {
    private readonly token: string;
    public readonly baseUrl: string;

    constructor(config: GithubClientConfig) {
        this.token = config.token;
        this.baseUrl = 'https://api.github.com'
    }

    public async request<T>(path: string, options: RequestInit): Promise<T> {
        return request<T>(`${this.baseUrl, path}`, options, this.token)
    }
}