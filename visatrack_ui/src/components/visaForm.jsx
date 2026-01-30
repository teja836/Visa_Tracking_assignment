import React, { useEffect, useState } from "react";

const VisaForm = ({ isOpen, onClose, onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    visaType: "Tourist",
    status: "Active",
  });

  // Populate form on EDIT
  useEffect(() => {
    if (editData) {
      setFormData({
        country: editData.country || "",
        city: editData.city || "",
        visaType: editData.visa_type || "Tourist",
        status: editData.status || "Active",
      });
    } else {
      setFormData({
        country: "",
        city: "",
        visaType: "Tourist",
        status: "Active",
      });
    }
  }, [editData]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl"
      >
        <h2 className="text-xl font-bold mb-5 text-center">
          {editData ? "Update Visa Alert" : "Add Visa Alert"}
        </h2>

        <input
          className="w-full mb-3 px-4 py-2 border rounded-xl"
          placeholder="Country"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          required
        />

        <input
          className="w-full mb-3 px-4 py-2 border rounded-xl"
          placeholder="City"
          value={formData.city}
          onChange={(e) =>
            setFormData({ ...formData, city: e.target.value })
          }
          required
        />

        <select
          className="w-full mb-3 px-4 py-2 border rounded-xl"
          value={formData.visaType}
          onChange={(e) =>
            setFormData({ ...formData, visaType: e.target.value })
          }
        >
          <option value="Tourist">Tourist</option>
          <option value="Business">Business</option>
          <option value="Student">Student</option>
        </select>

        <select
          className="w-full mb-5 px-4 py-2 border rounded-xl"
          value={formData.status}
          onChange={(e) =>
            setFormData({ ...formData, status: e.target.value })
          }
        >
          <option value="Active">Active</option>
          <option value="Booked">Booked</option>
          <option value="Expired">Expired</option>
        </select>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-xl"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-xl"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisaForm;