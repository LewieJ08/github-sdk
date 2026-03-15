import { GithubApiError } from "../errors/errors"

interface GithubApiResponse {
    message: string
}

export async function request<T>(
    path: string,
    options: RequestInit, 
    token: string
): Promise<T> {
    const response = await fetch(path, {
        ...options,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github+json',
            ...options.headers
        },
    })

    const data = await response.json() as GithubApiResponse;

    if (!response.ok) {
        throw new GithubApiError(response.status, data.message)
    }

    return data as T
   
}
