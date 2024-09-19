// type event
// - present
// - online
// - both
import {LayoutListIcon} from "lucide-react";

export const typeEventField  = {
    title: "Type Event",
    name: "typeEvent",
    type: 'string',
    icon: LayoutListIcon,
    options: {
        list: [
            "On-Site",
            "Online",
            "Both",
        ],
    }
}
export const addressField  = {
    title:"Address",
    name:"address",
    type: 'array',
    of: [{type: 'reference', to: {type: 'addressSchema'}}],
}

export const dateEventOnSiteField  = {
    name: 'onSiteDate',
    title: 'On Site Date',
    type: 'recurringDates',
}

export const dateEventOnlineField  = {
    name: 'onlineDate',
    title: 'Online Date',
    type: 'recurringDates',
}


// export const zoomContentField  = {}