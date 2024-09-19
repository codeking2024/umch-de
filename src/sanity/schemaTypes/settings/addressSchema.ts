import {defineType, defineField} from 'sanity'
import {addressField, cityField, countryField, houseNumberField, mapUrlField, postCodeField} from "../fields/addressField";

export default defineType({
    title: 'Addresses',
    name: 'addressSchema',
    type: 'document',
    fields: [
        defineField(addressField),
        defineField(houseNumberField),
        defineField(postCodeField),
        defineField(cityField),
        defineField(countryField),
        defineField(mapUrlField),
    ]
})