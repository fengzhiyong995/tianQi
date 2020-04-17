//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tianQi:[{
      day:'4月17号',
      week:'五',
      tQ:'晴',
      qW:'23',
      cY:''
    },
    {
      day:'4月18号',
      week:'',
      tQ:'多云',
      qW:'22',
      cY:''
    },
    {
      day:'',
      week:'',
      tQ:'',
      qW:'',
      cY:''
    },
    {
      day:'',
      week:'',
      tQ:'',
      qW:'',
      cY:''
    },
    {
      day:'',
      week:'',
      tQ:'',
      qW:'',
      cY:''
    },]
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    console.log('加载了',this);
    wx:wx.request({
      url: 'http://apis.juhe.cn/simpleWeather/query',
      data:{
        key:'09c69a6d79119adcd77a159cda81a572',
        city:app.globalData.city,
      },
      success:function(result){
        console.log('外',result);
        let data = result.data.result.future;
        let ob = [{
          day:'',
          week:'',
          tQ:'',
          qW:'',
        },
        {
          day:'',
          week:'',
          tQ:'',
          qW:'',
        },
        {
          day:'',
          week:'',
          tQ:'',
          qW:'',
        },
        {
          day:'',
          week:'',
          tQ:'',
          qW:'',
        },
        {
          day:'',
          week:'',
          tQ:'',
          qW:'',
        }];
        let k = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
        let d = (new Date(data[0].date)).getDay();
        console.log(data,result);
        for(let i in data){
          console.log(i,data[i]);
          ob[i].day = data[i].date;
          ob[i].week = d < 8?k[d-1]:k[0];
          ob[i].tQ = data[i].weather;
          ob[i].qW = data[i].temperature;
          d >= 7?d=1:d++;
      

          that.setData({
            tianQi:ob,
          })
        }
        console.log(ob);

    
      }
    })


  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  wx:wx.setNavigationBarTitle({
    title: app.globalData.chengShi,
  }),




})

