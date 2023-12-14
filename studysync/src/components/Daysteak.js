// DayStreak.js
import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext'; // Adjust the import path based on your file structure
import { firestore } from '../Firebase'; // Import the firestore object from Firebase

const DayStreak = () => {
  const { user } = useAuth();
  const [dayStreak, setDayStreak] = useState(0);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const userData = await fetchUserDataFromDatabase(user.uid);
          console.log('User Email:', userData.email);
          setDayStreak(userData.dayStreak || 0);
          setUserEmail(userData.email || '');
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchUserData();

      const lastVisitDate = localStorage.getItem('lastVisitDate');
      const currentDate = new Date().toISOString().split('T')[0];

      if (lastVisitDate !== currentDate) {
        updateDayStreak(currentDate); // Pass the current date to the update function
      }
    }
  }, [user]);

  const updateDayStreak = async (currentDate) => {
    const userDocRef = firestore.collection('Users').doc(user.uid);
    const userData = await userDocRef.get();

    const newDayStreak = userData.exists ? (userData.data().dayStreak || 0) + 1 : 1;

    await userDocRef.update({
      dayStreak: newDayStreak,
      lastLoginDate: currentDate, // Update last login date to the current date
    });

    setDayStreak(newDayStreak);
    localStorage.setItem('lastVisitDate', currentDate);
  };

  return (
    <div>
      {user ? (
        <p>You are logged in. Your day streak is {dayStreak}. Email: {userEmail}</p>
      ) : (
        <p>Please log in to track your day streak.</p>
      )}
    </div>
  );
};

export default DayStreak;

const fetchUserDataFromDatabase = async (userId) => {
  const userDocRef = firestore.collection('Users').doc(userId);
  const userDoc = await userDocRef.get();
  return userDoc.exists ? userDoc.data() : { email: '', dayStreak: 0 };
};
