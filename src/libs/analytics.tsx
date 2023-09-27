import Script from "next/script";

function Analytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0REWPBPQDB"
      ></Script>
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
