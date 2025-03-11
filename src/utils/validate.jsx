
export const checkValidData=(email,password,name)=>{
  
  const isEmailValid= /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i.test(email);

  const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid=/^[a-zA-Z][0-9a-zA-Z .,'-]*$/.test(name)

  if(!isNameValid) return "enter valid name"
  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "incorrect Password";

  return null;

};