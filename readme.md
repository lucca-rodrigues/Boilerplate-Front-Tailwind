# App Admin - Arquitetura do Projeto

## Visão Geral

Este projeto segue uma arquitetura modular baseada em componentes com separação clara de responsabilidades. A estrutura foi projetada para facilitar a manutenção, escalabilidade e testabilidade do código.

## Tecnologias Principais

- React 18
- TypeScript
- Vite
- React Router DOM
- Zustand (gerenciamento de estado)
- React Hook Form
- Tailwind CSS
- Axios

## Estrutura de Diretórios

### `/src`

Diretório principal do código-fonte da aplicação.

### `/src/assets`

Contém recursos estáticos como imagens, ícones e outros arquivos de mídia.

### `/src/components`

Componentes reutilizáveis da interface do usuário.

- Cada componente deve ser independente e reutilizável
- Deve conter sua própria lógica de apresentação

### `/src/contexts`

Contextos React e stores Zustand para gerenciamento de estado global.

- `authContext.ts` - Gerenciamento de autenticação
- Outros contextos para estados compartilhados entre componentes

### `/src/domain`

Contém a lógica de domínio da aplicação.

- `/models` - Interfaces e tipos que representam entidades de domínio
- `/services` - Classes de serviço que implementam a lógica de negócios

### `/src/infra`

Infraestrutura e configurações do projeto.

- `/httpRequest` - Cliente HTTP e interceptores
- `/templates` - Templates para geração de código
- `/docker` - Configurações de containerização

### `/src/pages`

Páginas da aplicação organizadas por funcionalidade.
Cada página segue uma estrutura consistente:

- `/[pageName]` - Diretório da página
  - `index.tsx` - Ponto de entrada da página
  - `/template` - Componentes de UI específicos da página
  - `/hooks` - Hooks personalizados para lógica da página
  - `/functions` - Funções utilitárias específicas da página
  - `/domain` - Lógica de domínio específica da página
    - `/models` - Tipos e interfaces
    - `/services` - Serviços e casos de uso
  - `/mocks` - Dados simulados para desenvolvimento

### `/src/routes`

Configuração de rotas da aplicação.

- Definição de rotas públicas e protegidas
- Layouts e estruturas de navegação

## Padrões Arquiteturais

### Padrão de Página

Cada página segue um padrão consistente:

1. **Container (index.tsx)** - Orquestra a lógica e os dados
2. **Template** - Componente de apresentação pura
3. **Hooks** - Encapsula a lógica de estado e efeitos
4. **Domain** - Contém a lógica de negócios específica

### Gerenciamento de Estado

- **Estado Local**: React Hooks (useState, useReducer)
- **Estado Global**: Zustand para estados compartilhados
- **Estado de Formulário**: React Hook Form

### Comunicação com API

- Serviços centralizados em classes de caso de uso
- Cliente HTTP baseado em Axios com interceptores

## Geração de Código

O projeto utiliza Plop.js para geração de código, mantendo consistência na estrutura de arquivos e padrões de código.

## Autenticação

Implementação baseada em token JWT com armazenamento persistente via Zustand.

## Estilização

Tailwind CSS para estilização baseada em utilitários.

## Acesso

Email: admin@admin.com Senha: 123456
