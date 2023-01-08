import { StorybookMeta } from './components.config';
import React from 'react';

export default {
  title: `${StorybookMeta.FOUNDATIONS}/Typography`,
};

const headings = () => (
  <div>
    <p className="label-m text-violet-600 mb-l leading-normal">
      Heading styles are available as CSS classes, you can use/apply them to any element.
      <br />
      So, as example, you can apply the .heading-1 class to a h3 or a span, to make it look visually like a h1.
    </p>
    <h1 className="heading-1 mb-m">Überschrift H1 (.heading-1)</h1>
    <h2 className="heading-2 mb-m">Überschrift H2 (.heading-2)</h2>
    <h3 className="heading-3 mb-m">Überschrift H3 (.heading-3)</h3>
    <h4 className="heading-4 mb-m">Überschrift H4 (.heading-4)</h4>
  </div>
);

export const Headings = headings.bind({});

const paragraphs = () => (
  <div>
    <p className="label-m text-violet-600 mb-l leading-normal">
      Paragraph styles are available as CSS classes, you can use/apply them to any element.
    </p>
    <p className="paragraph-l mb-l">
      Paragraph L (.paragraph-l) - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea vel recusandae velit, eaque
      cum ut aperiam impedit accusamus laborum, ab alias mollitia libero. Corporis quas at quibusdam alias vitae minus!
    </p>
    <p className="paragraph-m">
      Paragraph M (.paragraph-m) - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut voluptate laudantium
      voluptas earum officiis magni fuga quis dolore natus ipsa rem maxime et tempora debitis, unde doloribus asperiores!
      Veritatis.
    </p>
  </div>
);

export const Paragraphs = paragraphs.bind({});

const labels = () => (
  <div>
    <p className="label-m text-violet-600 mb-l leading-normal">
      Label styles are available as CSS classes, you can use/apply them to any element.
    </p>
    <label className="label-xl block mb-m">Label XL (.label-xl)</label>
    <label className="label-l block mb-m">Label L (.label-l)</label>
    <label className="label-m block mb-m">Label M (.label-m)</label>
    <label className="label-s block">Label S (.label-s)</label>
  </div>
);

export const Labels = labels.bind({});

const placeholder = () => (
  <div>
    <p className="label-m text-violet-600 mb-l leading-normal">
      The placeholder style is available as CSS class, you can use/apply it to any element.
    </p>
    <span className="placeholder block">Placeholder (.placeholder)</span>
  </div>
);

export const Placeholder = placeholder.bind({});
