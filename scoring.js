export function calculateJobScore(job) {
  const fare = Number(job.fare) || 0;
  const pickup = Number(job.pickup) || 0;
  const trip = Number(job.trip) || 0;

  const fuelPenalty = (pickup + trip) * 0.8;
  const timeEstimate = (pickup * 2) + trip;

  if (timeEstimate === 0) return 0;

  return (fare - fuelPenalty) / timeEstimate;
}
