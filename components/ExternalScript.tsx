// app/components/GlobalScript.tsx
import Script from "next/script";

export default function GlobalScript() {
  return (
    <Script
      id="moneytag-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (()=>{var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=...rest of your code...';
          /* todo o código que você me passou */
          })();
        `,
      }}
    />
  );
}