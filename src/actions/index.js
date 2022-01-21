export const login = (user) => ({
  type: 'LOGIN',
  user
})

export const logout = () => ({
  type: 'LOGOUT'
})

export const update = (user) => ({
  type: 'UPDATE',
  user
})

export const getSkinType = () => ({
  type: 'GET_SKIN_TYPE'
})