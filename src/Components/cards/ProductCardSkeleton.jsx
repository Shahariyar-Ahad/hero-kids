const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="h-48 skeleton"></div>

      <div className="card-body p-4 space-y-3">
        <div className="h-4 skeleton w-full"></div>
        <div className="h-4 skeleton w-2/3"></div>

        <div className="flex justify-between">
          <div className="h-4 skeleton w-16"></div>
          <div className="h-4 skeleton w-14"></div>
        </div>

        <div className="h-5 skeleton w-24"></div>
        <div className="h-9 skeleton w-full"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
