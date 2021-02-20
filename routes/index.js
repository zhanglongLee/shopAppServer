var express = require('express');
var router = express.Router();

router.get('/api/index_list/data', function(req, res, next) {
  res.json({
		"code":0,
		"data":{
			"topBar":[
				{id:1,name:"推荐"},
				{id:2,name:"运动户外"},
				{id:3,name:"服饰内衣"},
				{id:4,name:"鞋靴箱包"},
				{id:5,name:"美妆个护"},
				{id:6,name:"家具数码"},
				{id:7,name:"食品婴儿"},
			],
			"data":[
				{
					type:"swiperList",
					data:[
						{imgUrl:"../../static/img/swiper1.jpg"},
						{imgUrl:"../../static/img/swiper2.jpg"},
						{imgUrl:"../../static/img/swiper3.jpg"},
					]
				},
				{
					type:"recommendList",
					data:[
						{
							bigUrl:"../../static/img/Children.jpg",
							data:[
								{imgUrl:"../../static/img/Children1.jpg"},
								{imgUrl:"../../static/img/Children2.jpg"},
								{imgUrl:"../../static/img/Children3.jpg"},
							]
						},
						{
							bigUrl:"../../static/img/Furnishing.jpg",
							data:[
								{imgUrl:"../../static/img/Furnishing1.jpg"},
								{imgUrl:"../../static/img/Furnishing2.jpg"},
								{imgUrl:"../../static/img/Furnishing3.jpg"},
							]
						}
					]
				},
				{
					type:"commodityList",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/commodity1.jpg",
							name:"春节爆款春节爆款春节爆款春节爆款春节爆款春节爆款春节爆款春节爆款春节爆款",
							pprice:"299",
							oprice:"655",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/commodity2.jpg",
							name:"连衣裙爆款连衣裙爆款连衣裙爆款连衣裙爆款连衣裙爆款连衣裙爆款",
							pprice:"199",
							oprice:"499",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/commodity3.jpg",
							name:"冬季爆款冬季爆款冬季爆款冬季爆款冬季爆款冬季爆款冬季爆款冬季爆款冬季爆款冬季爆款冬季爆款",
							pprice:"199",
							oprice:"499",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/commodity4.jpg",
							name:"帅哥必备帅哥必备帅哥必备帅哥必备帅哥必备帅哥必备帅哥必备帅哥必备帅哥必备帅哥必备",
							pprice:"199",
							oprice:"499",
							discount:"5.2"
						}
					]
				}
			]
		}
	});
});

module.exports = router;
