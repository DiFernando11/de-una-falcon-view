import { Atom, Molecules } from '@/shared/ui';

const SkeletonDetail = () => {
  return (
    <Molecules.Card className="max-w-[600px] m-auto gap-4">
      <Atom.Skeleton>
        <Atom.Box className="bg-skeleton h-8 w-5/6 rounded" />
        <Atom.Box className="bg-skeleton h-4 w-3/6 rounded" />
        <Atom.Box className="bg-skeleton h-4 w-3/6 rounded" />
        <Atom.Box className="bg-skeleton h-4 w-2/6 rounded" />
        <Atom.Box className="flex flex-col items-center gap-2">
          <Atom.Box className="bg-skeleton h-4 w-6/6 rounded" />
          <Atom.Box className="bg-skeleton h-4 w-3/6 rounded" />
        </Atom.Box>
        <Atom.Box className="bg-skeleton h-4 w-2/6 rounded" />
        <Atom.Box className="flex flex-col items-center gap-2">
          <Atom.Box className="bg-skeleton h-4 w-2/6 rounded my-6" />
        </Atom.Box>
      </Atom.Skeleton>
    </Molecules.Card>
  );
};

export default SkeletonDetail;
