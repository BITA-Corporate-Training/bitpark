import { About_banner } from "./About_banner";
import About_bit from "./About_bit";
import Serve from "./Serve";
import Vision from "./Vision";
import WhatWeServe from "./WhatWeServe";
import Whome from "./Whome";
import Our_Sister from "./Our_Sister";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
    <Helmet>
        <title>custom software development services</title>
        <meta name="title" content="custom software development services" />
        <link rel="icon" type="image/svg+xml" href="/vite.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://bitpark.co.in/custom-software-development-services" />
        <meta
          name="description"
          content="Our custom software development company offers high-quality and customized software solutions for both web and mobile applications at a reasonable price."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />
        <meta property="og:title" content="custom software development services" />
        <meta
          property="og:description"
          content="Our custom software development company offers high-quality and customized software solutions for both web and mobile applications at a reasonable price."
        />
        <meta name="keywords" content="custom software development services" />
        <meta
          property="og:image"
          content="https://bitpark.co.in/assets/bita-logo-ag0ROdXq.png"
        />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta
          property="og:url"
          content="https://bitpark.co.in/custom-software-development-services"
        />
        <meta
          property="og:site_name"
          content="https://bitpark.co.in/"
        />
      </Helmet>
    <div>
      <About_banner />
      <About_bit />
      <Vision />
      <Serve />
      <WhatWeServe />
      <Whome />
      <Our_Sister />
    </div>
    </>
  );
};

export default AboutUs;
