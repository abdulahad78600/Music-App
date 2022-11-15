export const setToken = (token) => {
  localStorage.setItem("access_token", token);
};

export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const deleteToken = () => {
  localStorage.removeItem("access_token");
};

export const setIsFilled = (isFilled) => {
  const isFilledBoolean = JSON.stringify(isFilled);
  localStorage.setItem("isFilled", isFilledBoolean);
};

export const getIsFilled = () => {
  const isFilled = localStorage.getItem("isFilled");
  if(isFilled == "true"){
  return true 
  }else
   return false

};

export const deleteIsFilled = () => {
  localStorage.removeItem("isFilled");
};
