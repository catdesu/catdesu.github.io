import { Language } from "./language";

export interface Career {
    title: string,
    duration: string,
    job: string,
    orientation: string,
    description: string,
    languages?: Language[],
    location: string
}
