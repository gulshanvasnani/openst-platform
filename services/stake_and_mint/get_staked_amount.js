"use strict";

/**
 * From SimpleStake Contract get all time staked amount
 *
 * @module services/stake_and_mint/get_staked_amount
 */

const rootPrefix = '../..'
  , SimpleStakeKlass = require(rootPrefix + '/lib/contract_interact/simple_stake')
  , responseHelper = require(rootPrefix + '/lib/formatter/response')
  , logger = require(rootPrefix + '/helpers/custom_console_logger')
  , basicHelper = require(rootPrefix + '/helpers/basic_helper')
;

/**
 * Constructor for get staked amount details class
 *
 * @param {object} params
 * @param {string} params.simple_stake_contract_address - simple stake contract address
 *
 * @constructor
 */
const GetStakeAmountKlass = function (params) {

  const oThis = this;

  params = params || {};
  oThis.simpleStakeContractAddress = params.simple_stake_contract_address;

};

GetStakeAmountKlass.prototype = {

  /**
   * Perform
   *
   * @return {promise<result>}
   */
  perform: function () {

    const oThis = this;

    // validations
    if (!basicHelper.isAddressValid(oThis.simpleStakeContractAddress)) {
      let errObj = responseHelper.error({
        internal_error_identifier: 's_s_m_gsak_1',
        api_error_identifier: 'invalid_address',
        error_config: basicHelper.fetchErrorConfig()
      });
      return Promise.resolve(errObj);
    }

    const simpleStake = new SimpleStakeKlass({contractAddress: oThis.simpleStakeContractAddress})

    return simpleStake.getAlltimeStakedAmount();

  }

};

module.exports = GetStakeAmountKlass;