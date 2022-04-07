export const secToMin = (sec: number): string => {
  return (sec / 60).toFixed(1);
};

export function formatSec(sec: number) {
  const _min = sec / 60;
  const _sec = sec % 60;
}
