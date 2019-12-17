import React from "react";

function AwardsAchievements() {
  return (
    <div className="medium-card">
      <div className="grey-heading">{`Awards & Achievements`}</div>
      <table>
        <tr>
          <td className="text-l table-l">2019</td>
          <td className="table-r">
            <div className="dot dot-margin" />
            <div className="p-padding">
              Recognition for contribution to the Direct Distribution of FFL
              controlled products (FFL 4.0) CAP
            </div>
            <div className="p-padding">
              Recognition for work to help redesign data structures to support
              multiple addresses on an invoice OFI
            </div>
            <div className="p-padding">
              Recognition for work on State Sales Tax System Creation CAP
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-l table-l">2018</td>
          <td className="table-r">
            <div className="dot dot-margin" />
            <div className="p-padding">
              Recognition for effort to dramatically reduce errors and warnings
              for the MidwayUSA website
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-l table-l">2017</td>
          <td className="table-r">
            <div className="dot dot-margin" />
            <div className="p-padding">
              Recognition for contribution to the Holster Finder Creation CAP
            </div>
            <div className="p-padding">
              Recognition for contribution to the Return Center Creation CAP
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-l table-l">2011</td>
          <td>
            <div className="dot last-dot-margin" />
            <div className="p-padding">
              Recipient of Student of Distinction Book Award
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default AwardsAchievements;
