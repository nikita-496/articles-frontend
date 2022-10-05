import React, { useState } from 'react';
import LoadingSpinner from '../components/handle/LoadingSpinner';
import ErrorMessage from '../components/handle/ErrorMessage';

const withForm = (initialData) => (WrappedComponent) => (props) => {
  const [formState, setFormState] = useState({ ...initialData });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleOnChangeForm = (evt, id) => {
    const inputValue = evt.target.value;
    const formData = {
      ...formState,
      [id]: {
        ...formState[id],
        value: inputValue,
      },
    };
    setFormState(formData);
  };

  const handleOnSubmitJSON = (evt, save, data) => {
    evt.preventDefault();
    setIsLoading(true);
    const res = save(data)
      .then((res) => res)
      .catch(setError)
      .finally(() => setIsLoading(false));
    setFormState({ ...initialData });
    //console.log(res);
    return res;
  };

  const createFormElementsArr = () => {
    const formElementsArr = [];
    if (formState) {
      for (let key in formState) {
        formElementsArr.push({
          id: key,
          config: formState[key],
        });
      }
    }
    return formElementsArr;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <WrappedComponent
      {...props}
      formState={formState}
      onChangeForm={handleOnChangeForm}
      onRenderElements={createFormElementsArr}
      postJSON={handleOnSubmitJSON}
    />
  );
};

export default withForm;