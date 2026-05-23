import { notFound } from 'next/navigation';

// Rota de teste para a UI de erro (app/error.tsx).
// Disponível apenas em desenvolvimento; em produção retorna 404.
export default function ErrorTestPage() {
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  throw new Error('Erro de teste para validar a página de erro.');
}
