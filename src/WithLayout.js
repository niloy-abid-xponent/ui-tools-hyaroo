import React from 'react';

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
      <Layout {...rest}>
        <Component {...rest} />
      </Layout>
  );
}
