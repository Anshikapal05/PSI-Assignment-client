import React, { useState, useRef } from "react";
import API from "../../api";

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [documents, setDocuments] = useState([]);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("status", status);
    formData.append("dueDate", dueDate);

    documents.forEach((doc) => {
      formData.append("documents", doc);
    });

    try {
      const res = await API.post("/api/tasks", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Created:", res.data);

      // reset
      setTitle("");
      setDescription("");
      setPriority("medium");
      setStatus("pending");
      setDueDate("");
      setDocuments([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
      refreshTasks();
    } catch (err) {
      console.error("Failed to create task:", err);
    }
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setDocuments((prevDocs) => {
      const updatedDocs = [...prevDocs, ...newFiles].slice(0, 3);
      return updatedDocs;
    });
    e.target.value = ""; // reset input so user can re-select same file
  };

  const removeFile = (index) => {
    setDocuments((prevDocs) => prevDocs.filter((_, i) => i !== index));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Create New Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={3}
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">
          Attach PDF Documents (max 3)
        </label>
        <input
          type="file"
          multiple
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          disabled={documents.length >= 3}
          className={`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                     file:border-0 file:rounded-md file:bg-blue-50 file:text-blue-700 
                     hover:file:bg-blue-100 ${
                       documents.length >= 3 ? "opacity-50 cursor-not-allowed" : ""
                     }`}
        />
        {documents.length > 0 && (
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            {documents.map((doc, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span>{doc.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
