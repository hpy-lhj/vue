
const api = "https://api.maya.fun/api/"


export default {
    // 用户
    user_infor: {
        register: `${api}auth/`, // 注册
        auth: `${api}auth/token`, // 登录
        email: `${api}auth/email`, // 获取验证码
        follow_me: `${api}follow/me`, //获取我关注的用户
        follow: `${api}follow/`, //获取粉丝
        user: `${api}user/`, //修改信息

    },
    // 首页
    Index: {
        home: `${api}adv/overview`,//获取首页banner
    },

    // 消息模块
    news: {
        comment: `${api}comment/`, //获取评论列表
        im: `${api}im/`, // 创建私信信息
        friends: `${api}im/friends`, // 获取私信好友列表
        notice: `${api}notice/`, // 获取系统通知列表
        thumb: `${api}thumb/`, // 获取点赞列表
        overview: `${api}message/overview`, // 消息概览
        unread: `${api}message/unread`,   //获取未读消息数量
        collect_comment: `${api}collect_comment/`   //获取系列下的评论列表

    },
    // 作品模块
    works: {
        product: `${api}product/`, // 获取作品列表
        box: `${api}product/box/`, // 盒子作品
        unit: `${api}unit/`, // 市场接口
        favorite: `${api}favorite/`, //收藏作品
        counter: `${api}product/counter`, //获取数量
        metadata: `${api}nft/metadata` //创建metadata文件
    },
    // 创作者计划
    apply_creator: {
        apply_creator: `${api}apply_creator/`,
        subscribe: `${api}subscribe/`
    }
}