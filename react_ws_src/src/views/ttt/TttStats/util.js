// Check comp/live stats for non-zero values
export const playerHasStats = (stats) => {
  return isNonZero(stats.comp_stats) || isNonZero(stats.live_stats);
};

// Atleast 1 value in the object is non-zero
const isNonZero = (obj) => {
  return Object.values(obj).some((value) => value !== 0);
};
