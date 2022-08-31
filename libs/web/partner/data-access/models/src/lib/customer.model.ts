export const UserGenders = [
    { key: '', title: 'Tất cả' },
    { key: 'male', title: 'Nam' },
    { key: 'female', title: 'Nữ' }
];

export const UserStatuses = [
    { key: '', title: 'Tất cả' },
    { key: 'active', title: 'Đang hoạt động' },
    { key: 'inactive', title: 'Ngừng hoạt động' }
];

export const UserTableCollums = [
    { key: 'id', title: 'name', width: 100, checked: true },
    { key: 'phone', title: 'phone', width: 100, checked: true },
    { key: 'email', title: 'email', width: 100, checked: true },
    { key: 'total_price', title: 'total_price', width: 100, checked: true },
];

export const UserPermission = {
    view: 'account_service-user-view',
    update: 'account_service-user-update',
    create: 'account_service-user-create',
    filePrint: 'account_service-user-print',
    fileImport: 'account_service-user-import',
    fileExport: 'account_service-user-export',
    groupView: 'account_service-user-group-view',
    groupUpdate: 'account_service-user-group-update',
    groupCreate: 'account_service-user-group-create',
};
