import http from '@/utils/http'

export const loginApi = (data) =>
  http('/login', {
    method: 'POST',
    data
  })

export const getRoleListApi = (data) => {
  return http('/manage/role/list', {
    method: 'GET',
    data
  })
}

export const addRoleApi = (data) => {
  return http('/manage/role/add', {
    method: 'POST',
    data
  })
}

export const updateRoleApi = (data) => {
  return http('/manage/role/update', {
    method: 'POST',
    data
  })
}

export const getUserListApi = (data) => {
  return http('/manage/user/list', {
    method: 'GET',
    data
  })
}

export const addUserApi = (data) => {
  return http('/manage/user/add', {
    method: 'POST',
    data
  })
}

export const deleteUserApi = (data) => {
  return http('/manage/user/delete', {
    method: 'POST',
    data
  })
}
