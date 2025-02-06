export interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostParams {
    _limit?: number;
    _start?: number;
}
