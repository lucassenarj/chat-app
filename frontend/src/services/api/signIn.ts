import { useMutation } from "@tanstack/react-query";

function useSignIn() {
  const API_PATH = import.meta.env.VITE_API_PATH;

  const login = async (form: { name: string; username: string }) => {
    const response = await fetch(`${API_PATH}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    
  
    if (!response.ok) {
      throw new Error('Error while entering the chat');
    }

    const data = await response.json();

    return data;
  }

  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('userKey', data.user._id);
      localStorage.setItem('name', data.user.name);
      localStorage.setItem('username', data.user.username);
      localStorage.setItem('avatar', data.user.avatar || 'https://avatar.iran.liara.run/public');
    },
  });
};

export default useSignIn;
