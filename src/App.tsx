import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import WhatsAppButton from '@/components/WhatsAppButton';

import Landing from './pages/Landing';
import Barbearia from './pages/demo/Barbearia';
import Padaria from './pages/demo/Padaria';
import Vestuario from './pages/demo/Vestuario';

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
      <p className="text-gray-600 mb-6">Página não encontrada</p>
      <a href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Voltar para o início
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/demo/barbearia" component={Barbearia} />
      <Route path="/demo/padaria" component={Padaria} />
      <Route path="/demo/vestuario" component={Vestuario} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
