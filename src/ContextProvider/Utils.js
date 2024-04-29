export const saveList = (list) => {
  localStorage.setItem("list", JSON.stringify(list));
};

export const getList = () => {
  const storedList = localStorage.getItem("list");
  return storedList ? JSON.parse(storedList) : [];
};
