import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      city: "",
    },
    company: {
      name: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const field = name.split(".")[1];
      setFormData({ ...formData, address: { ...formData.address, [field]: value } });
    } else if (name.includes("company.")) {
      const field = name.split(".")[1];
      setFormData({ ...formData, company: { ...formData.company, [field]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    onAddUser(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4 shadow-lg">
        <h2 className="text-xl font-semibold text-center">Add New User</h2>
        <input type="text" name="name" placeholder="Name" className="input" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" className="input" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="input" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" className="input" onChange={handleChange} />
        <input type="text" name="website" placeholder="Website" className="input" onChange={handleChange} />
        <input type="text" name="address.street" placeholder="Street" className="input" onChange={handleChange} />
        <input type="text" name="address.city" placeholder="City" className="input" onChange={handleChange} />
        <input type="text" name="company.name" placeholder="Company Name" className="input" onChange={handleChange} />

        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Add User</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
