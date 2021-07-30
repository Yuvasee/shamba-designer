export type DrumColor = "gray" | "black" | "white";

export type Pattern = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type Scale = {
    id: ScaleId;
    title: string;
    notes: string[];
};

export type State = {
    scale: ScaleId;
    drumColor: DrumColor;
    pattern: Pattern;
    patternColor: PatternColorId;
};

export type Action = {
    type: string;
    payload?: object;
};

export type ScaleId =
    | "akebonoC"
    | "akebonoD"
    | "pygmyC"
    | "pygmyD"
    | "minorPentC"
    | "minorPentD"
    | "majorPentC"
    | "majorPentD"
    | "phrygianE"
    | "majorC";

export type PatternColorId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
