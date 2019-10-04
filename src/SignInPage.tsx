import React from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'
import { RouteComponentProps, Link } from '@reach/router'

type FormData = {
  email: string
  password: string
}

const SignInPage: React.FC<RouteComponentProps> = ({ navigate }) => {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await axios.post('https://faunadb-auth.herokuapp.com/signin', data, {
      withCredentials: true
    })
    navigate && navigate('/notes')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="mt-5">
            <h1>Login</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  ref={register}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  ref={register}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Login</button>
              </div>

              <div className="text-center">
                <Link to="/signup">I do not have an account yet.</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
