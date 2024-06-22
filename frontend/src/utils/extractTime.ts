export const extractTime = (dataString: string) => {
  const data = new Date(dataString);
  const hours = padZero(data.getHours());
  const minutes = padZero(data.getMinutes());
  return `${hours}:${minutes}`;
};

const padZero = (number: number) => {
  return number.toString().padStart(2, "0");
};
