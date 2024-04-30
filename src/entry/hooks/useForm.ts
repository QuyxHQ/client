import { useState } from "react";

function useForm(callback: () => Promise<void>, initialState: Record<string, string> = {}) {
  const [values, setValues] = useState(initialState);

  const onChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await callback();
  };

  return { onChange, onSubmit, values };
}

export default useForm;
