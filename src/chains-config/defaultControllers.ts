import { ControllerConfig } from '../types/chains-config';

/**
 * Controllers that Sidecar will always default to. This will always be
 * the optimal controller selection for Polkadot and Kusama.
 */
export const defaultControllers: ControllerConfig = {
	controllers: [
		'AccountsAssets',
		'AccountsBalanceInfo',
		'AccountsIdentity',
		'AccountsStakingInfo',
		'AccountsStakingPayouts',
		'AccountsVestingInfo',
		'Blocks',
		'BlocksExtrinsics',
		'NodeNetwork',
		'NodeTransactionPool',
		'NodeVersion',
		'PalletsAssets',
		'PalletsStakingProgress',
		'PalletsStorage',
		'Paras',
		'RuntimeCode',
		'RuntimeConstants',
		'RuntimeMetadata',
		'RuntimeSpec',
		'TransactionDryRun',
		'TransactionFeeEstimate',
		'TransactionMaterial',
		'TransactionSubmit',
		'Validators',
	],
	options: {
		finalizes: true,
		minCalcFeeRuntime: null,
		blockWeightStore: {},
	},
};
