export interface Series {
    x: string;
    y: string;
}
export interface Strategies {
    title: string;
    series: number[][];
    returns: number;
    sharpie: number;
    maxDD: number;
}

export interface Article {
    id: string;
    studies: string[];
    title: string;
    article: string;
    discussion: string;
}
