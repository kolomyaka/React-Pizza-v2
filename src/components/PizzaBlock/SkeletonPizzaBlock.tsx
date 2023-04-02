import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonPizzaBlock = (props: any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="pizza-block"
        {...props}>
        <circle cx="140" cy="130" r="130" />
        <rect x="1" y="275" rx="5" ry="5" width="280" height="27" />
        <rect x="0" y="318" rx="5" ry="5" width="280" height="87" />
        <rect x="5" y="421" rx="10" ry="10" width="92" height="29" />
        <rect x="123" y="412" rx="25" ry="25" width="156" height="45" />
    </ContentLoader>
);
