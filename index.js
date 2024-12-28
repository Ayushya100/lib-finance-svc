'use strict';

import dotevn from 'dotenv';

dotevn.config({
    path: './.env'
});

import {
    dbConnection,
    DashboardSettingTemplate,
    ServiceConfigTemplate,
    ServiceRoutesTemplate,
    UserRoleTemplate,
    RoleScopeTemplate,
    UserTemplate,
    UserMetadataTemplate,
    UserDashboardTemplate,
    UserFinanceTemplate,
    UserAccountTemplate,
    UserCardsTemplate,
    PaymentMethodsTemplate,
    UserTagsTemplate,
    WalletCategoryTemplate,
    UserTransactionsTemplate
} from './src/db/index.js';

import { responseCodes, responseMessage } from './src/assets/response/response-codes.js';

import {
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger
} from './src/utils/index.js';

import {
    ServiceConnection,
    Router
} from './src/templates/index.js';

import {
    errorHandler
} from './src/middlewares/index.js';

import {
    UserModel,
    UserMetadataModel,
    ServiceRoutesModel,
    ServiceConfigModel,
    UserRoleModel,
    RoleScopeModel,
    DashboardSettingsModel,
    UserDashboardModel,
    UserFinanceModel,
    UserAccountModel,
    UserCardsModel,
    PaymentMethodsModel,
    UserTagsModel,
    WalletCategoryModel,
    UserTransactionsModel
} from './src/models/index.js';

export {
    dbConnection,
    responseCodes,
    responseMessage,
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger,
    ServiceConnection,
    Router,
    errorHandler,
    UserModel,
    UserMetadataModel,
    ServiceRoutesModel,
    ServiceConfigModel,
    UserRoleModel,
    RoleScopeModel,
    DashboardSettingsModel,
    UserDashboardModel,
    UserFinanceModel,
    UserAccountModel,
    UserCardsModel,
    PaymentMethodsModel,
    UserTagsModel,
    WalletCategoryModel,
    UserTransactionsModel,
    DashboardSettingTemplate,
    ServiceConfigTemplate,
    ServiceRoutesTemplate,
    UserRoleTemplate,
    RoleScopeTemplate,
    UserTemplate,
    UserMetadataTemplate,
    UserDashboardTemplate,
    UserFinanceTemplate,
    UserAccountTemplate,
    UserCardsTemplate,
    PaymentMethodsTemplate,
    UserTagsTemplate,
    WalletCategoryTemplate,
    UserTransactionsTemplate
};
