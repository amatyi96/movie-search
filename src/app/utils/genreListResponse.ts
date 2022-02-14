export interface GenreListResponse {
    genres: Array<GenreListItem>
}

export interface GenreListItem {
    id: number;
    name: string;
}
