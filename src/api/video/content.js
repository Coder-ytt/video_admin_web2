import request from '@/utils/request'
export default {
  //1.作者列表-分页查询
  getAuthorList(){
    return request({
      url: `/service_video/author/getAuthorList`,  //路由参数的拼接
      method: 'get'
    })
  },
  //2.添加作品信息
  addContentInfo(contentVO){
    return request({
      url: `/service_video/content/addContentInfo`,  //路由参数的拼接
      method: 'post',
      data:contentVO
    })
  },
  //3.根据id获取当前的作品
  getContentWithInfoId(id){
    return request({
      url: '/service_video/content/getContentWithInfoId/'+id,  //路由参数的拼接
      method: 'get'
    })
  },
  //4.更新作品信息
  updateContentInfo(contentVO){
    return request({
      url: `/service_video/content/updateContentInfo`,  //路由参数的拼接
      method: 'post',
      data:contentVO
    })
  },
  //获取作品预览
  getContentPreview(id){
    return request({
      url: `/service_video/content/getContentPreView/${id}`,  //路由参数的拼接
      method: 'get'
    })
  },
  sendContent(id){
    return request({
      url: `/service_video/content/sendContent/${id}`,  //路由参数的拼接
      method: 'post'
    })
  },
  getContentPageList(page,limit,searchObj){
    return request({
      url: `/service_video/content/getContentPageQuery/${page}/${limit}`,  //路由参数拼接
      method: 'post',
      data:searchObj
    })
  },
  deleteContentById(id){
    return request({
      url: `/service_video/content/deleteContent/${id}`,  //路由参数拼接
      method: 'post'
    })
  }
}
