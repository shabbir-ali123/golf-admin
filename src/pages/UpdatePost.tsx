import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { postContextStore } from "../contexts/PostContext";
import { API_ENDPOINTS } from "../api/apiConfig";
import { useTranslation } from "react-i18next";

interface UpdatePostType {
  text: string;
  category: string;
  tags: string;
  userId: string | null;
  mediaFiles: File[];
}


const UpdatePost: React.FC<any> = () => {
    const { t, i18n } = useTranslation();
  const { handlePostId, handleMessage, singlePost } = postContextStore();
  const params = useParams<{ id: string }>();
  const router = useNavigate();
  const postId = params.id;

  useEffect(() => {
    if (postId) {
      handlePostId(postId);
    }
  }, [postId]);

  useEffect(() => {
    if (singlePost) {
      setFormData({
        userId: singlePost?.userId,
        text: singlePost?.text,
        category: singlePost?.category,
        tags: singlePost?.tags,
        mediaFiles: singlePost.mediaFile || [],
      });
    }
  }, [singlePost]);

  const [formData, setFormData] = useState<UpdatePostType>({
    userId: singlePost?.userId,
    text: singlePost?.text,
    category: singlePost?.category,
    tags: singlePost?.tags,
    mediaFiles: [],
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    

    if (files && files.length > 0) {
      const filesArray: File[] = Array.from(files);

      setFormData((prevFormData: UpdatePostType) => ({
        ...prevFormData,
        mediaFiles: [...prevFormData.mediaFiles, ...filesArray],
      }));
    }
    handleSelectedImage(event, files, postId)

    console.log(formData);
  };

  async function fetchAndConvertFiles(urls: any) {
    const files = [];

    for (const url of urls) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const filename = url.substring(url.lastIndexOf("/") + 1);
        const file = new File([blob], filename, { type: blob.type });
        files.push(file);
      } catch (error) {
        console.error("Error fetching or converting file:", error);
      }
    }

    return files;
  }
  const handlePost = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!formData.userId || formData.mediaFiles.length === 0) {
      return;
    }
    const userToken = localStorage.getItem("token");
  
    try {
      // Create an object to hold the form data
      const dataToSend = {
        userId: formData.userId,
        text: formData.text,
        category: formData.category,
        tags: formData.tags,
        mediaFile: formData.mediaFiles,
        postId: postId || undefined, // Optional chaining for postId
      };
  
      // Convert the object to JSON
      const jsonString = JSON.stringify(dataToSend);
  
      // Send the JSON string in the request body
      const response = await axios.put(
        API_ENDPOINTS.UPDATEPOST,
        jsonString,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
          params: {
            id: postId
          }
        }
      );
  
      toast.success("Post has been Updated");
      router("/post-page");
    } catch (error: unknown) {
      console.error("Error updating post:", error);
    }
  };
  

  const handleInputTextChange = (content: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      text: content,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    // setSelectedCategory(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [updatePostMedia, setPostMedia] = useState<any>(null);
  console.log(updatePostMedia, "updatePostMedia")
  useEffect(() => {
    if (
      updatePostMedia != null &&
      updatePostMedia &&
      formData !== undefined
    ) {
      handleUpdatePostMedia(updatePostMedia);
    }
  }, [updatePostMedia]);

  const handleSelectedImage = (e:any, selectedImage: any, postId: any) => {
    e.preventDefault();
    
    let url: any = "";
    console.log(typeof selectedImage);
    if (URL === selectedImage) {
      url = new URL(selectedImage || "");
    }

    if (postId != undefined) {
      setPostMedia({
        postId: postId || "",
        removedMediaUrls: typeof selectedImage === "string" ? selectedImage : "",
        mediaFiles:selectedImage ,
      });
    }
  };
  const handleUpdatePostMedia = async (formd: any) => {
    const userToken = localStorage.getItem("token");

    try {
      if (!userToken) {
        throw new Error("Token not found in localStorage");
      }

      const response = await axios.put(API_ENDPOINTS.UPDATEPOSTMEDIA, formd, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        handleMessage(response.data.post);
        toast.success("Post Updated Successfully");
      }
    } catch (error) {
      console.error("Error updating event media:");
      toast.error("Failed to update event media. Please try again later.");
    }
  };

  return (
    <div className=" max-w-7xl mx-auto overflow-hidden">
      <div className="flex xl:justify-end justify-center mt-20">
      <button className="bg-[#61cbc2] p-2 rounded-md text-white" onClick={() => navigate(`/posts`)}>Back To Dashboard</button>
      </div>
      
      <div className=" h-[100vh] flex items-center justify-center p-4 overflow-hidden ">
      <div
        className=" max-w-xl p-6 mx-auto bg-white rounded-lg "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        
        <form className="px-2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{t("EDIT_POST")}</h1>
            <Link to={"/post-page"} className="p-2 rounded-full cursor-pointer">
            </Link>
          </div>
          <div >
            <textarea
             className="border-2 border-solid rounded-md"
              value={formData.text}
              onChange={handleInputTextChange}
              placeholder={t("WRITE_TEXT")}
              style={{ height: "220px", width:"100%" }}
            />
          </div>

          <div>
            <div className="flex gap-2">
              {singlePost?.mediaFile.map((item: any, index: number) => (
                <div className="relative">
                  <img key={index} src={item} alt="" className="h-20" />
                  <button
                    className="absolute top-0 h-4 w-4 bg-[#61cbc2] rounded-full text-white text-[14px] flex justify-center items-center cursor-pointer"
                    onClick={(e:any) => {
                      handleSelectedImage(e, item, singlePost.id);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <label className="block text-gray-700">"ADD_VIDEOS"</label>
            <div className="flex items-center justify-center p-3 border-2 border-dashed rounded-lg border-[#61cbc2]">
              <input
                id="file-upload"
                name="mediaFiles"
                ref={fileInputRef}
                className="hidden"
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*,video/*"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#51ff85]"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 4v16m8-8H4"></path>
                </svg>
              </label>
            </div>
          </div>
          <label htmlFor="">{t("SELECT_CATEGORY")}</label>
          <select
            className="w-full p-3 mb-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:border-[#51ff85] focus:ring-1 focus:ring-[#51ff85] focus:outline-none"
            onChange={handleSelectChange}
            value={formData.category}
            name="category"
          >
            <option value="">{t("SELECT_CATEGORY")}</option>
            <option value="Public">{t("PUBLIC")}</option>
            <option value="Private">{t("PRIVATE")}</option>
          </select>
          <div>
            <label htmlFor="">{t("ADD_TAGS")}</label>
            <input
              className="w-[533px] p-3 mb-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:border-[#51ff85] focus:ring-1 focus:ring-[#51ff85] focus:outline-none"
              placeholder="# Tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#61cbc2] hover:bg-[#45e07d] text-white font-bold py-3 px-4 rounded-lg shadow hover:shadow-md transition-all"
            onClick={(event) => handlePost(event)}
          >
            {t("UPDATE")}
          </button>
        </form>
      </div>
      </div>
     
    </div>
  );
};

export default UpdatePost;
