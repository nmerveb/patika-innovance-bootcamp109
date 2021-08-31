//localStorage'dan koordinatları çeker.
export const getInitialValues = () => {
  const initialX = localStorage.getItem("x")
    ? parseInt(localStorage.getItem("x"))
    : 0;

  const initialY = localStorage.getItem("y")
    ? parseInt(localStorage.getItem("y"))
    : 0;
  return { initialX, initialY };
};
