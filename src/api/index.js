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
  // 获取歌单详情
  static async playListDetail(params) {
    return request.get("/playlist/detail", { params });
  }
  // 获取所有歌曲的详情
  static async songDetail(params) {
    return request.get("/song/detail", { params });
  }
}
