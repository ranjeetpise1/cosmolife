const BASE_URL = "http://localhost:4001";

export const config = {
  /* User URL's */
  USR_REG_SIGNUP: `${BASE_URL}/registration/signup`,
  USR_REG_SIGNIN: `${BASE_URL}/registration/signin`,

  /* Cart URL's */
  CART_ADD_TO_CART: `${BASE_URL}/cart_service/add_to_cart`,
  CART_REMOVE_FROM_CART: `${BASE_URL}/cart_service/remove_from_cart`,

  /* User Address URL's */
  USR_ADDR_GET: `${BASE_URL}/address_service/usr_get_addr/:user_id`,
  USR_ADDR_ADD: `${BASE_URL}/address_service/usr_add_addr/:user_id`,
  USR_ADDR_UPDATE: `${BASE_URL}/address_service/usr_update_addr/:user_id`,
  USR_ADDR_REMOVE: `${BASE_URL}/address_service/usr_delete_addr/:user_id`,

  /* Brand URL's */
  BRAND_GET: `${BASE_URL}/brand_service/brands`,
  BRAND_ADD: `${BASE_URL}/brand_service/add_brand`,
  BRAND_UPDATE: `${BASE_URL}/brand_service/update_brand/:brand_id`,
  BRAND_REMOVE: `${BASE_URL}/brand_service/delete_brand/:brand_id`,

  /* Category URL's */
  CATEGORY_GET: `${BASE_URL}/category_service/categories/:brand_id`,
  CATEGORY_ADD: `${BASE_URL}/category_service/add_category/:brand_id`,
  CATEGORY_UPDATE: `${BASE_URL}/category_service/update_category/:category_id`,
  CATEGORY_REMOVE: `${BASE_URL}/category_service/delete_category/:category_id`,

  /* Product URL's */
  PROD_GET_PRODUCTS: `${BASE_URL}/products/get_products/:category_id`,
  PROD_ADD_PRODUCT: `${BASE_URL}/products/add_products/:category_id`,
  PROD_REMOVE_PRODUCT: `${BASE_URL}/products/delete_products/:product_id`,
  PROD_UPDATE_PRODUCT: `${BASE_URL}/products/update_products/:product_id`,
};
