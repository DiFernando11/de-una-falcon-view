import { Atom } from '@/shared/ui';

const SkeletonPreviewLaunch = () => {
  return (
    <Atom.Skeleton className="flex items-center flex-col gap-4">
      <Atom.Box className="bg-skeleton h-7 w-5/6 rounded mb-4" />
      <Atom.Box className="bg-skeleton h-5 w-3/6 rounded mb-2" />
    </Atom.Skeleton>
  );
};

export default SkeletonPreviewLaunch;
