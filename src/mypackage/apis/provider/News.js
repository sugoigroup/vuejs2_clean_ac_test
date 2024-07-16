import { injectable } from "inversify";

import { httpGet, httpPost } from "@/mypackage/apis/api.js";
import API_CONST from "@/mypackage/shared/constant/apiconst";

@injectable()
export default class News {
  async apiPostRegisterArticle(body) {
    return await httpPost(API_CONST.POST, body);
  }
  async apiGetDetailPost(uid) {
    return await httpGet(API_CONST.DETAIL + uid);
  }

  async apiGetPostList(body) {
    return await httpPost(API_CONST.ARTICLES, body);
  }

  async apiGetCommentList(body) {
    return await httpPost(API_CONST.COMMENTS, body);
  }
}
