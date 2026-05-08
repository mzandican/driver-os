import { storage } from "./storageService";

export const jobService = {
  add(job) {
    const jobs = storage.getJobs();
    const updated = [...jobs, { ...job, id: Date.now() }];
    storage.setJobs(updated);
    return updated;
  },

  remove(id) {
    const updated = storage.getJobs().filter(j => j.id !== id);
    storage.setJobs(updated);
    return updated;
  },

  clear() {
    storage.setJobs([]);
  }
};
