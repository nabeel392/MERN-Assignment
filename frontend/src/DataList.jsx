import React, { useState, useEffect } from "react";
import axios from "axios";

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  // Function to fetch data from the backend
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/data?page=${page}&limit=${limit}`);
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on page or limit change
  useEffect(() => {
    fetchData();
  }, [page, limit]);

  return (
    <div>
      <h2>People & Professions</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {data.data && data.data.length > 0 ? (
          data.data.map((person) => (
            <p key={person.id}>
              <strong>{person.name}</strong> - {person.profession}
            </p>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>

      {/* Pagination Controls */}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span> Page {page} of {data.totalPages || 1} </span>
        <button disabled={page >= (data.totalPages || 1)} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

      {/* Limit Selection */}
      <div>
        <label>Items per page: </label>
        <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default DataList;
