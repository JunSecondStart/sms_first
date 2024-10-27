import React from "react";

export const NaviBar: React.FC = () => {
  return (
    <>
        <p>sub menu -mode-</p>
        <ul>
          <li>
            <p>A．display</p>
            <ul>
              <li>-Normal-</li>
              <li>-SNS-</li>
            </ul>
          </li>
          <li>
            <p>B.color</p>
            <ul>
              <li>-Normal-</li>
              <li>-passion-</li>
              <li>-cool-</li>
              <li>-enjoy-</li>
            </ul>
          </li>
        </ul>
    </>
  );
};
