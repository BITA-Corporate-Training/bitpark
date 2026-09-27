import Contact_us from "../../assets/all-images/contactpagebannerimg3.png";
import { Helmet } from "react-helmet";

const Sample = () => {
  return (
    <>
  <Helmet>
        <title>custom software development services</title>

        <meta name="title" content="custom software development services" />
        <meta
          name="description"
          content="We are a custom software development company Providing quality and customized software solutions for the web and mobile Applications at an affordable price"
        />
        <meta name="keywords" content="custom software development services" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="https://bitpark.co.in/contact-us" />

        <meta property="og:title" content="custom software development services" />
        <meta
          property="og:description"
          content="We are a custom software development company Providing quality and customized software solutions for the web and mobile Applications at an affordable price"
        />
        <meta property="og:image" content="https://bitpark.co.in/assets/bita-logo-ag0ROdXq.png" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="https://bitpark.co.in/contact-us" />
        <meta property="og:site_name" content="https://bitpark.co.in/" />
      </Helmet>
      <section className=" bg-[url('../src/assets/all-images/email-6370595_1280.png')] bg-no-repeat bg-cover">
        <div className=" bg-slate-900/75 pt-[25%] lg:pt-[8%] flex flex-col lg:flex-row items-center justify-around">
          <div>
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-4xl lg:text-3xl tracking-wider text-3xl">
              <span className="block w-full">Reach out for expert</span>
              software development <br />
              and IT consulting
            </div>
          </div>
          <img
            src={Contact_us}
            alt="Contact_Banner"
            className="w-[85%] pt-[8%] lg:pt-0 lg:w-[35%]"
          />
        </div>
      </section>
    </>
  );
};

export default Sample;
