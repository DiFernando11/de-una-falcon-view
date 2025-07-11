import { Atom } from '@/shared/ui';

const ErrorFallback = () => (
  <Atom.Box className="p-8 text-center">
    <Atom.Text textType={'heading'} className="text-red-600">
      Oops! Something went wrong 🚨
    </Atom.Text>
    <Atom.Text textType={'subtitle'} className="text-accent-500">
      Please reload the page or contact supports.
    </Atom.Text>
  </Atom.Box>
);

export default ErrorFallback;
