export const DEFAULT_BACKGROUND_COLOR = "#fffef8";
export const SOFT_SECTION_BACKGROUND_COLOR = "#fffdf4";
export const SURFACE_COLOR = "#fffefb";
export const SOFT_SURFACE_COLOR = "#fffdf6";
export const BORDER_COLOR = "#f0eadc";
export const TEXT_COLOR = "#24211c";
export const MUTED_TEXT_COLOR = "#6f6a60";

export function setBackgroundColor(color = DEFAULT_BACKGROUND_COLOR) {
    return `background-color: ${color || DEFAULT_BACKGROUND_COLOR};`;
}

export function getColor() {
    let color = localStorage.getItem("color");
    if (!color) color = "#D1E9F6";
    return color
}

export function getLogo() {
    let icon = localStorage.getItem("icon");
    if (!icon) icon = "cat.png";
    return icon
}

export function getProfile() {
    let profile = localStorage.getItem("profile");
    if (!profile) profile = "profile3.jpg";
    return profile
}
