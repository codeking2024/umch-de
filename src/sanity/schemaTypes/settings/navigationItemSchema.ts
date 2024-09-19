import {defineType, defineField} from 'sanity'
import {languageField, sortField, titleField, urlField} from "../fields/generalField";
import {navigationItemField} from "../fields/navigationField";


export default defineField ({
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        defineField(languageField),
        defineType(titleField),
        defineType(urlField),
        defineType(sortField),
        defineType(navigationItemField),
    ],
});