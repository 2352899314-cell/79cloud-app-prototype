function registerService(){
 const heights=[2437,2437,2437,2437,2437,2437,2437,2437,2437,2437,2437,3094,3316,3316,3316,2437];
 const ids=Array.from({length:16},(_,i)=>'service'+String(i+1).padStart(2,'0'));
 const backward=()=>box(4,33,35,35,back,'返回');
 ids.forEach((id,i)=>addPage(id,'服务/服务界面-'+String(i+1).padStart(2,'0')+'.jpg',1126,heights[i],()=>{
 if(i>0)backward();
 switch(i+1){
 case 1:
 box(18,138,52,40,()=>go('service07'),'车主指南');box(81,138,62,40,()=>go('service09'),'车辆检测');box(155,138,63,40,()=>go('service02'),'常见问题');box(12,190,214,35,()=>go('service02'),'在线报修');box(8,249,220,70,()=>go('buy16'),'附近门店');box(8,321,100,32,()=>toast('导航演示'),'导航前往');box(122,321,106,32,()=>toast('联系门店演示'),'联系门店');box(8,363,220,58,()=>go('service16'),'线上支援');box(186,31,48,32,()=>go('service16'),'联系客服');nav();break;
 case 2:
 input(30,75,190,22,'serviceSearch','搜索您遇到的问题');for(let n=0;n<8;n++)box(12,100+n*43,215,40,()=>go('service03'),'选择故障类别');box(12,466,215,34,()=>go('service03'),'在线报修');break;
 case 3:
 box(20,100,200,130,()=>toast('已选择故障部位'),'选择故障部位');for(let n=0;n<8;n++)box(16+(n%2)*102,264+Math.floor(n/2)*31,96,29,()=>toast('已选择故障部位'),'选择故障部位');box(13,465,213,34,()=>go('service04'),'下一步');break;
 case 4:
 box(75,40,110,28,()=>dialog('提交工单','确认提交演示工单？',()=>go('service05')),'提交工单');box(160,82,65,30,()=>go('service03'),'修改故障部位');input(16,148,205,58,'fault','请描述故障现象');box(15,240,69,70,()=>toast('添加图片演示'),'添加图片');box(86,240,69,70,()=>toast('添加视频演示'),'添加视频');input(15,332,205,27,'repairName','联系人');input(15,385,205,27,'repairPhone','手机号码','tel');box(14,434,210,30,()=>dialog('提交工单','确认提交演示工单？',()=>go('service05')),'填写地区并提交');nav();break;
 case 5:box(10,374,220,32,()=>go('service06'),'查看我的工单');box(10,411,220,32,()=>go('service01'),'返回首页');break;
 case 6:box(12,82,215,80,()=>go('service13'),'查看诊断中工单');box(12,177,215,80,()=>go('service14'),'查看已完成工单');box(12,274,215,80,()=>go('service15'),'查看工单方案');nav();break;
 case 7:box(92,58,100,30,()=>toast('已选择车型'),'选择车型');box(8,208,45,215,()=>toast('已选择指南分类'),'指南分类');box(55,210,170,285,()=>go('service08'),'查看指南');break;
 case 8:box(8,30,225,140,()=>toast('视频播放演示'),'播放指南');box(8,265,220,230,()=>toast('指南播放演示'),'推荐指南');break;
 case 9:box(12,398,215,34,()=>go('service10'),'开始检测');nav();break;
 case 10:box(180,235,50,35,()=>toast('蓝牙状态演示'),'蓝牙开关');box(14,320,210,78,()=>go('service11'),'连接车辆');nav();break;
 case 11:box(10,95,220,340,()=>go('service12'),'查看检测结果');setTimeout(()=>{if(current==='service11')go('service12')},2200);break;
 case 12:box(10,218,220,35,()=>toast('检测结果仅供演示'),'车况详情');box(10,600,107,34,()=>toast('检测报告已保存（演示）'),'保存检测报告');box(123,600,108,34,()=>go('service01'),'完成');break;
 case 13:box(10,360,215,182,()=>go('service15'),'查看处理进度');box(10,549,220,65,()=>go('service16'),'联系工程师');nav();break;
 case 14:box(10,414,215,110,()=>go('service15'),'查看处理记录');box(10,550,220,65,()=>go('service16'),'联系工程师');nav();break;
 case 15:box(10,310,220,185,()=>toast('已选择维修方案'),'选择维修方案');box(15,505,210,35,()=>dialog('确认维修方案','这是模拟操作，不会产生费用。',()=>go('service06')),'确认方案');box(15,540,210,35,()=>go('service16'),'有异议重新诊断');nav();break;
 case 16:box(12,172,215,180,()=>toast('常见问题演示'),'常见问题');input(12,472,170,30,'serviceMessage','请输入您的问题');box(185,470,44,35,()=>toast('客服消息为演示，不会实际发送'),'发送消息');break;
 }
 }));
}
