export function getColor() {
    let color = localStorage.getItem("color");
    if (!color) color = "#D1E9F6";
    return color
}