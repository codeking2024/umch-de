import {defineType, defineField} from 'sanity'
import {languageField, sortField, titleField} from "../fields/generalField";
import {navigationItemField} from "../fields/navigationField";

export default defineField ({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    fields: [
        defineField(languageField),
        defineType(titleField),
        defineType(sortField),
        defineField(navigationItemField),
    ],
});