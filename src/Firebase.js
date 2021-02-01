import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBg5ZntyUfm9Si1KDVeXnPREpOW4006Mh0',
  authDomain: 'icewall-page.firebaseapp.com',
  projectId: 'icewall-page',
  storageBucket: 'icewall-page.appspot.com',
  messagingSenderId: '662606984200',
  appId: '1:662606984200:web:9b08479b6d305d35b60dbd',
  measurementId: 'G-R9C6V89QLS',
}
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
export { firebase }
export const auth = firebase.auth()
export const firestore = firebase.firestore()
