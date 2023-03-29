import { writable } from "svelte/store";
import { projectImages } from "./projectImages";

export const selectedProject = writable(projectImages[0]);
