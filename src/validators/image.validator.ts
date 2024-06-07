import * as yup from 'yup';

const createImageUploadSchema = yup.object().shape({
  body: yup.object().shape({
    image: yup.mixed().required('Field Image is required'),
  }),
});
export {createImageUploadSchema};