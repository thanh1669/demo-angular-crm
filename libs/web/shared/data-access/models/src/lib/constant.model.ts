const CustomerTypes = [
    { key: 'company,individual', title: 'Tất cả', checked: true },
    { key: 'individual', title: 'Cá nhân', checked: false },
    { key: 'company', title: 'Công ty', checked: false }
];

const CustomerStatuses = [
    { key: 'active,inactive', title: 'Tất cả', checked: false },
    { key: 'active', title: 'Đang hoạt động', checked: true },
    { key: 'inactive', title: 'Ngừng hoạt động', checked: false }
];

const CustomerGenders = [
    { key: 'male,female', title: 'Tất cả', checked: true },
    { key: 'male', title: 'Nam', checked: false },
    { key: 'female', title: 'Nữ', checked: false }
];

const CustomerCollums = [
    { key: 'id', title: 'Mã khách hàng', type: 'string', checked: true, width: 150 },
    { key: 'address', title: 'Địa chỉ', type: 'string', checked: false, width: 150 },
    { key: 'name', title: 'Tên khách hàng', type: 'string', checked: true, width: 350 },
    { key: 'province_name', title: 'Tỉnh thành', type: 'string', checked: false, width: 150 },
    { key: 'type_name', title: 'Loại khách hàng', type: 'string', checked: true, width: 150 },
    { key: 'created_by_name', title: 'Người tạo', type: 'string', checked: false, width: 150 },
    { key: 'phone', title: 'Số điện thoại', type: 'string', checked: true, width: 150 },
    { key: 'group_name', title: 'Nhóm khách hàng', type: 'string', checked: false, width: 150 },
    { key: 'created_at', title: 'Ngày tạo', type: 'date', checked: false, width: 150 },
    { key: 'gender_name', title: 'Giới tính', type: 'string', checked: false, width: 150 },
    { key: 'note', title: 'Ghi chú', type: 'string', checked: false, width: 150 },
    { key: 'birthday', title: 'Ngày sinh', type: 'date', checked: false, width: 150 },
    { key: 'purchase_at', title: 'Ngày giao dịch cuối', type: 'date', checked: false, width: 150 },
    { key: 'email', title: 'Email', type: 'string', checked: false, width: 150 },
    { key: 'total_debt', title: 'Nợ hiện tại', type: 'number', checked: true, width: 150 },
    { key: 'facebook', title: 'Facebook', type: 'string', checked: false, width: 150 },
    { key: 'total_invoice_price', title: 'Tổng bán', type: 'number', checked: true, width: 150 },
    { key: 'company', title: 'Công ty', type: 'string', checked: false, width: 150 },
    { key: 'status_name', title: 'Trạng thái', type: 'string', checked: true, width: 200 }
];

export enum ConstantsType {
    CUSTOMER_TYPES = 'CUSTOMER_TYPES',
    CUSTOMER_GENDERS = 'CUSTOMER_GENDERS',
    CUSTOMER_COLLUMS = 'CUSTOMER_COLLUMS',
    CUSTOMER_STATUSES = 'CUSTOMER_STATUSES',
};

export const ConstantsGroup = {
    [ConstantsType.CUSTOMER_TYPES]: CustomerTypes,
    [ConstantsType.CUSTOMER_GENDERS]: CustomerGenders,
    [ConstantsType.CUSTOMER_COLLUMS]: CustomerCollums,
    [ConstantsType.CUSTOMER_STATUSES]: CustomerStatuses,
};