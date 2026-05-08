const JOBS_KEY = "driver_os_jobs";
const HISTORY_KEY = "driver_os_history";

export const storage = {
  getJobs: () => JSON.parse(localStorage.getItem(JOBS_KEY) || "[]"),
  setJobs: (jobs) => localStorage.setItem(JOBS_KEY, JSON.stringify(jobs)),

  getHistory: () => JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"),
  setHistory: (history) => localStorage.setItem(HISTORY_KEY, JSON.stringify(history)),
};
