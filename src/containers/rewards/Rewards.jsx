import React, { useState } from "react";
import "./rewards.css";

const Rewards = ({
  performanceIndex = 8.46,
  companyHealthIndex = 0.84,
  allotedBonus = 10000000,
  designation = 2,
}) => {
  const [showBreakdown, setShowBreakdown] = useState(false);

  function calculateBonus() {
    const MAX_PERFORMANCE = 10;
    const BASE_BONUS_SHARE = 0.3;
    const PERFORMANCE_POOL_SHARE = 0.7;

    const perf = Math.min(Math.max(performanceIndex, 0.1), MAX_PERFORMANCE);
    const health = Math.min(Math.max(companyHealthIndex, 0.1), 1);
    const level = Math.max(designation, 1);

    const baseBonus = (allotedBonus * BASE_BONUS_SHARE * health) / 100;

    const performanceFactor = Math.log10(perf + 1);
    const designationWeight = Math.pow(level, 0.9);
    const weightedBonus = performanceFactor * designationWeight;
    const normalizationFactor =
      Math.log10(MAX_PERFORMANCE + 1) * Math.pow(10, 0.9);

    const performanceBonus =
      ((allotedBonus * PERFORMANCE_POOL_SHARE * health) / 100) *
      (weightedBonus / normalizationFactor);

    const totalBonus = baseBonus + performanceBonus;

    return {
      totalBonus: Math.floor(totalBonus),
      baseBonus: Math.floor(baseBonus),
      performanceBonus: Math.floor(performanceBonus),
    };
  }

  const { totalBonus, baseBonus, performanceBonus } = calculateBonus();

  return (
    <div className="rewards">
      <h1>Employee Rewards Section</h1>
      <div className="rewards__container">
        <div className="rewards__left">
          <div className="rewards__top">
            <span>Performance Index: {performanceIndex}</span>
            <span>Treasury Health: {companyHealthIndex}</span>
            <span>Designation Level: {designation}</span>
          </div>
          <div className="rewards__bottom">
            <span>
              Your cumulative bonus for the financial year 2025/26 is ₹
              {totalBonus.toLocaleString("en-IN")}
            </span>
            <button className="claim-btn">Apply for Claim</button>
          </div>
        </div>

        <div className="rewards__right">
          <button
            className="breakdown-toggle"
            onClick={() => setShowBreakdown(!showBreakdown)}
          >
            {showBreakdown ? "Hide" : "See"} Detailed Breakdown
          </button>
          {showBreakdown && (
            <div className="breakdown-panel">
              <p><strong>Base Bonus:</strong> ₹{baseBonus.toLocaleString("en-IN")}</p>
              <p><strong>Performance Bonus:</strong> ₹{performanceBonus.toLocaleString("en-IN")}</p>
              <p><strong>Total Bonus:</strong> ₹{totalBonus.toLocaleString("en-IN")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rewards;