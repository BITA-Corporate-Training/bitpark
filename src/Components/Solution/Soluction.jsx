import Solution_banner from "./Solution_banner";
import Solution_about from "./Solution_about";
import ERPSolutions from "./ERPSolutions";
import ERPModules from "./ERPModules";
import CollaborateBitPark from "./CollaborateBitPark";
import { Helmet } from "react-helmet";

const Soluction = () => {
  return (
    <>
    <Helmet>
        <title>custom software development services</title>
        <meta name="title" content="custom software development services" />
        <link rel="icon" type="image/svg+xml" href="/vite.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://bitpark.co.in/software-development-services" />
        <meta
          name="description"
          content="Our company delivers bespoke custom software development services, featuring ERP solutions designed to enhance business expansion for our clients."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />
        <meta property="og:title" content="custom software development services" />
        <meta
          property="og:description"
          content="Our company delivers bespoke custom software development services, featuring ERP solutions designed to enhance business expansion for our clients."
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
          content="https://bitpark.co.in/software-development-services"
        />
        <meta
          property="og:site_name"
          content="https://bitpark.co.in/"
        />
      </Helmet>
    <div>
      <Solution_banner />
      <Solution_about />
      <ERPSolutions />
      <ERPModules />
      <CollaborateBitPark />
    </div>
    </>
  );
};

export default Soluction;
