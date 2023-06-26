import React, {useState} from 'react';
import {Button, Input} from '@mui/material';

import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {updateProfile,createUserWithEmailAndPassword  } from 'firebase/auth';
import {  doc, updateDoc,setDoc } from 'firebase/firestore';
import {auth,db} from '../../firebase.config';

import './Registration.css';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignUserRole = (user, role) => {
    const userRef = doc(db, "users", user.uid);
    return setDoc(userRef, { role: role }, { merge: true });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registration successful:", user);

        updateProfile(user, { displayName: `${firstName} ${lastName}` })
          .then(() => {
            console.log("User profile updated successfully");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });

        assignUserRole(user, "user")
          .then(() => {
            console.log("Default role assigned successfully");
          })
          .catch((error) => {
            console.error("Error assigning default role:", error);
          });

        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration failed:", errorMessage);
      });
  };

  return (
    <div className="register__container">
      <h1 className="register__title">Registration page</h1>
      <Input
        type="text"
        placeholder="Enter first name"
        className="register__input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter last name"
        className="register__input"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Enter email"
        className="register__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter password"
        className="register__input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleRegister}
        variant="outlined"
        className="register__btn"
      >
        Register
      </Button>
    </div>
  );
};
