import { takeLatest, takeEvery, call, put, select, take } from 'redux-saga/effects'
import {
    INITIATE_APP_REQUESTS,
} from 'redux/actions/types/app_handler_types'
import {
    REQUEST_ALL_ACCOUNTS,
    INITIAL_ACCOUNTS_LOAD_REQUEST,
} from 'components/Select/types'

import customStorage from 'storage/Storage'
import { ECONNABORTED } from 'utils/remote/request'
import callApi from 'utils/remote/api'
import { logMe } from 'utils/util'
import { Request, Types } from 'utils/remote/request'
const storage = new customStorage()
const TAG = 'APP SAGA'

function storeLocally({ key, record, exp }) {
    return storage.set(key, record)
}

function getfromLocal({ key }) {
    return storage.get(key, false)
}

function accountWidgetInitalset() {
    return storage.store({ record: [], key: 'accounts_widget', override: true })

}
function* handleInitial() {
    try {
        const settInitalAppAccount = yield call(accountWidgetInitalset)
        yield put(({ type: REQUEST_ALL_ACCOUNTS }))

    } catch (error) {
        console.log(error, 'settInitalAppAccount')

        logMe(TAG, 'Error inside handleInitial ' + JSON.stringify(error))
    }
}




export default function* api_saga() {
    yield takeLatest(INITIATE_APP_REQUESTS, handleInitial)

}
