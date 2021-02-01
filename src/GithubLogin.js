import React, { useState } from 'react'
import { auth, firebase } from './Firebase'

export const GithubLogin = () => {
  const [user, setUser] = useState(null)

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

  const SignInGithub = () => {
    let provider = new firebase.auth.GithubAuthProvider()
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(auth.currentUser)
      })
      .catch((error) => {
        console.error(error)
        alert(error.message)
      })
  }

  auth.onAuthStateChanged(function (user) {
    setUser(user)
  })

  if (user) {
    console.log('ddd')
    return (
      <div class="container mt-5 d-flex justify-content-center">
        <div class="card p-3">
          <div class="d-flex align-items-center">
            <div class="image">
              {' '}
              <img src={user.photoURL} class="rounded" width="155" />{' '}
            </div>
            <div class="ml-3 w-100">
              <h4 class="mb-0 mt-0 text-muted">{user.displayName}</h4>{' '}
              <span class="text-muted">{user.email}</span>
              <div class="button mt-2 d-flex flex-row align-items-center">
                {' '}
                <button
                  class="btn btn-sm btn-primary w-100 ml-2"
                  onClick={() => {
                    auth.signOut()
                    setUser(null)
                  }}
                >
                  Sign Out
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
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
}
