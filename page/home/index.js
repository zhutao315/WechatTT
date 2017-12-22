Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    swipers: [{
      image: "/image/jd1.jpg"
    }, {
      image: "/image/jd2.jpg"
    }, {
      image: "/image/jd3.jpg"
    }
    ],
    logos: [{
      image: "/image/logo1.png",
      title: "超市"
    }, {
      image: "/image/logo2.png",
      title: "毛巾纺织"
    }, {
      image: "/image/logo3.png",
      title: "服装城"
    }, {
      image: "/image/logo4.png",
      title: "粮油调味"
    }, {
      image: "/image/logo5.png",
      title: "生活用具"
    }, {
      image: "/image/logo6.png",
      title: "办公用品"
    }, {
      image: "/image/logo7.png",
      title: "纸品湿巾"
    }, {
      image: "/image/logo8.png",
      title: "游戏玩具"
    }, {
      image: "/image/logo9.png",
      title: "洗液护理"
    }, {
      image: "/image/logo10.png",
      title: "物流查询"
    }
    ],
    quicks: [{
      image: "/image/quick1.jpg",
      price: "￥123",
      price2: "￥223"
    }, {
      image: "/image/quick2.jpg",
      price: "￥99",
      price2: "￥253"
    }, {
      image: "/image/quick3.jpg",
      price: "￥125",
      price2: "￥166"
    }, {
      image: "/image/quick4.jpg",
      price: "￥156",
      price2: "￥196"
    }, {
      image: "/image/quick5.jpg",
      price: "￥97",
      price2: "￥256"
    }, {
      image: "/image/quick6.jpg",
      price: "￥108",
      price2: "￥139"
    }, {
      image: "/image/quick7.jpg",
      price: "￥88",
      price2: "￥169"
    }
    ],
    live: [
      {
        image: "/image/live1.jpg",
        title1: "玩3C",
        title2: "phone最低价",
        title3: "更多优惠Go!"
      },
      {
        image: "/image/live2.jpg",
        title1: "京东家电",
        title2: "每满千立减150",
        title3: ""
      },
      {
        image: "/image/live3.jpg",
        title1: "京东超市",
        title2: "每满199减100",
        title3: ""
      },
      {
        image: "/image/live4.jpg",
        title1: "爱家",
        title2: "家具满200-50",
        title3: "打造厨艺大师"
      }
    ],
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onShareAppMessage:function(){
    return {
      title:'测试转发',
      path:'/page/home/index'
    };
  }
},
  // 跳到商品详情
  toGoods() {
    wx.navigateTo({
      url: '/page/goods/index'
    })
  }
})
