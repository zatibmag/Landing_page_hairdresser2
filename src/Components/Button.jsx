import React from "react";
import "../App.css";

export function Button({ label }) {
  return (
    <button
      className="custom-button"
      onClick={() =>
        (window.location.href =
          "https://booksy.com/pl-pl/233871_olga-hraboviuk_fryzjer_8820_krakow?do=invite&_branch_match_id=1292898622151851904&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV96s0q3QLjzSr8EyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAJCrRwjwAAAA%3D#ba_s=seo")
      }
    >
      {label}
    </button>
  );
}
