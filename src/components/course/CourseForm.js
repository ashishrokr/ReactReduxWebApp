import React from 'react';
import TextInput from '../common/TextInput';
import {Field,reduxForm} from 'redux-form';


const CourseForm = ({initialValues,authors,pristine,submitting,handleSubmit,onCourseFormSubmit}) => {
  return (
    <form>
      <h1>Manage Course</h1>
           <div className="form-group">
          <Field  name="title"  label="Title" component={TextInput} type="text"/>

            <label style={{paddingTop:10,paddingBottom:10}}>Authors</label>
            <div className="field">
            <Field  className="form-control" name="authorId"  label="Authors"  component="select" >
                {authors.map((option)=>{
                  return <option key={option.value} value={option.value}>{option.text}</option>
                })}
            </Field>
           </div>


            <Field name="category"  label="Category" component={TextInput} type="text" />

           <Field name="length"  label="Length" component={TextInput} type="text"/>
              </div>
          <div style={{paddingTop:10}} >
          <button onClick={handleSubmit(onCourseFormSubmit)} className ="btn btn-primary" type="submit" disabled={pristine || submitting}>
                 Save
          </button>
          </div>
    </form>
  );
};


export default reduxForm({
  form:'CourseForm',
  enableReinitialize:true
})(CourseForm);
