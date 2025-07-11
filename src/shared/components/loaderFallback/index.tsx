import { Rocket } from 'lucide-react';
import { Atom } from '@/shared/ui';

const LoaderFallback = ({ label = 'Loading...' }) => (
  <div className="flex flex-col gap-6 justify-center items-center w-full h-full min-h-[60vh]">
    <span className="animate-spin-slow">
      <Rocket className="w-16 h-16 text-accent-500" />
    </span>
    <Atom.Text as="span" textType="body" color="secondary">
      {label}
    </Atom.Text>
  </div>
);

export default LoaderFallback;
