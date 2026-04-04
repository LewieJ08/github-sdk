import { GithubClient } from "../client/GithubClient";
import { mapRepository } from "../mappers/repository.mapper";
import { Repository, RepositoryDTO } from "../types/repository.types";

interface CreateRepositoryParams {
    name: string;
    description?: string;
    homepage?: string;
    privateRepo: boolean;
    visibility?: 'public' | 'private';
    hasIssues?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    hasDownloads?: boolean;
    isTemplate?: boolean;
    teamId?: number;
    autoInit?: boolean;
    gitignoreTemplate?: string;
    licenseTemplate?: string;
    allowSquashMerge?: boolean;
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowAutoMerge?: boolean;
    deleteBranchOnMerge?: boolean;
    squashMergeCommitTitle?: string;
    mergeCommitTitle?: string;
    mergeCommitMessage?: string;
}

export class RepositoryService {
    private readonly path: string;
    private readonly authPath: string;
    private readonly orgPath: string;

    constructor(private readonly client: GithubClient) { 
        this.path = `repos/${client.config.owner}/${client.config.repo}`
        this.authPath = '/user/repos';
        this.orgPath = `/orgs/${client.config.org}/repos`;
    }

    /**
     * List repositories for the specified organisation
     * @returns Data of repository
     * 
     * @example
     * ```ts 
     * const repository = await github.repositories.listOrg();
     * ```
     */
    public async listOrg(): Promise<Repository> {
        const response = await this.client.request<RepositoryDTO>(this.orgPath);
        return mapRepository(response.data);
    }

    /**
     * Create new repository for an organisation
     * @param params Create organisation repository params object
     * @param params.name
     * @param params.description
     * @param params.homepage
     * @param params.privateRepo
     * @param params.visibility
     * @param params.hasIssues
     * @param params.hasProjects
     * @param params.hasWiki
     * @param params.hasDownloads
     * @param params.isTemplate
     * @param params.teamId
     * @param params.autoInit
     * @param params.gitignoreTemplate
     * @param params.licenseTemplate
     * @param params.allowSquashMerge
     * @param params.allowMergeCommit
     * @param params.allowRebaseMerge
     * @param params.allowAutoMerge
     * @param params.deleteBranchOnMerge
     * @param params.squashMergeCommitTitle
     * @param params.mergeCommitTitle
     * @param params.mergeCommitMessage
     * @returns Data of new repository
     * 
     * @example
     * ```ts
     * await github.repositories.createOrg({
     *     name: 'new-repo',
     *     description: 'this project is very cool'
     * });
     * ```
     */
    public async createOrg(params: CreateRepositoryParams): Promise<Repository> {
        const { 
            name,
            description,
            homepage,
            privateRepo,
            visibility,
            hasIssues,
            hasProjects,
            hasWiki,
            hasDownloads,
            isTemplate,
            teamId,
            autoInit,
            gitignoreTemplate,
            licenseTemplate,
            allowSquashMerge,
            allowMergeCommit,
            allowRebaseMerge,
            allowAutoMerge,
            deleteBranchOnMerge,
            squashMergeCommitTitle,
            mergeCommitTitle,
            mergeCommitMessage,
        } = params;
        const response =  await this.client.request<RepositoryDTO>(this.orgPath, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                description: description,
                homepage: homepage,
                private: privateRepo,
                visibility: visibility,
                has_issues: hasIssues,
                has_projects: hasProjects,
                has_wiki: hasWiki,
                has_downloads: hasDownloads,
                is_template: isTemplate,
                team_id: teamId,
                auto_init: autoInit,
                gitignore_template: gitignoreTemplate,
                license_template: licenseTemplate,
                allow_squash_merge: allowSquashMerge,
                allow_merge_commit: allowMergeCommit,
                allow_rebase_merge: allowRebaseMerge,
                allow_auto_merge: allowAutoMerge,
                delete_branch_on_merge: deleteBranchOnMerge,
                sqaush_merge_commit_title: squashMergeCommitTitle,
                merge_commit_title: mergeCommitTitle,
                merge_commit_message: mergeCommitMessage
            })
        });
        return mapRepository(response.data);
    }
}