import { useEffect } from 'react';
import axios from 'axios';

const PayphoneButton = ({ amount, amountWithoutTax }) => {
  useEffect(() => {
    async function createData() {
      const response = await axios.get(
        'https://ecuastore.herokuapp.com/api/keys/payphone'
      );
      const token = response.data;
      console.log(token);
      window.payphone
        .Button({
          token: token,
          btnHorizontal: true,
          btnCard: true,

          createOrder: (actions) => {
            return actions.prepare({
              amount,
              amountWithoutTax,
              currency: 'USD',
              clientTransactionId: 'actionsID',
            });
          },
          onComplete: (model, actions) => {
            actions
              .confirm({
                id: model.id,
                clienTxId: model.clientTxId,
              })
              .then((value) => {
                if (value.transactionStatus === 'Approved') {
                  alert(
                    'Pago' +
                      value.transactionId +
                      'recibido, estado' +
                      value.transactionStatus
                  );
                }
              })
              .catch((err) => alert(err));
          },
        })
        .render('#pp-button');
    }
    createData();
  }, []);

  return <div id={'pp-button'}></div>;
};

export default PayphoneButton;
