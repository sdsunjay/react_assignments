import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    return (
      <Aux>
        <Modal>
        Something did not work!
        </Modal>
      </Aux>
      <WrappedComponent {... props} />
    );
  }
}

export default withErrorHandler;
