import { Language } from "./language";

export interface Project {
    id: string,
    name: string,
    image: string,
    url?: string,
    repository?: string,
    pro: boolean,
    description: string,
    devTools?: Language[],
}
