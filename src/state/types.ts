export type DrumColor = "Gray" | "Black" | "White";

export type Pattern = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type Scale = {
    id: ScaleId;
    title: string;
    notes: string[];
};

export type State = {
    verticalView: boolean;
    mainState: "splash" | "main";
    scale: ScaleId;
    color: DrumColor;
    pattern: Pattern;
    patternColor: PatternColorId;
};

export type ActionType =
    | "setPattern"
    | "setPatternColor"
    | "setColor"
    | "setScale"
    | "verticalView";

export type Action = {
    type: ActionType;
    payload?: any;
};

export type ActionMap = Record<ActionType, (state: State, payload: any) => State>;

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
