import moment from "moment";
import { useState } from "react";
import toast from "react-hot-toast";

const useUserFormSubmission = () => {
  const [loading, setLoading] = useState(false);
  const imageHostKey = process.env.REACT_APP_IMG_KEY;

  const submitForm = async (data, userType, endpoint, navigate) => {
    setLoading(true);

    const postedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    try {
      // Upload image to imgbb
      const res = await fetch(url, { method: 'POST', body: formData });
      const imgData = await res.json();

      if (imgData.success) {
        const imageUrl = imgData.data.url;

        // Create data object based on user type
        const userData = {
          fName: data.fName,
          lName: data.lName,
          gender: data.gender,
          DOB: data.DOB,
          roll: data.roll,
          class: data.class,
          section: data.section,
          SID: data.SID,
          parent: data.parent,
          phone: data.phone,
          email: data.email,
          address: data.address,
          img: imageUrl,
          appointedDate: postedDate,
          userType: userType
        };

        // Send data to the backend
        const response = await fetch(`http://localhost:3003/api/${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
        const result = await response.json();

        if (result) {
          setLoading(false);
          toast.success(`${userType} added successfully!`);
          navigate(`/dashboard/${userType.toLowerCase()}s`);
        } else {
          toast.error(`Failed to add ${userType}`);
        }
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return {
    loading,
    submitForm
  };
};

export default useUserFormSubmission;
