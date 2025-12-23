const API_URL = "https://bank-dashboard-taq9.onrender.com";

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
