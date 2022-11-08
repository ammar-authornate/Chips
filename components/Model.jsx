import styled from 'styled-components';
import { Image } from './Image';
import { InputBox } from './InputBox';
import { H1, P } from './Typography';
import { Button } from './Button';
const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 0px #282828;
  border-radius: 20px;
  min-width: 1224px;
`;

const Body = styled.div`
  padding: 50px;
  text-align: center;
`;

export const BetModal = ({ bet, onClose }) => {
  return (
    <Wrapper>
      <Container>
        <Body>
          <div>
            <div>
              <H1
                style={{
                  color: '#012743',
                  fontSize: '44px',
                  fontWeight: '800',
                  lineHeight: '55px',
                  textTransform: 'capitalize',
                  gap: '31px',
                }}
              >
                CONGRATS! YOU ARE CURRENTLY IN
              </H1>
              <div
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                <H1
                  style={{
                    color: '#FDD549',
                    fontSize: '44px',
                    fontWeight: '800',
                    lineHeight: '55px',
                    textTransform: 'capitalize',
                  }}
                >
                  SPOT # 3&nbsp;
                </H1>
                <H1
                  style={{
                    color: '#012743',
                    fontSize: '44px',
                    fontWeight: '800',
                    lineHeight: '55px',
                    textTransform: 'capitalize',
                  }}
                >
                  ON THE WAITLIST
                </H1>
              </div>
            </div>
            <P
              style={{
                fontSize: '24px',
                lineHeight: '28px',
                color: '#012743',
                opacity: '0.7',
                marginTop: '21px',
              }}
            >
              Complete these tasks to move up on the waitlist for early access.
            </P>
            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                marginTop: '46px',
                marginBottom: '46px',
              }}
            ></div>
            <div style={{ height: '243px', display: 'flex' }}>
              <div style={{ width: '50%' }}>
                <div style={{ display: 'flex', marginTop: '22px' }}>
                  <Image width={'30.53'} height='30.5' src='/assets/done.png' />
                  <H1
                    style={{
                      marginLeft: '5px',
                      fontSize: '18px',
                      textAlign: 'start',
                      lineHeight: '28px',
                      fontWeight: '600',
                      color: '#012743',
                      opacity: '0.6',
                    }}
                  >
                    Verified referral code signup (+250 pts)
                  </H1>
                </div>
                <div style={{ display: 'flex', marginTop: '22px' }}>
                  <Image width={'30.53'} height='30.5' src='/assets/done.png' />
                  <H1
                    style={{
                      marginLeft: '5px',
                      fontSize: '18px',
                      textAlign: 'start',
                      lineHeight: '28px',
                      fontWeight: '600',
                      color: '#012743',
                      opacity: '0.6',
                    }}
                  >
                    Follow our Twitter Account (+50 pts)
                  </H1>
                </div>
                <div style={{ display: 'flex', marginTop: '22px' }}>
                  <Image width={'30.53'} height='30.5' src='/assets/done.png' />
                  <H1
                    style={{
                      marginLeft: '5px',
                      fontSize: '18px',
                      textAlign: 'start',
                      lineHeight: '28px',
                      fontWeight: '600',
                      color: '#012743',
                      opacity: '0.6',
                    }}
                  >
                    Share your referral link with a Tweet (+100pts)
                  </H1>
                </div>
                <div style={{ display: 'flex', marginTop: '22px' }}>
                  <Image width={'30.53'} height='30.5' src='/assets/done.png' />
                  <H1
                    style={{
                      marginLeft: '5px',
                      fontSize: '18px',
                      textAlign: 'start',
                      lineHeight: '28px',
                      fontWeight: '600',
                      color: '#012743',
                      opacity: '0.6',
                    }}
                  >
                    Tweet a picture with your Chips&Sauce <br /> and use the
                    hashtag #secretesauce (+250pts)
                  </H1>
                </div>
              </div>
              <Image width={'50%'} src='/assets/points1.png' />
            </div>
            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                marginTop: '46px',
                marginBottom: '46px',
              }}
            ></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <InputBox
                style={{
                  width: '45%',
                  fontSize: '18px',
                  height: '80px',
                  border: '1px solid #012743',
                  color: '#012743',
                }}
                placeholder='Enter Referral code'
              />
              <Button
                style={{
                  width: '45%',
                  height: '80px',
                  fontSize: '18px',
                  lineHeight: '28px',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  backgroundColor: '#012743',
                }}
              >
                SHARE ON TWITTER
              </Button>
            </div>
            <P
              style={{
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '24px',
                color: '#012743',
                marginTop: '60px',
                marginBottom: '50px',
                opacity: '0.6',
              }}
            >
              Ask your friends to join waitlist using your referral code and you
              will get additional points: <br />
              https://..............................................................................
            </P>
          </div>
        </Body>
      </Container>
    </Wrapper>
  );
};
