import React, { useState, useEffect } from 'react';
import { updateTeacher } from '../api/Teacher';
import { useCategory } from '../contexts/CategoryContext';
import { putCategories } from '../api/category';

interface AssignCategoryProp {
  userId: string;
  isOpen: any;
  onClose: any;
}

const AssignCategory: React.FC<AssignCategoryProp> = ({ userId, isOpen, onClose }) => {
  const { handleCategoryFormData, categories } = useCategory();
  
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const handleCheckboxChange = (e: any) => {
    const { value, checked } = e.target;
    setSelectedNames(prev =>
      checked ? [...prev, value] : prev.filter(name => name !== value)
    );
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    putCategories({ categoryIds: selectedNames }, userId);
    onClose(); // Close the modal after submission
  };
  useEffect(() => {
    // Pre-select checkboxes if categories array has userDetails with ID matching userId
    const userCategories = categories.filter((category: any) => category.userDetails?.id === userId);
    const userCategoryIds = userCategories.map((category: any) => String(category.id)); // Convert each ID to string
    console.log(userCategoryIds);
    setSelectedNames(userCategoryIds);
  }, []);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white shadow-lg rounded-md w-100 p-4 relative">
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-black font-bold">You can Update Teacher Level/category Only</h2>
          <div>
            {categories.map((item: any, index: any) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  value={item.id}
                  checked={selectedNames.includes(item.id.toString())}
                  onChange={handleCheckboxChange}
                  className="mr-2 "
                />
                <label htmlFor={`checkbox-${item.id}`} className="text-black">
                  {item.categoryName}
                </label>
              </div>
            ))}
          </div>
          <label>
            Add new Label
          </label>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white rounded-md mt-2 p-2" type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignCategory;
