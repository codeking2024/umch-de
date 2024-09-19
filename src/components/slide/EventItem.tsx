import React from 'react';
import { eventType } from "@/utils/interface";
import { dateConvertor } from "@/utils/dateConvertor";
import { timeConvertor } from "@/utils/timeConvertor";

interface EventItemProps {
    item: eventType;
    isOnline: boolean;
}

const EventItem: React.FC<EventItemProps> = ({ item, isOnline }) => (
    <li className="border border-top-0 border-bottom-0 border-start-0 border-end-2 px-3" style={{ width: 150 }}>
        <p className="fw-bold text-white">
            {dateConvertor(isOnline ? item.onlineDate.startDate : item.onSiteDate.startDate)}
        </p>
        <span className="text-sm">
            {timeConvertor(isOnline ? item.onlineDate.startDate : item.onSiteDate.startDate)} - {timeConvertor(isOnline ? item.onlineDate.endDate : item.onSiteDate.endDate)}
        </span>
        <small className="text-sm d-block"> {isOnline ? "Online" : "UMCH"} </small>
        <div>
            <img src={`./icon/Icon ${isOnline ? "Online" : "Uni"}.svg`} className={`py-2`} width={48} height={"auto"} alt="" />
        </div>
        <p className="fw-bold">{item.title}</p>
    </li>
);

export default EventItem;