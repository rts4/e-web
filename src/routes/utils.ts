export function roundTwo(i: number): number {
    return +(Math.round(Number(i.toString() + "e+2")) + "e+2");
}