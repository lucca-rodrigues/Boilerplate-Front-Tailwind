import { useThemeStore } from '@/contexts/themeContext';

export function SignInTemplate({ ...sharedProps }) {
  const { register, onSubmit, errors } = sharedProps;
  const { colors } = useThemeStore();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: colors.background }}
    >
      <div
        className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg"
        style={{ background: colors.sidebar.background }}
      >
        <div>
          <h2
            className="mt-6 text-center text-3xl font-extrabold"
            style={{ color: colors.primary }}
          >
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <input
                {...register('email', { required: 'Email é obrigatório' })}
                id="email"
                type="email"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{
                  color: colors.text,
                  borderColor: colors.sidebar.text,
                  focusRing: colors.primary,
                }}
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-1 text-sm" style={{ color: colors.primary }}>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register('password', { required: 'Senha é obrigatória' })}
                id="password"
                type="password"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{
                  color: colors.text,
                  borderColor: colors.sidebar.text,
                  focusRing: colors.primary,
                }}
                placeholder="Senha"
              />
              {errors.password && (
                <p className="mt-1 text-sm" style={{ color: colors.primary }}>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all font-medium"
              style={{
                background: colors.primary,
                color: colors.sidebar.activeText,
              }}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
