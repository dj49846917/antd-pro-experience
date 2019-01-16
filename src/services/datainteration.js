import request from '@/utils/request';

export async function dataList(params) {
    return request('/api/template/source001', {
        method: 'POST',
        body: params,
    });
}