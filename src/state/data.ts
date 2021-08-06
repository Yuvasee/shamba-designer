import { DrumColor, NoteId, Scale, ScaleId } from "./types";

export const scales: Record<ScaleId, Scale> = {
    akebonoC: {
        id: "akebonoC",
        title: "Akebono - C",
        notes: ["C4", "D4", "D#4", "G4", "G#4", "C5", "D5", "D#5"],
    },

    akebonoD: {
        id: "akebonoD",
        title: "Akebono - D",
        notes: ["D4", "E4", "F4", "A4", "A#4", "D5", "E5", "F5"],
    },

    pygmyC: {
        id: "pygmyC",
        title: "Pygmy - C",
        notes: ["C4", "D4", "D#4", "G4", "A#4", "C5", "D5", "D#5"],
    },

    pygmyD: {
        id: "pygmyD",
        title: "Pygmy - D",
        notes: ["D4", "E4", "F4", "A4", "C5", "D5", "E5", "F5"],
    },

    minorPentC: {
        id: "minorPentC",
        title: "Minor Pentatonic - C",
        notes: ["C4", "D#4", "F4", "G4", "A#4", "C5", "D#5", "F5"],
    },

    minorPentD: {
        id: "minorPentD",
        title: "Minor Pentatonic - D",
        notes: ["D4", "F4", "G4", "A4", "C5", "D5", "F5", "G5"],
    },

    majorPentC: {
        id: "majorPentC",
        title: "Major Pentatonic - C",
        notes: ["C4", "D4", "E4", "G4", "A4", "C5", "D5", "E5"],
    },

    majorPentD: {
        id: "majorPentD",
        title: "Major Pentatonic - D",
        notes: ["D4", "E4", "F#4", "A4", "B4", "D5", "E5", "F#5"],
    },

    phrygianE: {
        id: "phrygianE",
        title: "Phrygian E",
        notes: ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"],
    },

    majorC: {
        id: "majorC",
        title: "C Major",
        notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
    },
};

export const patternColors = [
    "#f6f6f1",
    "#d90007",
    "#ff8000",
    "#fcff00",
    "#96ff00",
    "#00ffd2",
    "#ea00ff",
    "#000",
];

export const drumColors: DrumColor[] = ["gray", "black", "white"];

export const allNotes: NoteId[] = [
    "C4",
    "D4",
    "D#4",
    "G4",
    "G#4",
    "C5",
    "D5",
    "D#5",
    "E4",
    "F4",
    "A4",
    "A#4",
    "E5",
    "F5",
    "G5",
    "F#4",
    "B4",
    "F#5",
];
