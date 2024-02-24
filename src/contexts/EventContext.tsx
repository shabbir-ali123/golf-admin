import React, {  useCallback, useEffect, useState } from 'react';
import { fetchEvents } from '../api/Events';


const EventCreateContext = React.createContext<any>({});

export const EventsContext = ({children}:any)=>{
  
    const [events, setEvents] = useState<any[]>([]);
    const store_token: string = localStorage.getItem('token') || '';
    const [eventsCount, setEventsCount] = useState<any[]>([]);

    useEffect(() => {
        fetchEvents(setEvents,setEventsCount, store_token);
    }, []);

    const handleTeachers = useCallback((value: any) => {
        return setEvents(value);
    }, [events]);
    
    const value =  { handleTeachers, events, eventsCount}

    return <EventCreateContext.Provider  value={value}> {children}</EventCreateContext.Provider>
}

export const eventContextStore = ()=> React.useContext(EventCreateContext);

