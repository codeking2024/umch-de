export function timeConvertor (dateInput:string):string {
    const date = new Date(dateInput);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    // Ensure the hours and minutes are two digits
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
};
