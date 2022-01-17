/* eslint-disable @typescript-eslint/naming-convention */
import htmx from '../../../../src/htmx';

export type MetaProps = {
  title: string
  description: string
  stylesheets?: string[]
  scripts?: string[]
};

const Meta = (props: MetaProps) => {
  const {
    title,
    description,
    stylesheets,
    scripts
  } = props;

  return (
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="shortcut icon" href="./favicon.svg" />
      <link rel="stylesheet" href="resources-1.0.0.css" />
      {stylesheets && stylesheets.map(stylesheet => (
        <link
          rel="stylesheet"
          href={`${stylesheet}-1.0.0.css`}
        />
      ))}
      {scripts && scripts.map(script => (
        <script
          src={`./scripts/${script}-1.0.0.js`}
          type="text/javascript"
          defer
        />
      ))}
    </head>
  );
};

export default Meta;
