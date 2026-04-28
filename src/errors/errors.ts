import { GithubClientConfig } from "../client/GithubClient";

type ConfigKeys = keyof GithubClientConfig;

export class GithubSdkError extends Error {
    public readonly exitCode: number;

    constructor(message: string, exitCode: number = 1) {
        super(`github-sdk: ${message}`);
        this.exitCode = exitCode;
        this.name = 'GithubSDKError';
    }
} 

export class GithubApiError extends GithubSdkError {
    public readonly status: number;
    public readonly documentationUrl?: string;
    public readonly details?: unknown

    constructor(
        status: number,
        message: string,
        documentationUrl?: string,
        details?: unknown
    ) {
        super(`GitHub API error (${status}): ${message}`);
        this.name = 'GithubApiError';
        this.status = status;
        this.documentationUrl = documentationUrl;
        this.details = details;
    }
}

export class InvalidTokenError extends GithubSdkError {
    constructor() {
        super('Invalid GitHub Token');
        this.name = 'InvalidTokenError';
    }
}

export class MissingConfigError extends GithubSdkError {
    constructor(properties: ConfigKeys[]) {
        super(`GithubClient is missing service dependent config properties: ${properties}`);
        this.name = 'MissingConfigError';
    }
}