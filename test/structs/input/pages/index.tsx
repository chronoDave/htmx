/* eslint-disable import/extensions */
import htmx from '../../../../src/htmx';
import Page from '../modules/page';

export default () => (
  <Page
    meta={{
      title: 'Home',
      description: 'Home page'
    }}
  >
    <p>Hello world<br /></p>
  </Page>
);