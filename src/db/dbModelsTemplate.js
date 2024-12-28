'use strict';

import { DBTemplate } from './index.js';
import {
    DashboardSettingsModel,
    ServiceConfigModel,
    ServiceRoutesModel,
    UserRoleModel,
    RoleScopeModel,
    UserModel,
    UserMetadataModel,
    UserDashboardModel,
    UserFinanceModel,
    UserAccountModel,
    UserCardsModel,
    PaymentMethodsModel,
    UserTagsModel,
    WalletCategoryModel,
    UserTransactionsModel
} from '../models/index.js';

class DashboardSettingTemplate extends DBTemplate {
    constructor() {
        const fields = 'categoryName categoryDescription categoryType subCategory type isPeriodic duration default isUserAssignable isDeleted';
        super(DashboardSettingsModel, fields);
    }
}

class ServiceConfigTemplate extends DBTemplate {
    constructor() {
        const fields = 'microservice environment protocol port';
        super(ServiceConfigModel, fields);
    }
}

class ServiceRoutesTemplate extends DBTemplate {
    constructor() {
        const fields = 'routeName path microservice port method validations';
        super(ServiceRoutesModel, fields);
    }
}

class UserRoleTemplate extends DBTemplate {
    constructor() {
        const fields = 'roleCode roleName isActive isDefault';
        super(UserRoleModel, fields);
    }
}

class RoleScopeTemplate extends DBTemplate {
    constructor() {
        const fields = 'roleId scope scopeDescription isActive';
        super(RoleScopeModel, fields);
    }
}

class UserTemplate extends DBTemplate {
    constructor() {
        const fields = 'roleId firstName lastName userName emailId profileImageURL lastLogin loginCount isVerified isDeleted';
        super(UserModel, fields);
    }
}

class UserMetadataTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId verificationCode verificationCodeExpiry forgotPasswordToken forgotPasswordTokenExpiry refreshToken';
        super(UserMetadataModel, fields);
    }
}

class UserDashboardTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId settingId type value isDeleted';
        super(UserDashboardModel, fields);
    }
}

class UserFinanceTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId availableFunds lifeTimeIncome lifeTimeInvestment lifeTimeExpenditure isDeleted';
        super(UserFinanceModel, fields);
    }
}

class UserAccountTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId token accountName accountNumber accountType accountDate holderName amount isActive';
        super(UserAccountModel, fields);
    }
}

class UserCardsTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId accountId token cardNumber cardType expirationDate holderName balance metadata isActive';
        super(UserCardsModel, fields);
    }
}

class PaymentMethodsTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId accountId token paymentName paymentNumber paymentMethod balance isActive';
        super(PaymentMethodsModel, fields);
    }
}

class UserTagsTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId tagName tagDescription metadata';
        super(UserTagsModel, fields);
    }
}

class WalletCategoryTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId categoryType categoryName categoryDescription metadata isActive';
        super(WalletCategoryModel, fields);
    }
}

class UserTransactionsTemplate extends DBTemplate {
    constructor() {
        const fields = 'userId categoryId txnNumber txnDetail txnDate txnType amount paymentMethod tags accountType';
        super(UserTransactionsModel, fields);
    }
}

export {
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
