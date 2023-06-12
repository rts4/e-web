async function get(url: string, data = {}): Promise<any|null> {
    const res = await fetch(url, { method: "GET", mode: "cors" });
    if (res.status === 404 || res.status === 400) return null;
    return res.json();
}

export async function getElementName(name: string): Promise<any> {
    const element = get(`https://api.techhh.ca/element/name/${name}`);
    return element;
}

export function getElementAtomicNumber(atomicNumber: number): Promise<any> {
    const element = get(`https://api.techhh.ca/element/atomic-number?atomic_number=${atomicNumber}`);
    return element;
}