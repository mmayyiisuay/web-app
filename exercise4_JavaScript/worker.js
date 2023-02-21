const getdate = () => {
  const date = new Date();
  postMessage(date);
  setTimeout(getdate, 1000);
};

getdate();