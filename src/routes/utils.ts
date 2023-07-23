const sanitize = (i: string) => {
    const map: any = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F',
    };
    const regex = /[&<>"'/]/ig;
    return i.replace(regex, (match) => (map[match]));
}

export { sanitize }