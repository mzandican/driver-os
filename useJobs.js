import { useState } from "react";
import { storage } from "../services/storageService";
import { jobService } from "../services/jobService";

export function useJobs() {
  const [jobs, setJobs] = useState(storage.getJobs());

  const addJob = (job) => setJobs(jobService.add(job));
  const removeJob = (id) => setJobs(jobService.remove(id));
  const clearJobs = () => {
    jobService.clear();
    setJobs([]);
  };

  return { jobs, addJob, removeJob, clearJobs };
}
