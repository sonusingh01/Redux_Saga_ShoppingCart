import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../Constants/constants";

function* getProduct() {
  let data = yield fetch("https://fakestoreapi.com/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
  console.log("action is called", data);
}
function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
}
export default ProductSaga;
