import React, { useEffect, useState } from "react";
import VisaForm from "./VisaForm";
import { API_BASE_URL } from "./utils";

const VisaTableData = () => {
  const [visaData, setVisaData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // GET ALL
  const fetchAllAlerts = async () => {
    const res = await fetch(`${API_BASE_URL}/visa/alerts`);
    const data = await res.json();
    setVisaData(data.results || []);
  };

  // GET BY ID (for edit)
  const fetchById = async (id) => {
    const res = await fetch(`${API_BASE_URL}/visa/alerts/${id}`);
    const data = await res.json();
    setEditItem(data.results[0]);
    setIsFormOpen(true);
  };

  // CREATE
  const createAlert = async (formData) => {
    await fetch(`${API_BASE_URL}/visa/alerts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        country: formData.country,
        city: formData.city,
        visa_type: formData.visaType,
        status: formData.status,
      }),
    });

    fetchAllAlerts();
  };

  // UPDATE
  const updateAlert = async (formData) => {
    await fetch(`${API_BASE_URL}/visa/alerts/${editItem.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        country: formData.country,
        city: formData.city,
        visa_type: formData.visaType,
        status: formData.status,
      }),
    });

    setEditItem(null);
    fetchAllAlerts();
  };

  // DELETE
  const deleteAlert = async (id) => {
    await fetch(`${API_BASE_URL}/visa/deleteVisa/${id}`, {
      method: "DELETE",
    });

    fetchAllAlerts();
  };

  useEffect(() => {
    fetchAllAlerts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">Visa Alerts</h2>
          <button
            onClick={() => {
              setEditItem(null);
              setIsFormOpen(true);
            }}
            className="
  bg-blue-600 text-white px-5 py-2 rounded-xl
  shadow-lg
  transition transform duration-300 ease-in-out
  hover:scale-105 hover:shadow-xl
  active:scale-95
"
          >
            + Add Alert
          </button>
        </div>

       <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
  <table className="w-full border-collapse">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
          ID
        </th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
          Country
        </th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
          City
        </th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
          Visa
        </th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
          Status
        </th>
        <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
          Actions
        </th>
      </tr>
    </thead>

    <tbody>
      {visaData.map((v) => (
        <tr
          key={v.id}
          className="border-t border-gray-200 hover:bg-gray-50 transition"
        >
          <td className="px-4 py-3 text-sm text-gray-700">{v.id}</td>
          <td className="px-4 py-3 text-sm text-gray-700">{v.country}</td>
          <td className="px-4 py-3 text-sm text-gray-700">{v.city}</td>
          <td className="px-4 py-3 text-sm text-gray-700">{v.visa_type}</td>
          <td className="px-4 py-3 text-sm font-medium text-gray-700">
            {v.status}
          </td>
          <td className="px-4 py-3 text-center space-x-2">
            <button
              onClick={() => fetchById(v.id)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm shadow"
            >
              Edit
            </button>
            <button
              onClick={() => deleteAlert(v.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm shadow"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}

      {visaData.length === 0 && (
        <tr>
          <td colSpan="6" className="text-center py-6 text-gray-400 text-sm">
            No data found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
      </div>

      <VisaForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={editItem ? updateAlert : createAlert}
        editData={editItem}
      />
    </div>
  );
};

export default VisaTableData;