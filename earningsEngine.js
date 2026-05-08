export function calculateNet(fare, fuel) {
  return (Number(fare) || 0) - (Number(fuel) || 0);
}
