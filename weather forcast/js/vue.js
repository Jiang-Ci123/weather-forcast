var app = new Vue({
    el: "#app",
    data: {
        city: '',
        weatherList_seven_zero: [],
        weatherList_seven_one: [],
        weatherList_seven_two: [],
        weatherList_seven_three: [],
        weatherList_seven_four: [],
        weatherList_seven_five: [],
        weatherList_seven_six: [],
        weatherList_today: [],
        weatherList_img: [],
        //生活
        kongtiao: [],
        guomin: [],
        chenlian: [],
        shushidu: [],
        chuanyi: [],

        diaoyu: [],
        fangshai: [],
        guangjie: [],
        taiyangjing: [],
        ganmao: [],

        ganzao: [],
        huachuan: [],
        jiaotong: [],
        lukuang: [],
        liangshai: [],

        meifa: [],
        yeshenghuo: [],
        pijiu: [],
        fengzheng: [],
        wuran: [],
        huazhuang: [],
        lvyou: [],
        ziwaixian: [],
        fenghan: [],
        xiche: [],
        xinqing: [],
        yundong: [],
        yuehui: [],
        yusan: [],
        zhongshu: []
    },
    methods: {
        searchWeather: function () {
            // console.log('天气查询')
            var that = this;
            // 七天
            axios.get('https://www.yiketianqi.com/free/week?appid=59775983&appsecret=vkWnl1g9&unescape=1&city=' + this.city)
                .then(function (response) {
                    // console.log(response.data.data);
                    that.weatherList_seven_zero = response.data.data[0]
                    that.weatherList_seven_one = response.data.data[1]
                    that.weatherList_seven_two = response.data.data[2]
                    that.weatherList_seven_three = response.data.data[3]
                    that.weatherList_seven_four = response.data.data[4]
                    that.weatherList_seven_five = response.data.data[5]
                    that.weatherList_seven_six = response.data.data[6]
                })

                .catch(function (err) { })
            // 实况
            axios.get('https://www.yiketianqi.com/free/day?appid=59775983&appsecret=vkWnl1g9&unescape=1&city=' + this.city)
                .then(function (res) {
                    // console.log(res.data);
                    that.weatherList_today = res.data
                })
                .catch(function (err) { })
            this.city = '';

            // 详细生活
            axios.get('https://v0.yiketianqi.com/life/lifepro?appid=59775983&appsecret=vkWnl1g9' + this.city)
            .then(function (Res) {
                // console.log(Res.data.data.kouzhao);
                // console.log(Res.data.data);
                that.kongtiao = Res.data.data.kongtiao
                that.guomin = Res.data.data.guomin
                that.chenlian = Res.data.data.chenlian
                that.shushidu = Res.data.data.shushidu
                that.chuanyi = Res.data.data.chuanyi
                that.diaoyu = Res.data.data.diaoyu

                that.fangshai = Res.data.data.fangshai
                that.guangjie = Res.data.data.guangjie
                that.taiyangjing = Res.data.data.taiyangjing
                that.ganmao = Res.data.data.ganmao
                that.ganzao = Res.data.data.ganzao

                that.huachuan = Res.data.data.huachuan
                that.jiaotong = Res.data.data.jiaotong
                that.lukuang = Res.data.data.lukuang
                that.liangshai = Res.data.data.liangshai
                that.meifa = Res.data.data.meifa

                that.yeshenghuo = Res.data.data.yeshenghuo
                that.pijiu = Res.data.data.pijiu
                that.fengzheng = Res.data.data.fengzheng
                that.wuran = Res.data.data.wuran
                that.huazhuang = Res.data.data.huazhuang
                that.lvyou = Res.data.data.lvyou

                that.ziwaixian = Res.data.data.ziwaixian
                that.fenghan = Res.data.data.fenghan
                that.xiche = Res.data.data.xiche
                that.xinqing = Res.data.data.xinqing
                that.yundong = Res.data.data.yundong

                that.yuehui = Res.data.data.yuehui
                that.yusan = Res.data.data.yusan
                that.zhongshu = Res.data.data.zhongshu
            })
            .catch(function (err) { })
        this.city = '';

        }
    }
})