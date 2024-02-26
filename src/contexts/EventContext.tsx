import React, {  useCallback, useEffect, useState } from 'react';
import { fetchEvents } from '../api/Events';


const EventCreateContext = React.createContext<any>({});

export const EventsContext = ({children}:any)=>{
  

    const [events, setEvents] = useState<any[]>([]);
    const store_token: string = localStorage.getItem('token') || '';
    const [eventsCount, setEventsCount] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);

    useEffect(() => {
        fetchEvents(setEvents,setEventsCount, store_token, currentPage, pageSize);
    }, [currentPage]);

    const handleTeachers = useCallback((value: any) => {
        return setEvents(value);
    }, [events]);
    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const handlePageSize = (pageSize: number) => {
        setPageSize(pageSize);
    };

    const value =  { handleTeachers,handlePageChange,handlePageSize, events, eventsCount}

    return <EventCreateContext.Provider  value={value}> {children}</EventCreateContext.Provider>
}

export const eventContextStore = ()=> React.useContext(EventCreateContext);

