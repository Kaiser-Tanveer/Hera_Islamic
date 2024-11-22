import { useState } from "react";
import toast from "react-hot-toast";

const useFormSubmission = () => {
  const [loading, setLoading] = useState(false);

  const submitForm = async ({
    data,
    endpoint = "",
    method = "POST", // Support PUT, PATCH, DELETE, etc.
    navigate = null,
    successMessage = "Operation successful!",
    errorMessage = "Operation failed.",
    redirectPath = "/",
    additionalFields = {},
  }) => {
    setLoading(true);

    const submittedData = {
      ...data,
      ...additionalFields,
    };

    try {
      const response = await fetch(`http://localhost:3003/api/${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(successMessage);
        if (navigate) {
          navigate(redirectPath);
        }
      } else {
        toast.error(result.message || errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submitForm,
  };
};

export default useFormSubmission;
