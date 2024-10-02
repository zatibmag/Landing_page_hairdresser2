import React from "react";
import Google_maps from "../Images/Google_Maps_icon.png";
import Instagram from "../Images/Instagram_icon.png";
import Facebook from "../Images/Facebook_icon.png";
import Booksy from "../Images/Booksy.png";
import "./Css/BottomPart.css";

export function BottomPart() {
  return (
    <div>
      <div className="reasons-container-socials">
        <a href="https://www.instagram.com/olgahraboviuk/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://www.google.com/search?sca_esv=17288cef834a1941&tbm=lcl&sxsrf=ADLYWIIHggMGafpgTYW3pDF64xSQuoiTzA:1727903808163&q=Olga+Hraboviuk+fryzjer+%D0%92%D1%96%D0%B4%D0%B3%D1%83%D0%BA%D0%B8&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzE2MbMwsDQ1NDA3MTA0Nba02MDI-IpR1T8nPVHBoygxKb8sszRbIa2osiortUjhwqSL0y5subD5YvOFXRd2LGIlTh0A76AsCmoAAAA&rldimm=6434680951074015398&hl=uk-PL&sa=X&ved=2ahUKEwj288Olz_CIAxUIPxAIHadhOuQQ9fQKegQIQxAF&biw=1850&bih=966&dpr=1">
          <img src={Google_maps} alt="Google_maps" />
        </a>
        <a href="https://www.facebook.com/AfanasievaOlha">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://booksy.com/pl-pl/233871_olga-hraboviuk_fryzjer_8820_krakow?do=invite&_branch_match_id=1292898622151851904&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV96s0q3QLjzSr8EyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAJCrRwjwAAAA%3D#ba_s=seo">
          <img src={Booksy} alt="Booksy" />
        </a>
      </div>
    </div>
  );
}
