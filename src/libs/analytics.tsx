import Script from "next/script";

function Analytics() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SY6G9ZZH5S" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-SY6G9ZZH5S');
        `}
      </Script>
    </>
  );
}

export default Analytics;
