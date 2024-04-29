import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getList, saveList } from "./Utils";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [offerData, setOfferData] = useState([]);
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);
  const [homedata, setHomedata] = useState([]);
  const [officedata, setofficedata] = useState([]);
  const [appartmentdata, setappartmentdata] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [userData, setuserdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [themeOvserve, setThemeOvserve] = useState(false);
  // console.log(userData);
  useEffect(() => {
    const storedList = getList();
    setList(storedList);
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch("/CardItems.json");
      if (!response.ok) {
        throw new Error("Error fetching card items");
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error("Empty response data");
      }
      setItems(data);
    } catch (error) {
      // toast.error(error.message);
    }
  };

  const fetchofferItem = async () => {
    try {
      const response = await fetch("/OfferCard.json");
      if (!response.ok) {
        throw new Error("Error fetching card items");
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error("Empty response data");
      }
      setOfferData(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addToList = (item) => {
    const isItemInList = list.some((i) => i.id === item.id);
    if (isItemInList) {
      toast.error("Item already in list");
    } else {
      const newList = [...list, item];
      saveList(newList);
      setList(newList);

      toast.success("Item added to list");
    }
  };
  // google login
  const googleLogin = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);

      return userCredentials.user;
    } catch (error) {
      throw error;
    }
  };
  // github login
  const githubLogin = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, githubProvider);

      return userCredentials.user;
    } catch (error) {
      throw error;
    }
  };
  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setUser(user);
          setloading(false);
        } else {
          setUser(null);
          setloading(false);
        }
      } catch (error) {
        console.error("Error while setting user", error);
      }
    });
  }, []);

  const createUser = async (email, password) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success(`User created successfully`);

      return userCredentials.user;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email is already in use. Please sign in.");
        return;
      } else if (error.code === "auth/user-not-found") {
        toast.error("Email is not registered. Please sign up.");
        return;
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
        return;
      } else {
        console.error("Firebase Error:", error.message);
      }
      throw error;
    }
  };

  const updateUserData = async (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const signInUser = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("Signed in", userCredentials.user);
      toast.success(`User signed in successfully`);
      return userCredentials.user;
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("Email is not registered. Please sign up.");
        return;
      } else if (error.code === "auth/invalid-credential") {
        toast.error("Invalid Email or Password. Please try again.");
        return;
      } else {
        console.log("Error signing in ", error.message);
      }
      throw error;
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
  const contextValues = {
    items,
    setItems,
    fetchItem,
    offerData,
    addToList,
    list,
    homedata,
    officedata,
    appartmentdata,
    user,
    createUser,
    googleLogin,
    githubLogin,
    signInUser,
    logout,
    setuserdata,
    userData,
    updateUserData,
    loading,
    themeOvserve,
    setThemeOvserve,
    setloading,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
