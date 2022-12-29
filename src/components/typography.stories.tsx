import React from 'react';

export default {
  title: `Foundations/Typography`,
};

const headings = () => (
  <div>
    <h1 className="heading-1 mb-m">Überschrift H1</h1>
    <h2 className="heading-2 mb-m">Überschrift H2</h2>
    <h3 className="heading-3 mb-m">Überschrift H3</h3>
    <h4 className="heading-4 mb-m">Überschrift H4</h4>
  </div>
);
export const Headings = headings.bind({});

const paragraphs = () => (
  <div>
    <p className="paragraph-l mb-l">
      Paragraph L - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea vel recusandae velit, eaque cum ut aperiam
      impedit accusamus laborum, ab alias mollitia libero. Corporis quas at quibusdam alias vitae minus!
    </p>
    <p className="paragraph-m">
      Paragraph M - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut voluptate laudantium voluptas earum
      officiis magni fuga quis dolore natus ipsa rem maxime et tempora debitis, unde doloribus asperiores! Veritatis.
    </p>
  </div>
);
export const Paragraphs = paragraphs.bind({});

const labels = () => (
  <div>
    <label className="label-xl block mb-m">Label XL</label>
    <label className="label-l block mb-m">Label L</label>
    <label className="label-m block mb-m">Label M</label>
    <label className="label-s block">Label S</label>
  </div>
);
export const Labels = labels.bind({});

const placeholder = () => (
  <div>
    <span className="placeholder block">Placeholder</span>
  </div>
);
export const Placeholder = placeholder.bind({});
