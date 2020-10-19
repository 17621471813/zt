<template>
    <div class="lou">
        <div class="louTop">
            楼盘基本信息
        </div>
       <ul>
           <li>
               <span>项目地址</span> 
               <span>湖州市安吉县 灵峰度假区梅灵路与机场路交叉口西北角</span>
               <span>物业类型:</span>
               <span>多层, 叠墅</span>
               </li>
           <li>
               <span>售楼处地址:</span>
               <span>安吉县灵峰度假区梅灵路与机场路交叉口西北角</span>
               <span>占地面积:</span>
               <span>921794㎡</span>
           </li>
           <li>
               <span>开发商:</span>
               <span>港中旅安吉旅游发展有限公司</span>
               <span>物业公司:</span>
               <span>浙江绿城物业管理有限公司</span>
           </li>
           <li>
               <span>容积率:</span>
               <span>0.3</span>
               <span>绿化率:</span>
               <span>35%</span>
           </li>
           <li>
               <span>物业费用:</span>
               <span>2.3 元/m²</span>
               <span>产权年限:</span>
               <span>70年</span>
           </li>
           <li>
               <span>水电燃气:</span>
               <span>市政供水、供电</span>
               <span>装修状况:</span>
               <span>简装</span>
           </li>
           <li>
               <span>供暖方式:</span>
               <span>无</span>
               <span>建筑面积:</span>
               <span>130000㎡</span>
           </li>
       </ul>
    </div>
</template>

<style lang="less">
  .lou{
      position: relative;
      width: 85%;
      height: 340px;
      background:white;
      left: 6rem;
      top:40px;
      .louTop{
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 700;
          padding-left: 20px;
          border-bottom: 1px solid rgb(216, 207, 207);
          color:rgb(105, 99, 99);
      }
      ul{
          margin-top: 30px;
          li{
              margin: 15px 0 15px 20px;
              span{
                  font-size: 14px;
              }
              span:nth-child(1){
                   color: rgba(0,0,0,.35);
                   display: inline-block;
                   width: 80px;
              }
              span:nth-child(2){
                  display: inline-block;
                  width: 400px;
                  margin-left: 40px;
              }
              span:nth-child(3){
                    color: rgba(0,0,0,.35);
                   display: inline-block;
                   width: 80px;
                   margin-left: 50px;
              }
              span:nth-child(4){
                  margin-left: 40px;
              }
          }
      }
      
  }
</style>