import * as yup from "yup";

const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").min(3, "Mínimo 3 caracteres"),

})

const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").min(3, "Mínimo 3 caracteres"),

})

export {loginSchema, registerSchema}