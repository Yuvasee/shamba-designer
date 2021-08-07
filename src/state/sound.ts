import { Howl } from "howler";

import { allNotes } from "./data";
import { NoteId } from "./types";

export class Sound {
    byNote: Partial<Record<NoteId, Howl>> = {};

    constructor() {
        allNotes.forEach((note) => {
            const fileName = `${note.replace("#", "_diez")}_000.mp3`;

            this.byNote[note] = new Howl({
                src: `/assets/sound/${fileName}`,
            });
        });

        this.fixFirstPlayDelay();
    }

    playNote(note: NoteId) {
        this.byNote[note]?.play();
    }

    fixFirstPlayDelay() {
        this.byNote.A4!.volume(0);
        this.byNote.A4!.play();

        setTimeout(() => {
            this.byNote.A4!.stop();
            this.byNote.A4!.volume(1);
        }, 500);
    }
}
