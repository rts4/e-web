async function get(url: string): Promise<any> {
    const res = await fetch(url, { method: "GET", mode: "cors" });
    switch (res.status) {
        case 200: return res.json();
        case 404: return 404;
        case 400: return 400;
        default: return null;
    }
}

export async function getElementName(name: string): Promise<any> {
    const element = get(`https://api.techhh.ca/element/name/${name}`);
    return element;
}

export function getElementAtomicNumber(atomicNumber: number): Promise<any> {
    const element = get(`https://api.techhh.ca/element/atomic-number?atomic_number=${atomicNumber}`);
    return element;
}