export interface Course {
    id: number;
    name: string;
    publishedDate: Date;
    authors: ReadonlyArray<string>;
}

