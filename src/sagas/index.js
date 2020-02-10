import { fork } from 'redux-saga/effects';

import { deepLinksSaga } from './deepLinks';
import { navigationEventsSaga } from './navigationEvents';
import { serversSaga } from './servers';
import { spellCheckingSaga } from './spellChecking';
import { updatesSaga } from './updates';

export function *rootSaga() {
	yield fork(deepLinksSaga);
	yield fork(navigationEventsSaga);
	yield fork(serversSaga);
	yield fork(spellCheckingSaga);
	yield fork(updatesSaga);
}
