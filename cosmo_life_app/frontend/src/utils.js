import Card from "./components/card/category_card";

export function show_cards(data_array) {
  data_array.forEach((element) => {
    <Card body={element} />;
  });
}

// https://mir-s3-cdn-cf.behance.net/project_modules/disp/31fe3938221437.5968c5a847d93.gif =========> order place
export const image_bucket = {
  SIGN_UP_PAGE_BACKGROUND_IMAGE:
    "https://www.motowinn.com/wp-content/uploads/2023/02/Shopping.gif",
  BEAUTY_BACKGROUND:
    "https://cdn.vectorstock.com/i/500p/86/25/beauty-store-selling-makeup-and-cosmetics-vector-35798625.jpg",
  GIF_ROUND_PLAY:
    "https://miro.medium.com/v2/resize:fit:800/1*O0_snHbvjKtonTpV-I_Wlw.gif",
};
