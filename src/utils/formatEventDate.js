export const formatEventDate = (isoDate) => {
  const dateObj = new Date(isoDate);
  const dateFormatted = dateObj
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/\.? de /g, " ");

  const timeFormatted = dateObj.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { dateFormatted, timeFormatted };
};
