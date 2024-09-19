
export const addressField = {
    title: "Address",
    name: "address",
    type: 'string',
}
export const houseNumberField = {
    title: "House Number",
    name: "houseNumber",
    type: 'string',
    maxLength: 4,
}
export const postCodeField = {
    title: "Postcode",
    name: "postcode",
    type: 'number',
    maxLength: 7,
}
export const cityField = {
    title: "City",
    name: "city",
    type: 'string',
}
export const countryField = {
    title: "Country",
    name: "country",
    type: 'string',
    default: "Deutschland"
}


export const mapUrlField = {
    title: "Map Url",
    name: "mapUrl",
    type: 'url'
}