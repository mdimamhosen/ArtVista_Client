import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebaseConfig";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google login
  const googleLogin = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);

      // console.log("Google", userCredentials.user);
      return userCredentials.user;
    } catch (error) {
      console.error("Error while signing in with google", error);
      throw error;
    }
  };
  // github login
  const githubLogin = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, githubProvider);

      console.log("Github", userCredentials.user);
      return userCredentials.user;
    } catch (error) {
      console.error("Error while signing in with google", error);
      throw error;
    }
  };
  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error while setting user", error);
      }
    });
  }, []);
  // console.log(user);
  // create user
  const createUser = async (email, password) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredentials.user;
    } catch (error) {
      console.log("Error creating user", error.message);
      throw error;
    }
  };

  const signInUser = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    try {
      console.log("Signed in", userCredentials.user);
      return userCredentials.user;
    } catch (error) {
      console.log("Error signing in", error.message);
    }
  };
  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  const values = {
    user,
    createUser,
    googleLogin,
    githubLogin,
    signInUser,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default FirebaseProvider;
