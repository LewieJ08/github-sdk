import { 
    PullRequest, 
    PullRequestDTO, 
    BranchRef, 
    BranchRefDTO,
    PullRequestFileDTO,
    PullRequestFile
} from "../types/pullrequest.types"
import { mapUser } from "./user.mapper"

export function mapBranchRef(dto: BranchRefDTO): BranchRef {
    return {
        ref: dto.ref,
        sha: dto.sha
    }
}

export function mapPullRequest(dto: PullRequestDTO): PullRequest {
    return {
        id: dto.id,
        nodeId: dto.node_id,
        number: dto.number,
        state: dto.state,
        isLocked: dto.locked,
        isDraft: dto.draft,
        title: dto.title,
        body: dto.body,
        user: mapUser(dto.user),
        url: dto.html_url,
        apiUrl: dto.url,
        comments:dto.comments,
        commits:dto.commits,
        additions: dto.additions,
        deletions: dto.deletions,
        changedFiles: dto.changed_files,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
        closedAt: dto.closed_at,
        mergedAt: dto.merged_at,
        isMerged: dto.merged,
        head: mapBranchRef(dto.head),
        base: mapBranchRef(dto.base)
    }   
}

export function mapPullRequests(dtos: PullRequestDTO[]): PullRequest[] {
    return dtos.map(dto => mapPullRequest(dto))
}

export function mapPullRequestFile(dto: PullRequestFileDTO): PullRequestFile{
    return {
        sha: dto.sha,
        name: dto.filename,
        status: dto.status,
        additions: dto.additions,
        deletions: dto.deletions,
        changes: dto.changes,
        blobUrl: dto.blob_url,
        rawUrl: dto.raw_url,
        patch: dto.patch
    }
}

export function mapPullRequestFiles(dtos: PullRequestFileDTO[]): PullRequestFile[] {
    return dtos.map(dto => mapPullRequestFile(dto))
}
