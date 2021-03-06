import React from 'react';
import { shell } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import AboutContainer from './About';

class AboutClass extends React.Component {
  render() {
    const helpClick = () => {
      const url = 'https://emeraldwallet.io/support';
      shell.openExternal(url);
    };
    const licenseClick = () => {
      const url = 'https://github.com/ETCDEVTeam/emerald-wallet/blob/master/LICENSE';
      shell.openExternal(url);
    };
    const onButtonClick = () => {
      const url = 'https://emeraldwallet.io';
      shell.openExternal(url);
    };
    return (
      <AboutContainer
        onButtonClick={onButtonClick}
        onHelpClick={helpClick}
        onLicenseClick={licenseClick}
      />
    );
  }
}

export default AboutClass;
