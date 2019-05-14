var express = require('express');
var router = express.Router();
var user = require('../models/user');
var fyxxb = require('../models/fyxxb');
var comment = require('../models/comment');
var crypto = require('crypto');
const init_token = 'TKL02o';
//后台管理需要验证其用户的后台管理权限
//后台管理admin，添加新的电影
router.post('/fyAdd', function (req, res, next) {
// url: 'https://pic4.ajkimg.com/display/xinfang/1ce1d119ff998197e36fb7931790477a/180x135m.jpg',
//     location:'光大名筑',
//     room_shape:'两室一厅',
//     area:'176m²',
//     price:"1250",
//     build_time: "2004年建造",
//     average_price: "71115元/m²",
//     floor: "高层(共9层)",
//     detail_location:"朝阳-亚运村小营 北四环亚运村北苑路178号",
//     gongjiao:"2",
//     xiezilou:'3',
//     xuexiao:'5',
//     yiyuan:'1',
//     ditie:'2',
//     gouwu:'0',
  if (!req.body.username) {
      res.json({status: 1, message: "用户名为空"})
  }
  if (!req.body.token) {
      res.json({status: 1, message: "登录出错"})
  }
  if (!req.body.id) {
      res.json({status: 1, message: "用户传递错误"})
  }
  if (!req.body.url) {
      res.json({status: 1, message: "地图地址为空"})
  }
  if (!req.body.location) {
      res.json({status: 1, message: "小区名称为空"})
  }
  if (!req.body.room_shape) {
      res.json({status: 1, message: "房屋户型为空"})
  }
  if (!req.body.area) {
      res.json({status: 1, message: "房源面积为空"})
  }
  if (!req.body.price) {
      res.json({status: 1, message: "房屋总价格为空"})
  }
  if (!req.body.build_time) {
    res.json({status: 1, message: "房源建造时间为空"})
  }
  if (!req.body.average_price) {
    res.json({status: 1, message: "房屋每平米价格为空"})
  }
  if (!req.body.floor) {
    res.json({status: 1, message: "房屋所在楼层为空"})
  }
  //验证
  var check = checkAdminPower(req.body.username, req.body.token, req.body.id)
  if (check.error == 0) {
      //    验证用户的情况下
      user.findByUsername(req.body.username, function (err, findUser) {
          if (findUser[0].userAdmin && !findUser[0].userStop) {
              var savefy = new fyxxb({
                url:req.body.url,
                location:req.body.location,
                room_shape:req.body.room_shape,
                area:req.body.area,
                price:req.body.price,
                build_time:req.body.build_time,
                average_price:req.body.average_price,
                floor:req.body.floor,
                gongjiao:req.body.gongjiao,
                xiezilou:req.body.xiezilou,
                xuexiao:req.body.xuexiao,
                yiyuan:req.body.yiyuan,
                ditie:req.body.ditie,
                gouwu:req.body.gouwu,
              })
              savefy.save(function (err) {
                  if (err) {
                      res.json({status: 1, message: err})
                  } else {
                      res.json({status: 0, message: "添加成功"})
                  }
              })
          } else {
              res.json({error: 1, message: "用户没有获得权限或者已经停用"})
          }
      })

  } else {
      res.json({status: 1, message: check.message})
  }
});
//删除后台添加的房源条目
router.post('/fyDel', function (req, res, next) {
      if (!req.body.fyId) {
          res.json({status: 1, message: "房源id传递失败"})
      }
      if (!req.body.username) {
          res.json({status: 1, message: "用户名为空"})
      }
      if (!req.body.token) {
          res.json({status: 1, message: "登录出错"})
      }
      if (!req.body.id) {
          res.json({status: 1, message: "用户传递错误"})
      }
      //验证
      var check = checkAdminPower(req.body.username, req.body.token, req.body.id)
      if (check.error == 0) {
          user.findByUsername(req.body.username, function (err, findUser) {
              if (findUser[0].userAdmin && !findUser[0].userStop) {
                  fy.remove({_id: req.body.fyId}, function (err, delFy) {
                      res.json({status: 0, message: '删除成功', data: delFy})
                  })
              } else {
                  res.json({error: 1, message: "用户没有获得权限或者已经停用"})
              }
          })
      } else {
          res.json({status: 1, message: check.message})
      }
  }
);
//修改后台添加的条目
router.post('/fyUpdate', function (req, res, next) {
  if (!req.body.fyId) {
      res.json({status: 1, message: "房源id传递失败"})
  }
  if (!req.body.username) {
      res.json({status: 1, message: "用户名为空"})
  }
  if (!req.body.token) {
      res.json({status: 1, message: "登录出错"})
  }
  if (!req.body.id) {
      res.json({status: 1, message: "用户传递错误"})
  }

//这里在前台打包一个电影对象全部发送至后台直接存储
    var saveData = req.body.movieInfo
    //验证
    var check = checkAdminPower(req.body.username, req.body.token, req.body.id)
    if (check.error == 0) {
        user.findByUsername(req.body.username, function (err, findUser) {
            if (findUser[0].userAdmin && !findUser[0].userStop) {
                fy.update({_id: req.body.fyId}, saveData, function (err, delFy) {
                    res.json({status: 0, message: '删除成功', data: delFy})
                })
            } else {
                res.json({error: 1, message: "用户没有获得权限或者已经停用"})
            }

        })
    } else {
        res.json({status: 1, message: check.message})
    }
});
// 显示后台的所有房源
router.get('/fy', function (req, res, next) {
    fy.findAll(function (err, allFy) {
        res.json({status: 0, message: '获取成功', data: allFy})
    })
});
//用户密码更改（管理员）
router.post('/changeUser', function (req, res, next) {
    if (!req.body.userId) {
        res.json({status: 1, message: "用户id传递失败"})
    }
    if (!req.body.username) {
        res.json({status: 1, message: "用户名为空"})
    }
    if (!req.body.token) {
        res.json({status: 1, message: "登录出错"})
    }
    if (!req.body.id) {
        res.json({status: 1, message: "用户传递错误"})
    }
    if (!req.body.newPassword) {
        res.json({status: 1, message: "用户新密码错误"})
    }
    var check = checkAdminPower(req.body.username, req.body.token, req.body.id)
    if (check.error == 0) {
        user.findByUsername(req.body.username, function (err, findUser) {
            if (findUser[0].userAdmin && !findUser[0].userStop) {
                user.update({_id: req.body.userId}, {password: req.body.newPassword}, function (err, updateUser) {
                    res.json({status: 0, message: '修改成功', data: updateUser})
                })
            } else {
                res.json({error: 1, message: "用户没有获得权限或者已经停用"})
            }
        })
    } else {
        res.json({status: 1, message: check.message})
    }
});
//这里只是对于后台权限的管理，只是作为示例
router.post('/powerUpdate', function (req, res, next) {
    if (!req.body.userId) {
        res.json({status: 1, message: "用户id传递失败"})
    }
    if (!req.body.username) {
        res.json({status: 1, message: "用户名为空"})
    }
    if (!req.body.token) {
        res.json({status: 1, message: "登录出错"})
    }
    if (!req.body.id) {
        res.json({status: 1, message: "用户传递错误"})
    }
    var check = checkAdminPower(req.body.username, req.body.token, req.body.id)
    if (check.error == 0) {
        user.findByUsername(req.body.username, function (err, findUser) {
            if (findUser[0].userAdmin && !findUser[0].userStop) {
                user.update({_id: req.body.userId}, {userAdmin: true}, function (err, updateUser) {
                    res.json({status: 0, message: '修改成功', data: updateUser})
                })
            } else {
                res.json({error: 1, message: "用户没有获得权限或者已经停用"})
            }
        })
    } else {
        res.json({status: 1, message: check.message})
    }
});

//验证用户的后台管理权限
//验证用户的token和登录状态
function checkAdminPower(name, token, id) {
  if (token == getMD5Password(id)) {
      return {error: 0, message: "用户登录成功"}
      // user.findByUsername(name, function (err, findUser) {
      //     if (findUser) {
      //         return {error: 0, data: findUser}
      //     } else {
      //         return {error: 1, message: "用户为获得"}
      //     }
      // })
  } else {
      return {error: 1, message: "用户登录错误"}
  }
}

function getMD5Password(id) {
  var md5 = crypto.createHash('md5');
  var token_before = id + init_token
  // res.json(userSave[0]._id)
  return md5.update(token_before).digest('hex')
}

module.exports = router;
