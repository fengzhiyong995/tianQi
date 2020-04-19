//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tianQi:[{
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
    },],
    color:['#faa952','#4f4f4f',{one:'#396888',two:'#c5d9ff'},'#f6f6f6'],
    textColor:['#fefefe','#ddddd3','#ffffff','#111111'],
    tColor:'',
    bc:'',
    bM:[],
    pp:true,
    xingQi:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
  },

  onLoad: function () {
    var that = this;
    wx:wx.request({
      url: 'http://apis.juhe.cn/simpleWeather/query',
      data:{
        key:'09c69a6d79119adcd77a159cda81a572',
        city:app.globalData.city,
      },
      success:function(result){
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
        let k = that.data.xingQi;
        let d = (new Date(data[0].date)).getDay();
        for(let i in data){
          ob[i].day = data[i].date;
          ob[i].week = k[d];
          ob[i].tQ = data[i].weather;
          ob[i].qW = data[i].temperature;
          d >= 7?d=1:d++;
          that.setData({
            tianQi:ob,
          })
        }
        let s = data[0].weather;
        let reg = [/^晴$/,/云$/,/雨/,/雪/];
        let i = 0;
        let p = false;
        let v = 0;
        reg.forEach(function(e){
          if(e.test(s)){
            p = !p;
            v = i;
          }
          if(p){
            return v ;
          }
          i++;
        })
        that.newB(v);
      }
    })


  },
  newB:function(v){
      let y = this.data;
      let w = y.color;
      let t = y.textColor;
      v !== 2?this.setData({bc:w[v],pp:true,tColor:t[v]}):this.setData({bM:w[v],pp:false,tColor:t[v]});
  },
  wx:wx.setNavigationBarTitle({
    title: app.globalData.city + '-天气系统',
  }),




})

