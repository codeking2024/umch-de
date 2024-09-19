// schemas/event.ts
import { defineType, defineField } from 'sanity';
import {CalendarDaysIcon} from "lucide-react";
import {languageField, logoImageField, mainImageField, slugField, titleField} from "../fields/generalField";
import {contentField} from "../fields/postField";
import {
    addressField, dateEventOnlineField, dateEventOnSiteField,
    typeEventField,
} from "../fields/eventField";

export default defineType({
    name: 'event',
    type: 'document',
    title: 'Event',
    icon: CalendarDaysIcon,
    fields: [
        defineField(languageField),
        defineField(titleField),
        defineField(slugField),
        defineField(mainImageField),
        defineField(logoImageField),
        defineField(contentField),
        defineField(typeEventField),
        defineField(dateEventOnSiteField),
        defineField(dateEventOnlineField),
        // defineField(startEventField),
        // defineField(endEventField),
        defineField(addressField),
        // defineField(zoomContentField),
    ]
});
