const SkeletonLoading = () => {
  return (
    <div className="mt-5 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col gap-5">
        <div className="space-y-1">
          <div className="rounded bg-slate-200 h-10 w-20"></div>
          <div className="h-4 w-[150px] bg-slate-200 rounded"></div>
        </div>
        <div className="divide-y-2 space-y-3 ">
          <div className="h-16 bg-slate-200 rounded col-span-2"></div>
          <div className="h-16 bg-slate-200 rounded col-span-1"></div>
          <div className="h-16 bg-slate-200 rounded"></div>
          <div className="h-16 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
