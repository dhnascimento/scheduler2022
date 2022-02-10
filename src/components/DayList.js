import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
    return props.days.map(day => 
        <DayListItem
            key={day.id}
            name={props.value}
            spots={day.spots}
            selected={day.name === props.value}
            setDay={() => props.onChange(day.name)}
        />
    );
}