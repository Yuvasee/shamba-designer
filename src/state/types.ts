import { Sound } from "./sound";

export type DrumColor = "gray" | "black" | "white";

export type Pattern = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type Scale = {
    id: ScaleId;
    title: string;
    notes: NoteId[];
};

export type State = {
    verticalView: boolean;
    mainState: "splash" | "main";
    scale: ScaleId;
    color: DrumColor;
    pattern?: Pattern;
    patternColor: PatternColorId;
    sound: Sound;
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

export type NoteId =
    | "C4"
    | "D4"
    | "D#4"
    | "G4"
    | "G#4"
    | "C5"
    | "D5"
    | "D#5"
    | "E4"
    | "F4"
    | "A4"
    | "A#4"
    | "E5"
    | "F5"
    | "G5"
    | "F#4"
    | "B4"
    | "F#5";
