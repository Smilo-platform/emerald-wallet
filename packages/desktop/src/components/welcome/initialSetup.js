import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import Terms from './Terms';
import OpenWallet from './openWallet';
import { TERMS_VERSION } from '../../store/config';

const Render = ({ rpcType, terms }) => {
  let step = null;
  let activeStep = 0;

  if (terms !== TERMS_VERSION) {
    step = <Terms/>;
  } else {
    activeStep = 1;
    step = <OpenWallet/>;
  }

  const steps = [];
  steps.push(
    <Step key="terms">
      <StepLabel>User Agreement</StepLabel>
    </Step>
  );
  steps.push(
    <Step key="open-wallet">
      <StepLabel>Open Wallet</StepLabel>
    </Step>
  );

  return (
    <div>
      <Row>
        <Col xs={12}>
          <Stepper activeStep={activeStep}>
            { steps }
          </Stepper>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          { step }
        </Col>
      </Row>
    </div>
  );
};


Render.propTypes = {
  rpcType: PropTypes.string.isRequired,
  terms: PropTypes.string.isRequired,
};

const InitialSetup = connect(
  (state, ownProps) => ({
    rpcType: state.launcher.getIn(['geth', 'type']) || 'none',
    terms: state.launcher.get('terms'),
  }),
  (dispatch, ownProps) => ({
  })
)(Render);

export default InitialSetup;
