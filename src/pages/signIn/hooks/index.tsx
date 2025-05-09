import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../contexts/authContext';

interface SignInFormData {
  email: string;
  password: string;
}

export function useSignIn() {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Simulação de login - em produção, isso seria uma chamada API real
      // que retornaria um token e dados do usuário
      const mockToken = 'mock-jwt-token';
      const mockUser = {
        id: '1',
        name: 'Usuário Teste',
        email: data.email,
      };

      setToken(mockToken, mockUser);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  });

  return {
    register,
    onSubmit,
    errors,
  };
}

