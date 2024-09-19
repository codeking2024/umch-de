export function dateConvertor (dateInput:string) {
    const date = new Date(dateInput);
    const formattedDate = date.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });

    return formattedDate;
};

export function dateConvertorWithYear (dateInput:string) {
    const date = new Date(dateInput);
    const formattedDate = date.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });

    return formattedDate;
};