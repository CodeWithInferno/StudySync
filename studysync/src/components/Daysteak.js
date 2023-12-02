// DayStreak.js
import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext'; // Adjust the import path based on your file structure
import { auth } from '../Firebase'; // Import the auth object

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
      const currentDate = new Date().toISOString().split('T')[0]; // Get only the date part

      if (lastVisitDate !== currentDate) {
        updateDayStreak();
      }
    }
  }, [user]);

  const updateDayStreak = () => {
    setDayStreak((prevStreak) => prevStreak + 1);
    localStorage.setItem('lastVisitDate', new Date().toISOString().split('T')[0]);
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
  const user = auth.currentUser;
  return { email: user ? user.email : '', dayStreak: 3 }; // Dummy data, replace with your actual data
};
