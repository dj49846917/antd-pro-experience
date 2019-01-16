import request from '@/utils/request';

export async function TabList(params) {
    return request('/api/template/source002', {
        method: 'POST',
        body: params,
    });
}

export async function TableList(params) {
    return request('/api/template/source003', {
        method: 'POST',
        body: params,
    });
}