import app from "./firebase.config";

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const registerUser = (
  email,
  password
) => {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const loginUser = (
  email,
  password
) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const googleLogin = () => {
  return signInWithPopup(
    auth,
    googleProvider
  );
};

export const logoutUser = () => {
  return signOut(auth);
};

export const updateUserProfile = (
  name,
  photo
) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
};