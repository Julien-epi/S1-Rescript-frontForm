'use client'

import { useState } from 'react';
import { validateEmail, validatePassword, validatePhone, validateUsername, validateDate } from '@loustic/rescript-form-validator';
import './globals.css';

const LoginForm = () => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    phone: '',
    username: '',
    date: ''
  });
  const [globalMessage, setGlobalMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const phone = formData.get('phone') as string;
    const username = formData.get('username') as string;
    const date = formData.get('date') as string;

    const emailResult = validateEmail(email);
    const passwordResult = validatePassword(password);
    const phoneResult = validatePhone(phone);
    const usernameResult = validateUsername(username);
    const dateResult = validateDate(date);

    const updatedErrors = {
      email: emailResult.ok ? '' : emailResult.error?.message || 'Invalid email',
      password: passwordResult.ok ? '' : passwordResult.error?.message || 'Invalid password',
      phone: phoneResult.ok ? '' : phoneResult.error?.message || 'Invalid phone',
      username: usernameResult.ok ? '' : usernameResult.error?.message || 'Invalid username',
      date: dateResult.ok ? '' : dateResult.error?.message || 'Invalid date'
    };

    setErrors(updatedErrors);

    const hasErrors = Object.values(updatedErrors).some((error) => error !== '');
    setGlobalMessage(hasErrors ? '❌ Please correct the errors before submitting.' : '✅ Form submitted successfully!');
  };

  return (
      <div className="login-form">
        <h2 className="text-2xl font-bold">Test du validateur de formulaire</h2>
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>
          <button type="submit">Tester la validation</button>
          {globalMessage && <p className={globalMessage.includes('❌') ? 'error' : 'success'}>{globalMessage}</p>}
        </form>
      </div>
  );
};

export default LoginForm;