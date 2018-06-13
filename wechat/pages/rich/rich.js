var util = require('../../utils/util.js');
Page({
  data: {
    nodes:'',
  },
  onLoad: function (options) {
    let content = '<p>本地</p><p><img alt="-2-1024x763.jpeg" src="https://pai.arthongzhen.com/uploads/6fa45513b114bacb99f72e87f53041b7.jpeg" width="1024" height="763"><br></p><p>本地上传的测试<br></p><p>本地上传的测试<br></p><p><img alt="pai10.jpg" src="https://pai.arthongzhen.com/uploads/925864579ed132e952ea05deb8d694bb.jpg" width="600" height="400"><img alt="pai9.jpg" src="https://pai.arthongzhen.com/uploads/734455c8ed9fbbcfab315687d429e4f0.jpg" width="600" height="400"></p><p>本地上传的测试<br></p><p>本地<br></p><p><img alt="pai8.jpg" src="https://pai.arthongzhen.com/uploads/760aa2c24392105bf3b5d0c03efb5b29.jpg" width="600" height="400"><img alt="pai7.jpg" src="https://pai.arthongzhen.com/uploads/c14e1649ddbd2a5ae23f27d21fc8474a.jpg" width="600" height="400"><img alt="pai6.jpg" src="https://pai.arthongzhen.com/uploads/6c97f329e447aa72ce46c8e1f3ef7ef3.jpg" width="600" height="400"><img alt="pai5.jpg" src="https://pai.arthongzhen.com/uploads/528d2d3b6907fb76196dc02dd8988c1d.jpg" width="600" height="400"><img alt="pai4.jpg" src="https://pai.arthongzhen.com/uploads/8488dec745103429ecec7d52d1fc8e23.jpg" width="600" height="400"><img alt="pai3.jpg" src="https://pai.arthongzhen.com/uploads/801c411b5b01185936557571665e539b.jpg" width="600" height="400"></p><p>本地上传的测试</p><p><img alt="pai2.jpg" src="https://pai.arthongzhen.com/uploads/1b6dd7ff1c4af579f0c5d8255e241de3.jpg" width="600" height="400"></p><p><img alt="pai1.jpg" src="https://pai.arthongzhen.com/uploads/ae36cbbbc3372f9617d18eb39bc13bc8.jpg" width="600" height="400"><br></p>'
;
    this.data.nodes = content.replace(/<img/g, '<img style="max-width:100%;height:auto" ').replace(/<p/g,'<p style="font-size:14px;line-height:20px;margin:0 5px;"') //防止富文本图片过大
    this.setData({
      nodes:this.data.nodes
    })
  },

  onShareAppMessage: function (res) { //转发
    var webViewUrl = encodeURIComponent(res.webViewUrl);
    console.log(res)
    return {
      title: this.data.title,
      path: '/pages/index/index?return_url=' + webViewUrl,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
    
  }

})



