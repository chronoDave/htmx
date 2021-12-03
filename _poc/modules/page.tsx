/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/naming-convention */
import htmx from '../../src';
import Footer from '../components/footer';
import Header from '../components/header';
import Meta, { MetaProps } from '../components/meta';

export type PageProps = {
  meta: MetaProps
  children: Htmx.Children
};

const Page = ({ meta, children }: PageProps) => (
  <html lang="en">
    <Meta {...meta} />
    <body>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </body>
  </html>
);

export default Page;
