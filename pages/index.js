import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Image } from '../components/Image';
import { InputBox } from '../components/InputBox';
import { H1, P } from '../components/Typography';
import { BetModal } from '../components/Model';

export default function Home() {
  const [coming, setComing] = useState(true);
  const [email, setEmail] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const [input, setInput] = useState({
    password: '',
  });
  const onInputChanged = (e) => {
    const { value } = e.target;
    setInput(value);
    console.log(value);
  };
  const openBetModal = (bet) => {
    setModalShown(true);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
      <Image alt='Chips' src='/assets/Frame.png' width='813px' />

      {modalShown && <BetModal onClose={() => setModalShown(false)} />}

      <div
        style={{
          backgroundColor: '#012743',
          width: '100%',
          padding: '30px',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {email && (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <H1 style={{ fontSize: '137px', fontWeight: '800' }}>
              COMING <br /> SOON
            </H1>
            <H1
              style={{
                fontSize: '34px',
                lineHeight: '71px',
                fontWeight: '800',
              }}
            >
              What’s your secrete sauce?
            </H1>
            <P
              style={{
                color: '#FDD549',
                fontSize: '24px',
                fontWeight: '500',
                lineHeight: '71px',
              }}
            >
              Web 3 / SPORTS / Social / Competition
            </P>
            <div
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <InputBox
                type='email'
                placeholder='Enter email '
                style={{ width: '60%' }}
              />
              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <InputBox
                  type='email'
                  placeholder='Referal code '
                  style={{ width: '40%' }}
                />
                <Button
                  onClick={() => {
                    openBetModal();
                  }}
                >
                  NOTIFY ME
                </Button>
              </div>
            </div>
          </div>
        )}

        {coming && (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              marginBottom: '10rem',
            }}
          >
            <H1
              style={{
                fontSize: '137px',
                color: '#ffffff',
                paddingBottom: '0px',
              }}
            >
              ENTER <br /> PASSWORD
            </H1>

            <div>
              <div
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'center',
                  marginTop: '6rem',
                  width: '100%',
                }}
              >
                <InputBox
                  style={{ width: '40%' }}
                  type='password'
                  placeholder='PASSWORD'
                  value={input.password}
                  onChange={onInputChanged}
                />
                <Button
                  onClick={() => {
                    input === 'password'
                      ? (setComing(false), setEmail(true))
                      : null;
                  }}
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
