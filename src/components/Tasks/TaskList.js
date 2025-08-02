import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const TaskList = ({ reloadFlag }) => {
  const [tasks, setTasks] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadTasks = async (page = 1) => {
  try {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      const decoded = jwtDecode(userToken);
      setIsAdmin(decoded?.role === "admin");
    }

    const response = await axios.get(`/api/tasks?page=${page}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    const { tasks = [], currentPage = 1, totalPages = 1 } = response.data || {};

    setTasks(Array.isArray(tasks) ? tasks : []);
    setCurrentPage(currentPage);
    setTotalPages(totalPages);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    setTasks([]); // fallback to empty list on error
  }
};


  useEffect(() => {
    loadTasks(currentPage);
  }, [reloadFlag, currentPage]);

  const deleteTask = async (id) => {
    const userToken = localStorage.getItem("token");
    await axios.delete(`/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    loadTasks(currentPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Your Tasks</h3>

      {Array.isArray(tasks) && tasks.length === 0 ? (
  <p className="text-gray-600">No tasks available</p>
) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100 text-left text-gray-600 text-sm uppercase tracking-wider">
              <tr>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Priority</th>
                <th className="py-2 px-4 border">Due Date</th>
                {isAdmin && <th className="py-2 px-4 border">Assigned To</th>}
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Documents</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tasks.map((task) => (
                <tr key={task._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border font-semibold">{task.title}</td>
                  <td className="py-2 px-4 border">{task.status}</td>
                  <td className="py-2 px-4 border capitalize">{task.priority}</td>
                  <td className="py-2 px-4 border">
                    {task.dueDate
                      ? new Date(task.dueDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                  {isAdmin && (
                    <td className="py-2 px-4 border">
                      {task.assignedTo?.name || task.assignedTo?.email || "N/A"}
                    </td>
                  )}
                  <td className="py-2 px-4 border">{task.description || "—"}</td>
                  <td className="py-2 px-4 border">
  {Array.isArray(task.attachedDocuments) && task.attachedDocuments.length > 0 ? (
    <ul className="list-disc pl-4">
      {task.attachedDocuments.map((file, idx) => (
        <li key={idx}>
          <a
            href={`https://psi-assignment-server.onrender.com/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View PDF {idx + 1}
          </a>
        </li>
      ))}
    </ul>
  ) : (
    "None"
  )}
</td>

                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="mt-4 flex justify-center gap-4 items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
