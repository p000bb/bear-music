import request from "./request";

// 公共api
export class homeApi {
  // 推荐歌单
  static async playlist(params) {
    return request.get("/personalized", { params });
  }
  // 热门歌手
  static async singerlist(params) {
    return request.get("/top/artists", { params });
  }
}
