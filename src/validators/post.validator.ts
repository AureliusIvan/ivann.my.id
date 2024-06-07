import * as yup from 'yup';

const createPostSchema = yup.object().shape({
  thumbnail: yup.string().required(),
  body: yup.object().shape({
    // title: yup.string().required("Field 'title' is required"),
    thumbnail: yup.string().required(),
    // slug: yup.string().required("Field 'slug' is required"),
    // content: yup.string().required("Field 'content' is required"),
    // author: yup.string().required("Field 'author' is required"),
    // tags: yup.string().required("Field 'tags' is required")
  }),
})

export {createPostSchema}