
import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string().required('Username is required').email(),
    password: yup.string().required('Password is required')
})

export const mainSchema = yup.object().shape({
    question: yup.string().required('This field is required'),
    episode: yup.number().required('This field is required').min(1),
    season: yup.number().required('This field is required').min(1),
    author: yup.string().required('This field is required'),
    correctOption: yup.string().required('This field is required'),
    wrongOption1:yup.string(),
    wrongOption2:yup.string(),
    wrongOption3:yup.string(),
})

export const usrSchema = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required().email(),
    password:yup.string().required().min(4),
    confirmPassword:yup.string().required()
    .oneOf([yup.ref('password'),null],'passwords must match'),
    
})
