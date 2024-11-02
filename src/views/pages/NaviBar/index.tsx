import React from "react";

export const NaviBar: React.FC = () => {
  return (
    <>
        <p>sub menu -mode-</p>
        <ul className="flex">
          <li>
            <p>A．display</p>
            <ul className="flex">
              <li>-Normal-</li>
              <li>-SNS-</li>
            </ul>
          </li>
          <li>
            <p>B.color</p>
            <ul className="flex">
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
