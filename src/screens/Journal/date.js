// Get date
const formatDate = (e) => {
  const d = new Date(e);
  const date = d.getDate();
  return date;
};

// Get month
const formatMonth = (e) => {
  const d = new Date(e);
  const month = d.getMonth() + 1;
  return month;
};

// Get year
const formatYear = (e) => {
  const d = new Date(e);
  const year = d.getFullYear();
  return year;
};

export { formatDate, formatMonth, formatYear };
