import React, { useState } from 'react'
import { auth, firebase } from './Firebase'

export const GithubLogin = () => {
  const [user, setUser] = useState(null)

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

  const SignInGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    auth
      .signInWithPopup(provider)
      .then(() => {
        setUser(auth.currentUser)
      })
      .catch((error) => {
        console.error(error)
        alert(error.message)
      })
  }

  auth.onAuthStateChanged((e) => {
    setUser(e)
  })

  if (user) {
    console.log('ddd')
    return (
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <div className="image">
              <br />
              <img
                src={user.photoURL}
                className="rounded"
                width="155"
                alt="profile"
              />
              <br />
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0 text-muted">{user.displayName}</h4>
              <br />
              <span className="text-muted">{user.email}</span>
              <div className="button mt-2 d-flex flex-row align-items-center">
                <br />
                <button
                  className="btn btn-sm btn-primary w-100 ml-2"
                  type="button"
                  onClick={() => {
                    auth.signOut()
                    setUser(null)
                  }}
                >
                  Sign Out
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <button
      type="button"
      className="btn btn-social btn-github"
      onClick={SignInGithub}
    >
      <i className="fab fa-github" />
      Sign in with Github
    </button>
  )
}
