const BASE_URL = "http://localhost:4001";

export const config = {
  USR_REG_SIGNUP: `${BASE_URL}/registration/signup`,
  USR_REG_SIGNIN: `${BASE_URL}/registration/signin`,
  PROD_GET_PRODUCTS: `${BASE_URL}/products/get_products`,
  PROD_ADD_PRODUCT: `${BASE_URL}/products/add_products`,
  PROD_REMOVE_PRODUCT: `${BASE_URL}/products/delete_products`,
  PROD_UPDATE_PRODUCT: `${BASE_URL}/products/update_products`,
  CART_ADD_TO_CART: `${BASE_URL}/cart_service/add_to_cart`,
  CART_REMOVE_FROM_CART: `${BASE_URL}/cart_service/remove_from_cart`,
  USR_ADDR_GET: `${BASE_URL}usr_get_addr/:user_id`,
  USR_ADDR_ADD: `${BASE_URL}usr_add_addr/:user_id`,
  USR_ADDR_UPDATE: `${BASE_URL}usr_update_addr/:user_id`,
  USR_ADDR_REMOVE: `${BASE_URL}usr_delete_addr/:user_id`,
};
