export interface Series {
    x: string;
    y: string;
}
export interface Strategies {
    title: string;
    series: Series[];
    returns: number;
    sharpie: number;
    maxDD: number;
}

export interface Article {
    id: string;
    titles: string[];
    title: string;
}
