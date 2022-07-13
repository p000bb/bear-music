import request from "./request";

// 首页
export class homeApi {
  // 推荐歌单
  static async playlist(params) {
    return request.get("/personalized", { params });
  }
  // 热门歌手
  static async singerlist(params) {
    return request.get("/top/artists", { params });
  }
  // 榜单
  static async radiolist(params) {
    return request.get("/personalized/djprogram", { params });
  }
}

export class rankApi {
  // 所有榜单内容摘要
  static async toplist(params) {
    return request.get("/toplist/detail", { params });
  }
}
