import React, { useState } from "react";

import './Auth.css';
import Card from '../../../shared/components/UIElements/Card'
import Input from '../../../shared/components/FormElements/Input/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../../shared/util/validators'
import { useForm } from "../../../shared/hooks/form-hook";
import Button from "../../../shared/components/FormElements/Button";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      valuse: '',
      isValid: false
    }
  }, false)

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData({
        ...formState.inputs,
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false)
    }
    setIsLogin(prevMode => !prevMode);
  }

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }
  return (
    <Card className="authentication">
      <h2>Login required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogin && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Enter a name"
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Enter a valid email."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Enter at least 5 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLogin ? 'Login' : 'Signup'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {isLogin ? 'Signup' : 'Login'}
      </Button>
    </Card>
  )
};

export default Auth;
