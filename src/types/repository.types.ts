import { User, UserDTO } from "./user.types";

export type RepositoryVisibility = "public" | "private" | "internal";

export interface RepositoryDTO {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: UserDTO;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    open_issues_count: number;
    language: string | null;
    default_branch: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    size: number;
    topics?: string[];
    visibility: RepositoryVisibility;
}

export interface Repository {
    id: number;
    nodeId: string;
    name: string;
    fullName: string;
    private: boolean;
    owner: User;
    url: string;
    description: string | null;
    fork: boolean;
    apiUrl: string;
    stargazersCount: number;
    watchersCount: number;
    forksCount: number;
    openIssuesCount: number;
    language: string | null;
    defaultBranch: string;
    createdAt: string;
    updatedAt: string;
    pushedAt: string;
    size: number;
    topics?: string[];
    visibility: RepositoryVisibility;
}