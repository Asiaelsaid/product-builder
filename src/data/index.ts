import { IFormInput } from "../Interface/intex";

export const formInputsList: IFormInput[] = [
  { id: "name", name: "name", label: "Name", type: "text" },
  { id: "email", name: "email", label: "Email", type: "email" },
  { id: "password", name: "password", label: "Password", type: "password" },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];
