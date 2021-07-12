/**
 * @file test/oauth-test.js
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 *
 * IMPORTANT: THIS FILE IS AUTO GENERATED, CHANGES MAY BE OVERRIDDEN!
 */

const request     = require('supertest');
const expect      = require('chai').expect;
const server      = require('./lib/express');

describe('Jira Integration OAuth2', function () {

  // it("onOAuthHandleCode", function(done) {
  //  // this.timeout(10000);
  //   before(function() {
  //     this.timeout(10000) // 10 second timeout for setup
  //   })
  // });
  // beforeEach(function(done) {
  //   this.timeout(3000); // A very long environment setup.
  //   setTimeout(done, 2500);
  // });

  it('onOAuthStart ', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'OAUTH2_START',
        payload: {
          registrationData: {
            app: undefined
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        //expect(res.body).to.not.have.nested.property('error.httpStatus', 500);
        done();
      });
  });

  it('onOAuthHandleCode ', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'OAUTH2_HANDLE_CODE',
        payload: {
          code: undefined,
          registrationData: {
            app: undefined
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        //expect(res.body).to.not.have.nested.property('error.httpStatus', 500);
        done();
      });
  });

  it('onOAuthRenewToken ', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'OAUTH2_RENEW_TOKEN',
        payload: {
          renewToken: undefined,
          registrationData: {
            app: undefined
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
       // expect(res.body).to.not.have.nested.property('error.httpStatus', 500);
        done();
      });
  });
});
