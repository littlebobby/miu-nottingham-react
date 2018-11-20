export const imagesData = [
  "https://source.unsplash.com/user/erondu/1600x900",
  "https://source.unsplash.com/collection/190727/1600x900",
  "https://source.unsplash.com/daily",
  "https://source.unsplash.com/1600x900/?nature,water"
]

export const eventsData = [
  { 
    id: 10,
    info: {
      imageURL: 'https://source.unsplash.com/user/erondu/1600x900',
      title: 'SCDA',
      time: 'Nov 16',
      location: '苏州',
      brief: '一场与西浦学术的交流 一场自然与文化的盛宴 西浦一路 诚邀你我相伴 苏州之游 期待你的加入',
    },
    interactions: {
      views: 90,
      comments: 20,
      likes: 40,
    },
    joinedUsers: [1, 2],
    likedUsers: [1, 2, 4]
  },
  {
    id: 11,
    info: {
      imageURL: 'https://source.unsplash.com/collection/190727/1600x900',
      title: '研究生毕业派对',
      time: 'Nov 10',
      location: 'MN Coffee',
      brief: '想在毕业前再搞一次大事，追忆一下我们终将逝去的青春？那就果断来吧！',
    },
    interactions: {
      views: 15,
      comments: 2,
      likes: 11,
    },
    joinedUsers: [2, 5],
    likedUsers: [2]
  },
  {
    id: 12,
    info: {
      imageURL: 'https://source.unsplash.com/daily',
      title: '卓贤汇',
      time: 'Nov 10',
      location: 'Cender西餐厅',
      brief: '听说你跟朋友同桌吃饭。那么，我跟谁同桌吃饭？',
    },
    interactions: {
      views: 200,
      comments: 10,
      likes: 140,
    },
    joinedUsers: [1, 4, 5],
    likedUsers: [1, 2, 3, 5]
  }
]
