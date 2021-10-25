import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import { mainSchema } from '../utils/validationSchema'
import axios from 'axios'
import { baseURL } from '../helpers/constants'

const textField = [
    { label: 'question', type: 'text' },
    { label: 'keywords', type: 'text' },
    { label: 'season', type: 'number' },
    { label: 'episode', type: 'number' },
    { label: 'author', type: 'text' },
    { label: 'questionNo', type: 'number' },
]

const initialValues = {
    question: '',
    season: '',
    episode: '',
    author: 'mahadev',
    keywords: '',
    questionNo: '',
    correctOption: '',
    wrongOption1: '',
    wrongOption2: '',
    wrongOption3: '',
}

export default function AddQues() {

    const [err, setErr] = useState(false);
    const [message, setMessage] = useState("");

    const { handleChange, handleSubmit, handleBlur, values, errors, touched, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: mainSchema,
        async onSubmit(values, { resetForm }) {
            var options = [values.wrongOption1, values.wrongOption2, values.wrongOption3]
            // insert correct option at random position
            Array.prototype.insert = function (index, item) {
                this.splice(index, 0, item);
            };
            const randomPos = Math.floor(Math.random() * 4)
            options.insert(randomPos, values.correctOption);

            await axios.post(`${baseURL}/api/question`, { ...values, options: options }).then((res) => {
                setErr(false);
                setMessage("Added sucessfully");
                resetForm({
                    values: {
                        question: '',
                        season: values.season,
                        episode: values.episode,
                        author: 'mahadev',
                        questionNo: values.questionNo === '' ? '' : values.questionNo + 1,
                        correctOption: '',
                        wrongOption1: '',
                        wrongOption2: '',
                        wrongOption3: '',
                        keywords: '',

                    }
                })
                document.getElementById('question').focus()
            }).catch((err) => {
                setMessage(err.response.data.errorMessage)
                setErr(true)
            })
        }
    })
    const resetMessage = () => {
        setMessage("")
    }

    return (
        <>
            {textField.map((field, index) => (
                <TextField fullWidth
                    key={field.label}
                    variant='outlined'
                    label={field.label}
                    id={field.label}
                    type={field.type}
                    disabled={field.label === 'author' ? true : false}
                    autoComplete='off'
                    style={{ margin: 8, textTransform: 'capitalize' }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={resetMessage}
                    value={values[field.label]}
                    helperText={errors[field.label] && touched[field.label] ? errors[field.label] : null}
                    error={errors[field.label] && touched[field.label] ? true : false}
                />

            ))}

            <Grid container spacing={1} style={{ margin: 4 }}>
                <Grid item xs={12} md={6} lg={3}>
                    <TextField fullWidth
                        label='wrong option 1'
                        variant='outlined'
                        id='wrongOption1'
                        value={values.wrongOption1}
                        autoComplete='off'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={resetMessage}
                        helperText={errors.wrongOption1 && touched.wrongOption1 ? errors.wrongOption1 : null}
                        error={errors.wrongOption1 && touched.wrongOption1 ? true : false}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <TextField fullWidth
                        label='wrong option 2'
                        variant='outlined'
                        id='wrongOption2'
                        autoComplete='off'
                        value={values.wrongOption2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={resetMessage}
                        helperText={errors.wrongOption2 && touched.wrongOption2 ? errors.wrongOption2 : null}
                        error={errors.wrongOption2 && touched.wrongOption2 ? true : false}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <TextField fullWidth
                        label='wrong option 3'
                        variant='outlined'
                        id='wrongOption3'
                        autoComplete='off'
                        value={values.wrongOption3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={resetMessage}
                        helperText={errors.wrongOption3 && touched.wrongOption3 ? errors.wrongOption3 : null}
                        error={errors.wrongOption3 && touched.wrongOption3 ? true : false}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <TextField fullWidth
                        label='correct option'
                        variant='outlined'
                        id='correctOption'
                        autoComplete='off'
                        value={values.correctOption}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={resetMessage}
                        helperText={errors.correctOption && touched.correctOption ? errors.correctOption : null}
                        error={errors.correctOption && touched.correctOption ? true : false}
                    />
                </Grid>
            </Grid>
            <Button fullWidth
                onClick={handleSubmit}
                color='secondary'
                variant='contained'
                style={{ margin: 8 }}
            >
                Add Question
            </Button>
            <Typography style={{ color: err ? "red" : "green" }} variant='subtitle2' >{message}</Typography>
        </>
    )
}
