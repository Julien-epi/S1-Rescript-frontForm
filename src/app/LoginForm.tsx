'use client'

import { validateEmail, validatePassword } from '@loustic/rescript-form-validator';

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const emailResult = validateEmail(email);
    const passwordResult = validatePassword(password);

    if (emailResult.ok && passwordResult.ok) {
      console.log('✅ Formulaire valide !');
    } else {
      if (!emailResult.ok) {
        console.error('❌ Email:', emailResult.error?.message);
      }
      if (!passwordResult.ok) {
        console.error('❌ Password:', passwordResult.error?.message);
      }
    }
  };

  return (
    <div className="login-form">
      <h2>Test du validateur de formulaire</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Tester la validation</button>
      </form>
    </div>
  );
};

export default LoginForm;