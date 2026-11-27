let page=45,stack=[],data={},agreed=false,code='';const scene=document.querySelector('#scene'),phone=document.querySelector('#phone');
function go(n){if(n!==page)stack.push(page);if(n===15&&page!==15)code='';page=n;render();phone.scrollTop=0}function back(){page=stack.pop()??45;render();phone.scrollTop=0}function toast(s){document.querySelector('.toast')?.remove();let e=document.createElement('div');e.className='toast';e.textContent=s;document.body.append(e);setTimeout(()=>e.remove(),2200)}
function modal(title,text,cb){let e=document.createElement('div');e.className='overlay';e.innerHTML='<div class="dialog"><h3></h3><p></p><div class="actions"><button class="cancel">取消</button><button class="ok">确定</button></div></div>';e.querySelector('h3').textContent=title;e.querySelector('p').textContent=text;document.body.append(e);e.querySelector('.cancel').onclick=()=>e.remove();e.querySelector('.ok').onclick=()=>{e.remove();cb?.()};e.onclick=x=>{if(x.target===e)e.remove()}}
function box(x,y,w,h,fn,label){let p=pages[page],H=p.height*220/p.width,b=document.createElement('button');b.className='hot';b.setAttribute('aria-label',label||'操作');Object.assign(b.style,{left:x/220*100+'%',top:y/H*100+'%',width:w/220*100+'%',height:h/H*100+'%'});b.onclick=fn;scene.append(b)}
function input(x,y,w,h,key,placeholder,type='text'){let p=pages[page],H=p.height*220/p.width,e=document.createElement('input');e.className='entry';e.type=type;e.value=data[key]||'';e.placeholder=placeholder;e.setAttribute('aria-label',placeholder);Object.assign(e.style,{left:x/220*100+'%',top:y/H*100+'%',width:w/220*100+'%',height:h/H*100+'%'});e.oninput=()=>data[key]=e.value;scene.append(e)}
function foot(){let p=pages[page],y=p.height*220/p.width-55;box(0,y,75,55,()=>go(45),'工作台');box(75,y,75,55,()=>go(13),'扫码核销');box(150,y,70,55,()=>go(0),'我的')}
function next(y,n,label='下一步'){box(8,y,204,35,()=>go(n),label)}function safe(y,n,label){box(8,y,204,35,()=>modal('模拟操作','这是交互演示，不会提交资料或发起真实业务。',()=>go(n)),label)}
function render(){let p=pages[page];scene.innerHTML='';let img=document.createElement('img');img.src='assets/'+encodeURIComponent(p.file);img.alt=p.file.replace('.jpg','');scene.append(img);if(page!==0&&page!==45)box(0,28,40,40,back,'返回');switch(page){
case 0:box(10,138,200,30,()=>go(17),'资金管理');box(10,170,200,28,()=>go(2),'店员管理');box(10,200,200,30,()=>go(1),'门店设置');box(160,30,50,38,()=>go(1),'门店设置');foot();break;
case 1:box(120,280,90,30,()=>go(3),'门店地址');box(10,350,200,35,()=>{toast('设置已保存（演示）');back()},'保存');break;
case 2:input(30,67,155,25,'staffSearch','输入关键词');box(145,110,60,30,()=>toast('添加店员演示'),'添加店员');box(5,145,205,310,()=>toast('店员信息演示'),'查看店员');break;
case 3:input(40,65,160,25,'mapSearch','搜索地点');next(425,1,'确认位置');break;
case 4:box(5,65,210,30,()=>toast('已切换试驾状态'),'试驾状态筛选');input(25,108,170,23,'driveSearch','按姓名或手机号搜索');box(15,210,115,34,()=>go(6),'预约试驾时间');box(140,210,65,34,()=>go(5),'查看详情');box(15,343,60,30,()=>toast('联系客户演示'),'联系客户');box(75,343,60,30,()=>go(7),'修改试驾');box(140,343,65,30,()=>go(8),'核销试驾');box(15,475,115,30,()=>go(8),'跟进意向');box(140,475,65,30,()=>go(5),'查看详情');foot();break;
case 5:box(142,425,65,30,()=>go(6),'安排时间');box(80,425,60,30,()=>toast('联系客户演示'),'电话邀约');break;
case 6:input(15,175,195,24,'driveDate','选择预约日期','date');box(10,226,200,40,()=>toast('已选择试驾时段'),'选择时段');input(12,300,195,48,'driveNote','电话沟通备注');box(145,425,65,30,()=>{toast('试驾时间已安排（演示）');go(4)},'确认安排');box(80,425,60,30,back,'取消');break;
case 7:box(10,195,205,250,()=>toast('已选择试驾车型'),'选择车型');input(12,480,195,24,'changeDate','选择预约日期','date');box(10,530,200,45,()=>toast('已选择试驾时段'),'选择时段');box(10,598,200,45,()=>toast('已选择意向等级'),'选择意向');input(15,673,190,45,'changeNote','电话沟通备注');box(140,755,65,32,()=>{toast('预约已修改（演示）');go(4)},'保存修改');break;
case 8:box(10,225,200,85,()=>toast('已选择试驾意向'),'试驾意向');input(12,338,195,50,'intentNote','填写试驾备注');box(140,425,67,32,()=>go(6),'安排时间');break;
case 9:box(5,65,210,30,()=>toast('已切换订单状态'),'订单筛选');input(25,108,175,22,'orderSearch','搜索手机号、客户姓名或订单号');box(10,140,205,110,()=>go(10),'查看待备货订单');box(10,270,205,110,()=>go(11),'查看待核销订单');foot();break;
case 10:box(140,700,70,35,()=>modal('确认备货','演示操作，不会更改真实订单。',()=>go(11)),'确认备货完成');break;
case 11:box(140,745,70,35,()=>modal('确认备货完成','这是模拟操作，不会修改真实订单。',()=>go(13)),'确认备货完成');box(12,330,195,45,()=>go(15),'查看核销码');break;
case 12:box(80,710,130,35,()=>go(40),'查看分账');break;
case 13:box(118,60,100,30,()=>go(15),'手动输入核销码');box(5,95,210,305,()=>go(14),'模拟扫码');foot();break;
case 14:box(10,323,95,30,()=>toast('已选择全款'),'已付全款');box(105,323,100,30,()=>toast('已选择定金'),'已付定金');box(145,500,63,32,()=>modal('确认提车核销','演示操作，不会核销真实订单。',()=>go(16)),'确认核销');break;
case 15:{
 let p=pages[page],H=p.height*220/p.width;
 for(let i=0;i<6;i++){let d=document.createElement('div');d.className='digit';d.textContent=code[i]||'';d.setAttribute('aria-label','第'+(i+1)+'位核销码');Object.assign(d.style,{position:'absolute',left:(18+i*31.25)/220*100+'%',top:156/H*100+'%',width:28.1/220*100+'%',height:30.5/H*100+'%',background:'#7156e5',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'clamp(18px,7vw,30px)',color:'#090909',lineHeight:'1'});scene.append(d)}
 const update=()=>{scene.querySelectorAll('.digit').forEach((d,i)=>d.textContent=code[i]||'')};
 const key=n=>{if(code.length>=6)return;code+=n;update();if(code.length===6)setTimeout(()=>{if(page===15&&code.length===6)go(14)},250)};
 [[1,2,3],[4,5,6],[7,8,9]].forEach((row,r)=>row.forEach((n,c)=>box(c*73,310+r*37,73,37,()=>key(String(n)),'数字'+n)));
 box(73,421,73,37,()=>key('0'),'数字0');box(146,421,74,37,()=>{code=code.slice(0,-1);update()},'删除一位');box(0,60,108,30,()=>go(13),'扫码核销');break;}
case 16:next(375,45,'返回工作台');break;
case 17:box(12,187,94,35,()=>go(22),'支付分账');box(110,187,98,35,()=>go(18),'提现');box(60,225,105,28,()=>go(20),'提现明细');box(150,380,60,30,()=>go(21),'查看支付详情');box(10,480,205,155,()=>go(40),'查看资金明细');box(10,155,100,30,()=>go(42),'冻结货款');foot();break;
case 18:input(27,144,175,40,'amount','输入提现金额','number');safe(415,19,'确认提现');break;
case 19:box(165,30,48,30,()=>go(17),'完成');next(430,17,'返回资金管理');break;
case 20:box(10,172,200,28,()=>toast('已切换明细状态'),'筛选提现明细');box(10,205,200,240,()=>toast('提现记录演示'),'查看提现记录');break;
case 21:box(12,527,195,35,()=>go(34),'支付宝立即申请');box(12,956,195,35,()=>go(37),'微信立即申请');foot();break;
case 22:next(415,23,'立即开通');break;
case 23:next(510,24,'开始入驻');break;
case 24:box(8,75,200,110,()=>toast('协议内容演示'),'查看协议');box(5,180,210,24,()=>{agreed=!agreed;toast(agreed?'已同意协议（演示）':'已取消同意')},'同意协议');box(8,415,205,35,()=>{if(!agreed){toast('请先阅读并同意协议');return}go(25)},'下一步');break;
case 25:box(8,415,204,35,()=>go(26),'下一步');break;
case 26:box(15,100,180,415,()=>toast('材料上传为演示功能'),'上传材料');next(545,27);break;
case 27:box(10,92,195,75,()=>toast('已选择结算账户'),'选择结算账户');next(415,28);break;
case 28:box(10,120,200,52,()=>go(32),'提交至支付宝');box(10,215,200,55,()=>go(43),'提交至微信');break;
case 29:case 30:box(15,200,190,145,()=>toast('审核状态仅供演示'),'查看审核状态');box(12,420,195,45,()=>go(31),'查看开通结果');break;
case 31:next(415,17,'返回资金管理');break;
case 32:safe(415,29,'确认提交');break;
case 33:safe(415,31,'确认绑定');break;
case 34:next(415,35,'立即入驻');break;
case 35:box(12,325,195,100,()=>toast('材料上传为演示功能'),'上传材料');safe(470,36,'下一步');break;
case 36:box(10,200,200,150,()=>toast('审核状态仅供演示'),'审核状态');box(10,410,200,42,()=>go(44),'查看审核结果');break;
case 37:next(415,38,'立即入驻');break;
case 38:box(12,325,195,100,()=>toast('材料上传为演示功能'),'上传材料');safe(470,39,'下一步');break;
case 39:box(10,200,200,150,()=>toast('审核状态仅供演示'),'审核状态');box(10,410,200,42,()=>go(33),'查看审核结果');break;
case 40:next(415,17,'查看资金管理');box(10,180,200,170,()=>go(41),'查看分账结果');break;
case 41:next(415,17,'返回资金管理');break;
case 42:next(415,17,'我知道了');break;
case 43:safe(415,30,'确认提交');break;
case 44:safe(415,31,'确认绑定');break;
case 45:box(10,127,98,42,()=>go(9),'今日订单');box(112,127,98,42,()=>go(10),'待备货');box(10,170,98,42,()=>go(11),'待核销');box(112,170,98,42,()=>go(17),'今日收入');box(12,221,35,42,()=>go(9),'订单');box(47,221,30,42,()=>go(4),'试驾');box(77,221,30,42,()=>toast('维修功能暂无页面'),'维修');box(107,221,30,42,()=>go(17),'资金');box(137,221,30,42,()=>toast('活动功能暂无页面'),'活动');box(167,221,40,42,()=>toast('后台功能暂无页面'),'后台');box(10,270,200,26,()=>go(10),'待备货订单');box(10,296,200,26,()=>go(11),'待核销到店提车');box(10,322,200,26,()=>go(4),'待电话邀约试驾');box(10,348,200,28,()=>go(17),'待到账金额');foot();break;
}}
render();

