import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Balance from '../../src/components/accounts/Balance';

storiesOf('Balance', module)
  .add('default', () => (
    <Balance
      balance={"10501000000000000000"}
      decimals={18}
      symbol="XSM"
      fiatCurrency="USD"
      fiatRate={4.75}
      showFiat={true}
    />));
