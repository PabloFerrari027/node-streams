interface calculatePercentage {
  total: number;
  loaded: number;
}

export function calculatePercentage({ total, loaded }: calculatePercentage) {
  if (!total || !loaded) return;

  const totalPercent = Math.round((loaded * 100) / total);
  console.log(`${totalPercent}% of the file is already in the cloud 🔥`);
}
