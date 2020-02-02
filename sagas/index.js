import { all } from 'redux-saga/effects';
import apiSaga from './api-saga'
import customizeDashboard from './customizeDashSaga'
import appaccountSaga from './appaccountSaga'
import headerSaga from './headerSaga'
import profileSaga from './profileSaga'
import MenuSaga from './menuSaga'
import PendingApproval from './pendingApprovalSaga'
import fileUploadSaga from './fileUploadSaga'
import apiHanfdlerSaga from './apiHandlerSaga'
import locationSaga from './locationSaga'
import branchLocationSaga from './branchNetworkSaga'
import appSession from './appSessionSaga.js'
import appSaga from './app_saga'

export default function* rootSaga() {
    yield all([
        apiSaga(),
        locationSaga(),
        customizeDashboard(),
        appaccountSaga(),
        headerSaga(),
        profileSaga(),
        MenuSaga(),
        PendingApproval(),
        fileUploadSaga(),
        apiHanfdlerSaga(),
        branchLocationSaga(),
        appSession(),
        appSaga()
    ])
}