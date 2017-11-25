// src/app/core/models/rsvp.model.ts
export class RoomModel {
    constructor(
        public name: string,
        public capacity: number,
        public description?: string,
        public _id?: string
    ) { }
}
