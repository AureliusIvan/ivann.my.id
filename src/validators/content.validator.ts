import * as yup from 'yup';

const createContentSchema = yup.object().shape({
    body: yup.object().shape({
        title: yup.string().required('Title is required').matches(/^[a-zA-Z0-9_]*$/, 'Title can only contain letters, numbers, and underscores'),
        description: yup.string(),
        content: yup.string().required('Content is required'),
    }),
});

export {createContentSchema}