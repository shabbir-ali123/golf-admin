import React, {  useCallback, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { fetchTeachers } from '../api/Teacher';

interface ITeacher {
    imageUrl: string;
}
  
const TeacherCreateContext = React.createContext<any>({});

export const TeacherContext = ({children}:any)=>{
  
    const [teachers, setTeachers] = useState<any[]>([]);
    const { getToken} = useAuth();

    useEffect(() => {
        fetchTeachers(setTeachers,getToken);
    }, []);

    const handleTeachers = useCallback((value: any) => {
        return setTeachers(value);
    }, [teachers]);
    const value =  { handleTeachers, teachers}

    return <TeacherCreateContext.Provider  value={value}> {children}</TeacherCreateContext.Provider>
}

export const teacherContextStore = ()=> React.useContext(TeacherCreateContext);

