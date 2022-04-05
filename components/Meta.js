import Head from "next/head";
import React from "react";

export const Meta = (props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={props.keywords} />
      <meta name="description" content={props.description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{props.title}</title>
    </Head>
  );
};

Meta.defaultProps = {
    title: 'DJ events',
    keywords: 'music, dance, dj, party, fun, friends',
    description: 'Have fun with friends on DJ floor'
}

export default Meta;
