import { calculateJobScore } from "./scoring";

export function rankJobs(jobs) {
  return jobs
    .map(j => ({ ...j, score: calculateJobScore(j) }))
    .sort((a, b) => b.score - a.score);
}

export function getBestJob(jobs) {
  const ranked = rankJobs(jobs);
  return ranked[0] || null;
}
