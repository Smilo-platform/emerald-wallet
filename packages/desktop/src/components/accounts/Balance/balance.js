import React from 'react';
import { connect } from 'react-redux';
import { Balance } from '@emeraldwallet/ui';
import WalletSettings from '../../../store/wallet/settings';

export default connect(
  (state, ownProps) => {
    const fiatCurrency = WalletSettings.selectors.fiatCurrency(state);
    const fiatRate = WalletSettings.selectors.fiatRate(state);
    return {
      symbol: ownProps.symbol,
      balance: ownProps.balance.value.toString(10),
      decimals: ownProps.balance.decimals,
      fiatCurrency,
      fiatRate,
      showFiat: ownProps.showFiat,
    };
  },
  null
)(Balance);
