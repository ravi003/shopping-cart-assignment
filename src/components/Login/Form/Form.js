import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ErrorMessage from '../../../components/ErrorMessage';
import { emailValidation, passwordValidation } from '../../../utils/validation';
import '../../../styles/Form.scss';

const LoginForm = ({ history }) => {
//   const { register, handleSubmit, errors, reset, watch, formState } = useForm({
//     mode: 'onChange'
//   });
const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const email = watch('email');
  const password = watch('password');
  const onSubmit = (data) => {
    console.log(data);
    // history.push('/');
    // reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 col-xs-12'>
            <div className='floating-group'>
            {/* <input {...register("email", emailValidation)} />
            {errors?.email && <span>This field is required</span>} */}
              <Input
              // placeholder="Create a goal"
              // name="email"
              //  {...register("email",{ required: true, minLength: 6 })}
              //  error={errors?.email}
               
                //  type='email'
                name='email'
                id='email'
                autoComplete='off'
                placeholder='Email'
                autoFocus
                {...register("email", emailValidation)}
                aria-required='true'
                aria-label='Enter email id'
                aria-invalid={errors?.email ? 'true' : 'false'}
                className={errors?.email ? 'input-error' : undefined}
              />
              <Label for='email' className={email ? 'floating-label-has-text' : 'floating-label'}>
                Email
              </Label>
              <span className='required-label' role='alert' aria-atomic='true'>
                {errors?.email && (
                  <ErrorMessage
                    type={errors?.email.type}
                    minLength={emailValidation.minLength}
                    maxLength={emailValidation.maxLength}
                    field='email-id'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 col-xs-12'>
            <div className='floating-group'>
              <Input
                type='password'
                name='password'
                id='password'
                autoComplete='off'
                placeholder='Password'
                {...register("password", passwordValidation)}
                aria-required='true'
                aria-label='Enter password'
                aria-invalid={errors.password ? 'true' : 'false'}
                className={errors.password ? 'input-error' : undefined}
              />
              <Label
                for='password'
                className={password ? 'floating-label-has-text' : 'floating-label'}
              >
                Password
              </Label>
              <span className='required-label' role='alert' aria-atomic='true'>
                {errors.password && (
                  <ErrorMessage
                    type={errors.password.type}
                    minLength={passwordValidation.minLength}
                    maxLength={passwordValidation.maxLength}
                    field='password'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 col-xs-12'>
            <div className='floating-group'>
              <button type='submit' className='form-submit-btn' >
                Login
              </button>
            </div>
          </div>
        </div>
      </>
    </Form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.isRequired
  }).isRequired
};

export default withRouter(LoginForm);
