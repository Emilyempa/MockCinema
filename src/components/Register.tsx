'use client';

import { FormEvent, useState } from 'react';
import { FC } from 'react';
import Button from './Button';

type Props = {
  showModal: string;
  onToggleRegister: () => void;
};

const Register: FC<Props> = ({ showModal, onToggleRegister }) => {
  const [error, setError] = useState<string>('');
  const resetError = () => {
    if (error !== '') {
      setError('');
    }
  };

  const resetRegisterForm = (event: FormEvent<HTMLFormElement>) => {
    const registerForm = event.target as HTMLFormElement;
    registerForm.reset();
  };

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${showModal}`}
        onClick={() => {
          onToggleRegister();
        }}></div>
      <div
        className={`place-content-center flex items-center justify-center z-999 bg-neutral-800 text-white w-100 p-8 rounded-xl shadow-lg fixed flex-col right-2 left-2 ml-auto mr-auto overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ${showModal}`}>
        <h2 className='text-2xl font-bold mt-4 mb-6'>Register</h2>
        <form
          className=''
          onSubmit={async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            try {
              const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  password: formData.get('password'),
                }),
              });
              const { created, message } = await res.json();

              if (!created) {
                setError(message);
                return;
              } else {
                setError('');
                onToggleRegister();
                resetRegisterForm(event);
              }
            } catch (error) {
              console.log(error as string);
              throw new Error(error as string);
            }
          }}>
          <input
            onChange={resetError}
            type='text'
            placeholder='name...'
            name='name'
            className='w-full p-3 bg-neutral-900 rounded-lg text-white mb-4 outline-none focus:ring-2 border-2 border-s-gray-300'
          />
          <input
            onChange={resetError}
            type='email'
            placeholder='email...'
            name='email'
            className='w-full p-3 bg-neutral-900 rounded-lg text-white mb-4 outline-none focus:ring-2 border-2 border-s-gray-300'
          />
          <input
            onChange={resetError}
            type='password'
            placeholder='password...'
            name='password'
            className='w-full p-3 bg-neutral-900 rounded-lg text-white mb-4 outline-none focus:ring-2 border-2 border-s-gray-300'
          />
          <small className='block pb-4 mr-auto ml-auto'>{error}</small>

          <Button type='submit' className='block mr-auto ml-auto'>
            Register
          </Button>

          <p
            className='hover:text-gray-300 text-center mt-4 cursor-pointer'
            onClick={() => {
              onToggleRegister();
            }}>
            Close
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
