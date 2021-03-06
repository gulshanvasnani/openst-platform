"use strict";

/**
 * Utility WS provider
 *
 * @module lib/web3/providers/value_ws
 *
 */

const OSTBase = require("@openstfoundation/openst-base")
;

const rootPrefix = '../../..'
  , coreConstants = require(rootPrefix + '/config/core_constants')
  , OstWeb3 = OSTBase.OstWeb3
;

const web3ValueWsProvider = new OstWeb3(coreConstants.OST_VALUE_GETH_WS_PROVIDER);

web3ValueWsProvider.chainId = coreConstants.OST_VALUE_CHAIN_ID;
web3ValueWsProvider.chainKind = 'value';

module.exports = web3ValueWsProvider;
