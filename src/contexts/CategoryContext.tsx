import React, { memo, useCallback, useEffect, useState } from 'react';
import { getCategories, getCategory, postCategory, putCategories,deleteCategories } from '../api/category';

const CategoryContext = React.createContext<any>({});

export const CategoryProvider = ({children}: any) => {
    const [category, setCategory] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [loading, setLoading] = useState<any>(true);
    const [formdata, setFormdata] = useState<any>(null);
    const [userId, setUserId] = useState<any>(null);  

    useEffect(() => {
        getCategory(handleCategory, handleLoading);
        getCategories(handleCategories, handleLoading);
        if(formdata){
            postCategory(formdata, setLoading)
        }
    }, [formdata, loading]);

    const handleCategory = useCallback((value: any) => {
        setCategory(value);
    }, []);

    const handleCategories = useCallback((value: any) => {
        setCategories(value);
    }, []);

    const handleLoading = useCallback((value: any) => {
        setLoading(value);
    }, []);

    const handleCategoryFormData = useCallback((value: any) => {
        setFormdata(value);
    }, []);
    const hanldeUserId = useCallback((value: any) => {
        setUserId(value);
    }, []);

    const value = {
        category,
        categories,
        loading,
        formdata,
        getCategory,
        getCategories,
        handleCategory,
        handleCategories,
        handleLoading,
        handleCategoryFormData,
        hanldeUserId
    };

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export const useCategory = () => React.useContext(CategoryContext);
