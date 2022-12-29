import React from 'react';

export default {
  title: `Foundations/Spacings`,
};

const spacings = () => (
  <div className="grid gap-s">
    <div className="flex items-center">
      <div className="w-xxs h-xxs bg-violet-300"></div>
      <div className="pl-s">4px - XXS</div>
    </div>
    <div className="flex items-center">
      <div className="w-xs h-xs bg-violet-400"></div>
      <div className="pl-s">8px - XS</div>
    </div>
    <div className="flex items-center">
      <div className="w-s h-s bg-violet-500"></div>
      <div className="pl-s">16px - S</div>
    </div>
    <div className="flex items-center">
      <div className="w-m h-m bg-violet-600"></div>
      <div className="pl-s">24px - M</div>
    </div>
    <div className="flex items-center">
      <div className="w-l h-l bg-violet-700"></div>
      <div className="pl-s">32px - L</div>
    </div>
    <div className="flex items-center">
      <div className="w-xl h-xl bg-violet-800"></div>
      <div className="pl-s">48px - XL</div>
    </div>
    <div className="flex items-center">
      <div className="w-xxl h-xxl bg-violet-900"></div>
      <div className="pl-s">64px - XXL</div>
    </div>
  </div>
);
export const Spacings = spacings.bind({});
