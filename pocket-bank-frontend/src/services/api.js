const API_URL = "http://localhost:5000";

export const fetchDashboard = async () => {
  const res = await fetch(`${API_URL}/dashboard`);
  return res.json();
};

export const sendMoney = async (data) => {
  const res = await fetch(`${API_URL}/transfer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }

  return res.json();
};
