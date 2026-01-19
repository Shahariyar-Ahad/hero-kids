import ProductCardSkeleton from '@/Components/cards/ProductCardSkeleton';
import React from 'react';


const Loading = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default Loading;