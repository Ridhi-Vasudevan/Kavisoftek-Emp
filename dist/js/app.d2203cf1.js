(function(){"use strict";var e={8514:function(e,s,t){var a=t(9963),o=t(6252);function r(e,s,t,a,r,n){const i=(0,o.up)("AdminPage"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[n.isAdminPage?((0,o.wg)(),(0,o.j4)(i,{key:0})):((0,o.wg)(),(0,o.j4)(l,{key:e.$route.fullPath}))])}const n={class:"body"},i={class:"row"},l={class:"row"},d={class:"col-sm-2"},c={class:"col-sm-10 main-page"};function u(e,s,t,a,r,u){const m=(0,o.up)("TopBar"),p=(0,o.up)("SideBar"),g=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",i,[(0,o.Wm)(m)]),(0,o._)("div",l,[(0,o._)("div",d,[(0,o.Wm)(p)]),(0,o._)("div",c,[(0,o.Wm)(g)])])])}const m=e=>((0,o.dD)("data-v-387c54a1"),e=e(),(0,o.Cn)(),e),p={class:"float-left sidenav"},g={class:"side-column"},h=(0,o.uE)('<div data-v-387c54a1><a href="/employee" data-v-387c54a1><i class="fa fa-chart-line" data-v-387c54a1></i><span class="side-menu" data-v-387c54a1> Dashboard</span></a></div><div data-v-387c54a1><a href="/employee" data-v-387c54a1><i class="fa fa-user" data-v-387c54a1></i><span class="side-menu" data-v-387c54a1> Manage Employees</span></a></div>',2),v=m((()=>(0,o._)("i",{class:"fa-solid fa-arrow-right-from-bracket"},null,-1))),f=m((()=>(0,o._)("span",{class:"side-menu"},"Logout",-1))),_=[v,f];function y(e,s,t,a,r,n){return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",g,[h,(0,o._)("div",null,[(0,o._)("a",{href:"#",onClick:s[0]||(s[0]=(...e)=>n.confirmLogout&&n.confirmLogout(...e))},_)])])])}var w=t(6455),b=t.n(w),U={name:"SideBar",props:{selectedUserId:{type:String,default:""}},methods:{confirmLogout(){b().fire({title:"Are you sure?",text:"You will be logged out!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, logout!"}).then((e=>{e.isConfirmed&&this.logout()}))},logout(){localStorage.removeItem("userToken"),window.location.href="/login"}}},D=t(3744);const k=(0,D.Z)(U,[["render",y],["__scopeId","data-v-387c54a1"]]);var F=k;const x=e=>((0,o.dD)("data-v-d8956c10"),e=e(),(0,o.Cn)(),e),P={class:"row topbar"},S=x((()=>(0,o._)("div",{class:"col-sm-2"},[(0,o._)("img",{src:"/assets/kavisoftek.png",class:"img-fluid img-responsive company-logo"})],-1))),A=x((()=>(0,o._)("div",{class:"col-sm-10"},null,-1))),I=[S,A];function C(e,s,t,a,r,n){return(0,o.wg)(),(0,o.iD)("div",P,I)}var E={name:"TopBar",data(){return{companyLogo:"@/assets/kavisoftek.png"}}};const O=(0,D.Z)(E,[["render",C],["__scopeId","data-v-d8956c10"]]);var M=O,$={name:"AdminPage",components:{TopBar:M,SideBar:F}};const T=(0,D.Z)($,[["render",u],["__scopeId","data-v-0afbeac2"]]);var L=T,j={name:"App",components:{AdminPage:L},computed:{isAdminPage(){return"admin"===this.$route.name}}};const Z=(0,D.Z)(j,[["render",r]]);var V=Z,B=t(2119),z=t(3577);const q=e=>((0,o.dD)("data-v-282947fd"),e=e(),(0,o.Cn)(),e),Y={class:"employee-page"},H=q((()=>(0,o._)("h4",{class:"page-head"},"Manage Employees",-1))),R={class:"emp-btn-row"},W=q((()=>(0,o._)("i",{class:"fa-solid fa-plus"},null,-1))),N={key:0},K={class:"row d-flex justify-content-center"},G={class:"col-sm-3"},J={class:"col-sm-3"},Q=(0,o.uE)('<option value="" disabled selected data-v-282947fd>Select Designation</option><option value="Manager" data-v-282947fd>Manager</option><option value="Senior Developer" data-v-282947fd>Senior Developer</option><option value="Developer" data-v-282947fd>Developer</option><option value="Developer Trainee" data-v-282947fd>Developer Trainee</option><option value="Editor" data-v-282947fd>Editor</option><option value="Designer" data-v-282947fd>Designer</option>',7),X=[Q],ee={class:"col-sm-3"},se=q((()=>(0,o._)("option",{value:"",disabled:"",selected:""},"Select Status",-1))),te=q((()=>(0,o._)("option",{value:"active"},"Active",-1))),ae=q((()=>(0,o._)("option",{value:"inactive"},"Inactive",-1))),oe=[se,te,ae],re={class:"col-sm-3"},ne={class:"col-sm-3"},ie={class:"col-sm-3"},le={class:"col-sm-3"},de={class:"col-sm-3"},ce={class:"col-sm-3"},ue={class:"col-sm-3"},me=q((()=>(0,o._)("option",{value:"",disabled:"",selected:""},"Select Marital Status",-1))),pe=q((()=>(0,o._)("option",{value:"married"},"Married",-1))),ge=q((()=>(0,o._)("option",{value:"unmarried"},"Unmarried",-1))),he=[me,pe,ge],ve={class:"col-sm-3"},fe=q((()=>(0,o._)("option",{value:"",disabled:"",selected:""},"Select Gender",-1))),_e=q((()=>(0,o._)("option",{value:"male"},"Male",-1))),ye=q((()=>(0,o._)("option",{value:"female"},"Female",-1))),we=[fe,_e,ye],be={class:"col-sm-3"},Ue={class:"col-sm-3"},De={class:"col-sm-3"},ke={class:"col-sm-3"},Fe={class:"col-sm-3"},xe={class:"col-sm-3"},Pe={type:"submit"},Se={class:"row userlist-table"},Ae=q((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Employee Name"),(0,o._)("th",null,"Designation"),(0,o._)("th",null,"Employee ID"),(0,o._)("th",{style:{"text-align":"center"}},"Status"),(0,o._)("th",{style:{"text-align":"center"}},"Action"),(0,o._)("th",{style:{"text-align":"center"}},"More")])],-1))),Ie={class:"user-name"},Ce={style:{"text-align":"center"}},Ee={class:"action-btn d-flex justify-content-center"},Oe=["onClick"],Me=["onClick"],$e={style:{"text-align":"center"}},Te=q((()=>(0,o._)("i",{class:"fa fa-circle-chevron-right more-icon"},null,-1)));function Le(e,s,t,r,n,i){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Y,[H,(0,o._)("div",R,[(0,o._)("button",{onClick:s[0]||(s[0]=(...e)=>i.showAddUserForm&&i.showAddUserForm(...e)),class:"adduser-btn"},[W,(0,o.Uk)(" Add User ")])]),n.showAddUser||n.editingUser?((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("form",{onSubmit:s[17]||(s[17]=(0,a.iM)(((...e)=>i.addOrUpdateUser&&i.addOrUpdateUser(...e)),["prevent"])),class:"add-edit-user"},[(0,o._)("div",K,[(0,o._)("div",G,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>n.userForm.name=e),id:"userName",placeholder:"Name",required:""},null,512),[[a.nr,n.userForm.name]])]),(0,o._)("div",J,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>n.userForm.designation=e),id:"userDesignation",required:"",class:"user-select"},X,512),[[a.bM,n.userForm.designation]])]),(0,o._)("div",ee,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":s[3]||(s[3]=e=>n.userForm.status=e),id:"userStatus",class:"user-select",required:""},oe,512),[[a.bM,n.userForm.status]])]),(0,o._)("div",re,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[4]||(s[4]=e=>n.userForm.employeeid=e),id:"userEid",placeholder:"Employee ID",required:""},null,512),[[a.nr,n.userForm.employeeid]])]),(0,o._)("div",ne,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=e=>n.userForm.dob=e),id:"userDob",placeholder:"Date of Birth",required:"",onfocus:"(this.type='date')",onblur:"(this.type='text')"},null,512),[[a.nr,n.userForm.dob]])]),(0,o._)("div",ie,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[6]||(s[6]=e=>n.userForm.address=e),id:"userAddress",placeholder:"Address"},null,512),[[a.nr,n.userForm.address]])]),(0,o._)("div",le,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[7]||(s[7]=e=>n.userForm.email=e),id:"userEmail",placeholder:"Email"},null,512),[[a.nr,n.userForm.email]])]),(0,o._)("div",de,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[8]||(s[8]=e=>n.userForm.education=e),id:"userEducation",placeholder:"Education"},null,512),[[a.nr,n.userForm.education]])]),(0,o._)("div",ce,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[9]||(s[9]=e=>n.userForm.location=e),id:"userLocation",placeholder:"Location"},null,512),[[a.nr,n.userForm.location]])]),(0,o._)("div",ue,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":s[10]||(s[10]=e=>n.userForm.maritalstatus=e),id:"userMaritalStatus",class:"user-select"},he,512),[[a.bM,n.userForm.maritalstatus]])]),(0,o._)("div",ve,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":s[11]||(s[11]=e=>n.userForm.gender=e),id:"userGender",class:"user-select"},we,512),[[a.bM,n.userForm.gender]])]),(0,o._)("div",be,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[12]||(s[12]=e=>n.userForm.phonenumber=e),id:"userPhoneNumber",placeholder:"Phone Number",required:""},null,512),[[a.nr,n.userForm.phonenumber]])]),(0,o._)("div",Ue,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[13]||(s[13]=e=>n.userForm.altphoneno=e),id:"userAltPhoneNo",placeholder:"Alternate Phone Number"},null,512),[[a.nr,n.userForm.altphoneno]])]),(0,o._)("div",De,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[14]||(s[14]=e=>n.userForm.officialemail=e),id:"userOfficialEmail",placeholder:"Official Email"},null,512),[[a.nr,n.userForm.officialemail]])]),(0,o._)("div",ke,[(0,o._)("input",{ref:"imageUploader",type:"file",accept:".jpg, .jpeg",onChange:s[15]||(s[15]=(...e)=>i.handleImageChange&&i.handleImageChange(...e))},null,544)]),(0,o._)("div",Fe,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[16]||(s[16]=e=>n.userForm.password=e),id:"userPassword",placeholder:"Password",required:""},null,512),[[a.nr,n.userForm.password]])]),(0,o._)("div",xe,[(0,o._)("button",Pe,(0,z.zw)(n.editingUser?"Update User":"Save User"),1)])])],32)])):(0,o.kq)("",!0),(0,o._)("div",Se,[(0,o._)("table",null,[Ae,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.users,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",Ie,(0,z.zw)(e.name),1),(0,o._)("td",null,(0,z.zw)(e.designation),1),(0,o._)("td",null,(0,z.zw)(e.employeeid),1),(0,o._)("td",Ce,(0,z.zw)(e.status),1),(0,o._)("td",Ee,[(0,o._)("button",{onClick:s=>i.editUser(e),class:"edit-btn"},"Edit",8,Oe),(0,o.Uk)("| "),(0,o._)("button",{onClick:s=>i.confirmDeleteUser(e.id),class:"trash-btn"},"Delete",8,Me)]),(0,o._)("td",$e,[e&&e.id?((0,o.wg)(),(0,o.j4)(l,{to:"/employee/"+e.id,key:e.id},{default:(0,o.w5)((()=>[Te])),_:2},1032,["to"])):(0,o.kq)("",!0)])])))),128))])])])])}t(560);var je=t(5121),Ze={name:"EmployeePage",metaInfo:{requiresAuth:!0},data(){return{apiUrl:"http://192.168.1.7:5000",showFilter:!1,showAddUser:!1,users:[],editingUser:null,userForm:{name:"",dob:"",designation:"",address:"",email:"",image:null,employeeid:"",status:"",education:"",location:"",maritalstatus:"",gender:"",phonenumber:"",altphoneno:"",officialemail:""}}},computed:{filteredUsers(){return this.users}},methods:{async addOrUpdateUser(){if(this.userForm.image)try{if(this.editingUser){const e=await je.Z.put(`${this.apiUrl}/employees/${this.editingUser.id}`,this.userForm),s=e.data,t=this.users.findIndex((e=>e.id===s.id));-1!==t&&this.$set(this.users,t,s)}else{const e=await je.Z.post(`${this.apiUrl}/employees`,this.userForm),s=e.data;this.users.push(s)}this.showAddUser=!1,this.resetUserForm()}catch(e){console.error("Error adding/updating user:",e)}},showAddUserForm(){console.log(this.showAddUser),this.showAddUser=!0,this.editingUser=null,this.resetUserForm()},editUser(e){console.log(this.editingUser),this.showAddUser=!0,this.editingUser=e,this.userForm={...e}},async deleteUser(e){try{await je.Z.delete(`${this.apiUrl}/employees/${e}`),this.users=this.users.filter((s=>s.id!==e))}catch(s){console.error("Error deleting user:",s)}},async confirmDeleteUser(e){const s=await b().fire({title:"Are you sure?",text:"You will not be able to recover this user!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel",reverseButtons:!0});s.isConfirmed&&this.deleteUser(e)},handleImageChange(e){const s=new FileReader;s.readAsDataURL(e.target.files[0]),console.log(s.result,e.target.files),setTimeout((()=>{var e=s.result.split(",")[1];console.log("Encoded Binary File String:",e),this.userForm.image=s.result}),2e3)},resetUserForm(){this.editingUser=null,this.userForm={name:"",dob:"",designation:"",address:"",email:"",image:null,employeeid:"",status:"",education:"",location:"",maritalstatus:"",gender:"",phonenumber:"",altphoneno:"",officialemail:""}}},async mounted(){try{const e=await je.Z.get(`${this.apiUrl}/employees`);console.log("API Response:",e.data),this.users=e.data}catch(e){console.error("Error fetching users:",e)}}};const Ve=(0,D.Z)(Ze,[["render",Le],["__scopeId","data-v-282947fd"]]);var Be=Ve;const ze=e=>((0,o.dD)("data-v-59c99534"),e=e(),(0,o.Cn)(),e),qe={class:"row login-bg"},Ye={class:"col-sm-6 login-bg1"},He=ze((()=>(0,o._)("div",null,[(0,o._)("a",{href:"/",class:"back-btn"},[(0,o._)("i",{class:"fa fa-circle-arrow-left"}),(0,o.Uk)(" Back")])],-1))),Re={class:"left-col"},We={class:"col-sm-8"},Ne=["src"],Ke=ze((()=>(0,o._)("div",{class:"col-sm-8"},[(0,o._)("h5",{style:{"text-align":"left","margin-left":"10px"},class:"log-txt"},"Login-Here")],-1))),Ge=ze((()=>(0,o._)("br",null,null,-1))),Je={class:"col-sm-10 login-form"},Qe=ze((()=>(0,o._)("br",null,null,-1))),Xe={class:"password-input-container"},es=["type"],ss={key:0,class:"fas fa-eye"},ts={key:1,class:"fas fa-eye-slash"},as=ze((()=>(0,o._)("br",null,null,-1))),os=ze((()=>(0,o._)("div",{class:"d-flex justify-content-center create-acc-btn"},[(0,o._)("a",{href:"/register",class:""},"Create Account?")],-1))),rs={class:"col-sm-6 login-bg2"},ns={class:"d-flex justify-content-center"},is=["src"];function ls(e,s,t,r,n,i){return(0,o.wg)(),(0,o.iD)("div",qe,[(0,o._)("div",Ye,[He,(0,o._)("div",Re,[(0,o._)("div",We,[(0,o._)("img",{src:n.companyLogo,class:"img-fluid img-responsive company-logo"},null,8,Ne)]),Ke,Ge,(0,o._)("div",Je,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.username=e),type:"text",placeholder:"Username",required:""},null,512),[[a.nr,n.username]]),Qe,(0,o._)("div",Xe,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>n.password=e),type:n.passwordFieldType,placeholder:"Password",onKeyup:s[2]||(s[2]=(0,a.D2)(((...e)=>i.submitForm&&i.submitForm(...e)),["enter"])),required:""},null,40,es),[[a.YZ,n.password]]),(0,o._)("i",{class:"password-icon",onClick:s[3]||(s[3]=(...e)=>i.togglePasswordVisibility&&i.togglePasswordVisibility(...e))},["password"===n.passwordFieldType?((0,o.wg)(),(0,o.iD)("i",ss)):((0,o.wg)(),(0,o.iD)("i",ts))])]),as,(0,o._)("button",{class:"login-btn",onClick:s[4]||(s[4]=(...e)=>i.submitForm&&i.submitForm(...e))},"Login"),os])])]),(0,o._)("div",rs,[(0,o._)("div",ns,[(0,o._)("img",{src:n.loginImg,class:"img-fluid img-responsive login-img"},null,8,is)])])])}var ds={name:"LoginPage",data(){return{loginImg:"./assets/log3.jpg",companyLogo:"./assets/kavisoftek.png",username:"",password:"",showAlertMsg:!1,passwordFieldType:"password",apiUrl:"http://192.168.1.7:5000"}},methods:{async submitForm(){try{if(this.showAlertMsg=!1,!this.username||!this.password)return this.showAlertMsg=!0,void console.error("Please enter both username and password");const e=await je.Z.post(`${this.apiUrl}/adminlogin`,{username:this.username,password:this.password});e&&e.data?e.data.success?(console.log("Authentication Successful:",e.data),this.$router.push("/employee"),this.username="",this.password="",this.showAlertMsg=!1):(this.showAlertMsg=!0,console.error("Invalid username or password")):console.error("Invalid response from the server:",e)}catch(e){this.username="",this.password="",e.response&&401===e.response.status?(this.showAlertMsg=!0,console.error("Invalid username or password")):console.error("Authentication Failed:",e.response?e.response.data:e.message)}},togglePasswordVisibility(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}};const cs=(0,D.Z)(ds,[["render",ls],["__scopeId","data-v-59c99534"]]);var us=cs;const ms=e=>((0,o.dD)("data-v-7f5cd5b7"),e=e(),(0,o.Cn)(),e),ps=ms((()=>(0,o._)("div",null,[(0,o._)("a",{href:"/",class:"back-btn-2"},[(0,o._)("i",{class:"fa fa-circle-arrow-left"}),(0,o.Uk)(" Back")])],-1))),gs={class:"container"},hs={class:"card atd-card"},vs={class:"row"},fs={class:"col-sm-6 atd-left-col"},_s={class:"d-flex justify-content-center"},ys={class:"camera-box"},ws={class:"d-flex justify-content-center"},bs={class:"camera-button"},Us={key:0},Ds=ms((()=>(0,o._)("i",{style:{height:"0.5px"},class:"button-img fa-solid fa-camera"},null,-1))),ks=[Ds],Fs={key:1},xs=ms((()=>(0,o._)("i",{style:{height:"0.5px"},class:"fa-solid fa-square-xmark"},null,-1))),Ps=[xs],Ss={style:{height:"10px"}},As={key:0,class:"camera-canvas"},Is=["width","height"],Cs=["width","height"],Es={class:"col-sm-6 atd-right-col"},Os={class:"col-sm-7"},Ms=["src"],$s=ms((()=>(0,o._)("div",{class:"col-sm-7"},[(0,o._)("h5",{style:{"text-align":"left","margin-left":"10px"}},"User Attendance Status")],-1))),Ts=ms((()=>(0,o._)("br",null,null,-1))),Ls={class:"col-sm-8 atd-form"},js={class:"select-dropdown",style:{"text-align":"left","margin-left":"10px"}},Zs=ms((()=>(0,o._)("option",{value:"",disabled:"",selected:""},"Employee ID",-1))),Vs=["value"],Bs=ms((()=>(0,o._)("br",null,null,-1))),zs=ms((()=>(0,o._)("button",{type:"submit",class:"submit-btn",style:{"margin-left":"10px"}},"Submit",-1))),qs={key:0},Ys=ms((()=>(0,o._)("p",{style:{"text-align":"center","margin-top":"25px"}},"Submitted!",-1))),Hs=[Ys],Rs={key:1,class:"error-text"};function Ws(e,s,t,r,n,i){const l=(0,o.up)("vue-picture-swipe");return(0,o.wg)(),(0,o.iD)(o.HY,null,[ps,(0,o._)("div",gs,[(0,o._)("div",hs,[(0,o._)("div",vs,[(0,o._)("div",fs,[(0,o._)("div",_s,[(0,o._)("div",ys,[(0,o._)("div",ws,[n.isCameraOpen?((0,o.wg)(),(0,o.iD)("i",{key:0,style:{height:"25px","margin-top":"3px","line-height":"-8px"},class:"button-img camera-shoot fa-solid fa-camera",onClick:s[0]||(s[0]=(...e)=>i.capture&&i.capture(...e))})):(0,o.kq)("",!0),(0,o._)("div",bs,[(0,o._)("button",{type:"button",class:"button is-rounded cam-button",style:{"margin-left":"40%",border:"0px","margin-top":"-50px"},onClick:s[1]||(s[1]=(...e)=>i.toggleCamera&&i.toggleCamera(...e))},[n.isCameraOpen?((0,o.wg)(),(0,o.iD)("span",Fs,Ps)):((0,o.wg)(),(0,o.iD)("span",Us,ks))])])]),(0,o._)("div",Ss,[n.isCameraOpen?((0,o.wg)(),(0,o.iD)("div",As,[(0,o._)("video",{ref:"camera",width:n.canvasWidth,height:n.canvasHeight,autoplay:""},null,8,Is),(0,o.wy)((0,o._)("canvas",{id:"photoTaken",ref:"canvas",width:n.canvasWidth,height:n.canvasHeight},null,8,Cs),[[a.F8,!1]])])):(0,o.kq)("",!0)]),(0,o.Wm)(l,{items:n.items},null,8,["items"])])])]),(0,o._)("div",Es,[(0,o._)("div",Os,[(0,o._)("img",{src:n.companyLogo,class:"img-fluid img-responsive company-logo"},null,8,Ms)]),$s,Ts,(0,o._)("form",{onSubmit:s[3]||(s[3]=(0,a.iM)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,o._)("div",Ls,[(0,o._)("div",js,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>n.employeeId=e),required:""},[Zs,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.employeeOptions,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.employeeid,value:e.employeeid},(0,z.zw)(e.employeeid),9,Vs)))),128))],512),[[a.bM,n.employeeId]])]),Bs,zs])],32)])])]),n.submitted?((0,o.wg)(),(0,o.iD)("div",qs,Hs)):(0,o.kq)("",!0),n.showErrorMessage?((0,o.wg)(),(0,o.iD)("div",Rs," Please take a picture before submitting. ")):(0,o.kq)("",!0)])],64)}t(3429),t(4224),t(1121),t(7133);var Ns=t(8695),Ks={name:"AttendancePage",components:{VuePictureSwipe:Ns.Z},data(){return{camImage:"./assets/cam-image.png",companyLogo:"./assets/kavisoftek.png",isCameraOpen:!1,canvasHeight:300,canvasWidth:290,employeeId:"",attendanceStatus:"in",submitted:!1,isChecked:!1,showErrorMessage:!1,isBefore11AM:!1,apiUrl:"http://192.168.1.7:5000",items:[],employeeOptions:[]}},created(){this.fetchEmployeeOptions()},methods:{async fetchEmployeeOptions(){try{const e=await je.Z.get(`${this.apiUrl}/employees`);this.employeeOptions=e.data}catch(e){console.error("Error fetching employee options:",e)}},async submitForm(){try{if(this.employeeId&&this.items.length>0){if(this.items.length>0){const e=this.items[0].src;this.uploadPhoto(e,this.isBefore11AM)}this.submitted=!0,console.log("Form Submitted!"),this.$router.push("/response")}else this.showErrorMessage=!0}catch(e){console.error("Error submitting form:",e)}},toggleCamera(){this.isCameraOpen?(this.isCameraOpen=!1,this.stopCameraStream()):(this.isCameraOpen=!0,this.startCameraStream())},startCameraStream(){const e=window.constraints={audio:!1,video:!0};navigator.mediaDevices.getUserMedia(e).then((e=>{this.$refs.camera.srcObject=e})).catch((e=>{alert("Browser doesn't support or there is some errors."+e)}))},stopCameraStream(){let e=this.$refs.camera.srcObject.getTracks();e.forEach((e=>{e.stop()}))},capture(){const e=50;let s=this;setTimeout((()=>{const e=s.$refs.canvas.getContext("2d");e.drawImage(s.$refs.camera,0,0,s.canvasWidth,s.canvasHeight);const t=s.$refs.canvas.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream");s.addToPhotoGallery(t),s.isCameraOpen=!1,s.stopCameraStream()}),e)},addToPhotoGallery(e){this.items.push({src:e,thumbnail:e,w:this.canvasWidth,h:this.canvasHeight,alt:"some numbers on a grey background"})},uploadPhoto(e,s){let t=this.generateCapturePhotoName(),a=this.dataURLtoFile(e,t+".jpg"),o=new FormData;o.append("file",a),console.log(e);let r=this.employeeId;je.Z.post(`${this.apiUrl}/attendance`,{employeeid:r,image:e,isBefore11AM:s}).then((e=>{console.log(e)})).catch((e=>{console.error("Error uploading photo:",e)}))},generateCapturePhotoName(){return Math.random().toString(36).substring(2,15)},dataURLtoFile(e,s){let t=e.split(","),a=t[0].match(/:(.*?);/)[1],o=atob(t[1]),r=o.length,n=new Uint8Array(r);while(r--)n[r]=o.charCodeAt(r);return new File([n],s,{type:a})}}};const Gs=(0,D.Z)(Ks,[["render",Ws],["__scopeId","data-v-7f5cd5b7"]]);var Js=Gs;const Qs=e=>((0,o.dD)("data-v-5db875e2"),e=e(),(0,o.Cn)(),e),Xs={class:"main-bg"},et=Qs((()=>(0,o._)("div",{class:"navbar land-nav"},[(0,o._)("a",{href:"/login"},"Login"),(0,o.Uk)(" / "),(0,o._)("a",{href:"/register"},"Signup")],-1))),st={class:"container land-container"},tt={class:"row"},at={class:"col-sm-6 land-left"},ot={class:"col-sm-7"},rt=["src"],nt=(0,o.uE)('<div class="com-tagline" data-v-5db875e2>Best Way to Compete..</div><div class="land-btns" data-v-5db875e2><a href="/attendance-form" data-v-5db875e2><button class="atnd-btn" data-v-5db875e2>Register Attendance</button></a><a href="/login" data-v-5db875e2><button class="admin-btn" data-v-5db875e2>Go to Admin-Page</button></a></div>',2),it={class:"col-sm-6"},lt={class:"d-flex justify-content-end"},dt=["src"];function ct(e,s,t,a,r,n){return(0,o.wg)(),(0,o.iD)("div",Xs,[et,(0,o._)("div",st,[(0,o._)("div",tt,[(0,o._)("div",at,[(0,o._)("div",ot,[(0,o._)("img",{src:r.companyLogo,class:"img-fluid img-responsive"},null,8,rt)]),nt]),(0,o._)("div",it,[(0,o._)("div",lt,[(0,o._)("img",{src:r.vectorImage,class:"img-fluid img-responsive vector-img"},null,8,dt)])])])])])}var ut={name:"HomePage",data(){return{companyLogo:"./assets/kavisoftek.png",vectorImage:"./assets/vector.png"}}};const mt=(0,D.Z)(ut,[["render",ct],["__scopeId","data-v-5db875e2"]]);var pt=mt;const gt={class:"main-bg"},ht={class:"container"},vt={class:"row"},ft={class:"col-sm-6 d-flex justify-content-start"},_t=["src"],yt={class:"col-sm-6 land-left float-right"},wt={class:"col-sm-7"},bt=["src"],Ut=(0,o.uE)('<div class="com-tagline" data-v-203dfe5a>Your Attendance has been Successfully Submitted..</div><div class="land-btns" data-v-203dfe5a><a href="/attendance-form" data-v-203dfe5a><button class="atnd-btn" data-v-203dfe5a>Back to Attendance</button></a><a href="/" data-v-203dfe5a><button class="admin-btn" data-v-203dfe5a>Back to Home</button></a></div>',2);function Dt(e,s,t,a,r,n){return(0,o.wg)(),(0,o.iD)("div",gt,[(0,o._)("div",ht,[(0,o._)("div",vt,[(0,o._)("div",ft,[(0,o._)("img",{src:r.vectorImage,class:"img-fluid img-responsive vector-img"},null,8,_t)]),(0,o._)("div",yt,[(0,o._)("div",wt,[(0,o._)("img",{src:r.companyLogo,class:"img-fluid img-responsive"},null,8,bt)]),Ut])])])])}var kt={name:"ResponsePage",data(){return{companyLogo:"./assets/kavisoftek.png",vectorImage:"./assets/response.png"}}};const Ft=(0,D.Z)(kt,[["render",Dt],["__scopeId","data-v-203dfe5a"]]);var xt=Ft;const Pt=e=>((0,o.dD)("data-v-d7dea20c"),e=e(),(0,o.Cn)(),e),St={key:0,class:"spinner-border text-primary"},At={key:1},It={key:2,class:"user-profile-page"},Ct={class:"row user-head"},Et={class:"row"},Ot={class:"col-sm-2"},Mt=["src"],$t={class:"col-sm-4 user-head-text"},Tt={class:"d-flex"},Lt={class:"user-name"},jt={class:"user-designation"},Zt={class:"user-id"},Vt={class:"col-sm-5"},Bt={class:"time-log"},zt=Pt((()=>(0,o._)("span",{class:"timelog"},[(0,o._)("i",{class:"fa fa-circle-chevron-right"}),(0,o.Uk)(" TimeLog ")],-1))),qt=Pt((()=>(0,o._)("div",{class:"demography"}," Demographics ",-1))),Yt={class:"row user-body"},Ht={class:"col-sm-6 user-body-1"},Rt={class:"detail-label"},Wt={class:"detail-label"},Nt={class:"detail-label"},Kt={class:"detail-label"},Gt={class:"detail-label"},Jt={class:"col-sm-6 user-body-2"},Qt={class:"detail-label"},Xt={class:"detail-label"},ea={class:"detail-label"},sa={class:"detail-label"},ta={class:"detail-label"},aa={key:3};function oa(e,s,t,a,r,n){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r.loading?((0,o.wg)(),(0,o.iD)("div",St)):(0,o.kq)("",!0),r.error?((0,o.wg)(),(0,o.iD)("div",At,"Error fetching user: "+(0,z.zw)(r.error),1)):(0,o.kq)("",!0),r.dataloading?((0,o.wg)(),(0,o.iD)("div",It,[(0,o._)("div",Ct,[(0,o._)("div",Et,[(0,o._)("div",Ot,[(0,o._)("img",{src:r.userData.editImage,alt:"User Image",class:"img-fluid img-responsive user-image"},null,8,Mt)]),(0,o._)("div",$t,[(0,o._)("div",Tt,[(0,o._)("div",Lt,(0,z.zw)(r.userData.name),1)]),(0,o._)("div",jt,(0,z.zw)(r.userData.designation),1),(0,o._)("div",Zt,"( Employee ID - "+(0,z.zw)(r.userData.employeeid)+" )",1)]),(0,o._)("div",Vt,[(0,o._)("div",Bt,[(0,o.Wm)(i,{class:"d-flex justify-content-end",to:{name:"DaysPresent",params:{employeeid:r.userData.employeeid}}},{default:(0,o.w5)((()=>[zt])),_:1},8,["to"])])])])]),qt,(0,o._)("div",Yt,[(0,o._)("div",Ht,[(0,o._)("div",Rt,[(0,o.Uk)("D.O.B: "),(0,o._)("span",null,(0,z.zw)(n.formatDob(r.userData.dob)),1)]),(0,o._)("div",Wt,[(0,o.Uk)("Education: "),(0,o._)("span",null,(0,z.zw)(r.userData.education),1)]),(0,o._)("div",Nt,[(0,o.Uk)("Location: "),(0,o._)("span",null,(0,z.zw)(r.userData.location),1)]),(0,o._)("div",Kt,[(0,o.Uk)("Marital Status: "),(0,o._)("span",null,(0,z.zw)(r.userData.maritalstatus),1)]),(0,o._)("div",Gt,[(0,o.Uk)("Gender: "),(0,o._)("span",null,(0,z.zw)(r.userData.gender),1)])]),(0,o._)("div",Jt,[(0,o._)("div",Qt,[(0,o.Uk)("Address : "),(0,o._)("span",null,(0,z.zw)(r.userData.address),1)]),(0,o._)("div",Xt,[(0,o.Uk)("Phone No : "),(0,o._)("span",null,(0,z.zw)(r.userData.phonenumber),1)]),(0,o._)("div",ea,[(0,o.Uk)("Alt. Phone No : "),(0,o._)("span",null,(0,z.zw)(r.userData.altphoneno),1)]),(0,o._)("div",sa,[(0,o.Uk)("Email : "),(0,o._)("span",null,(0,z.zw)(r.userData.email),1)]),(0,o._)("div",ta,[(0,o.Uk)("Official Email : "),(0,o._)("span",null,(0,z.zw)(r.userData.officialemail),1)])])])])):((0,o.wg)(),(0,o.iD)("div",aa," User not found. "))],64)}var ra={name:"UserProfile",props:{product:Object,id:String},data(){return{loading:!0,router:(0,B.yj)(),defaultImage:"./assets/profile.jpeg",dataloading:!1,userData:{editImage:""},error:null,apiUrl:"http://192.168.1.7:5000"}},methods:{formatDob(e){const s=new Date(e),t=s.getDate().toString().padStart(2,"0"),a=(s.getMonth()+1).toString().padStart(2,"0"),o=s.getFullYear();return`${t}-${a}-${o}`},async fetchUserData(){const e=this.$route.params.id;await je.Z.get(`${this.apiUrl}/employees/${e}`).then((e=>{console.log(e.data[0]),this.userData=e.data[0],console.log(this.userData.editImage),this.dataloading=!0})).catch((e=>{console.error("Error fetching data:",e),this.error=e})).finally((()=>{this.loading=!1}))}},async mounted(){await this.fetchUserData();const e=this.$route.params.id;console.log("User ID:",e)}};const na=(0,D.Z)(ra,[["render",oa],["__scopeId","data-v-d7dea20c"]]);var ia=na;const la=e=>((0,o.dD)("data-v-033be813"),e=e(),(0,o.Cn)(),e),da={class:"attendance-detail-page"},ca={class:"detail-text"},ua={class:"container d-flex justify-content-center"},ma={key:0,class:"spinner-border text-primary"},pa={key:1,class:"atnd-table"},ga=la((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Date"),(0,o._)("th",null,"In-Time"),(0,o._)("th",null,"Out-Time"),(0,o._)("th",null,"Permission Type"),(0,o._)("th",null,"Leave Type")])],-1)));function ha(e,s,t,a,r,n){return(0,o.wg)(),(0,o.iD)("div",da,[(0,o._)("h3",ca,"Time Log of Employee ID : "+(0,z.zw)(e.$route.params.employeeid),1),(0,o._)("div",ua,[r.loading?((0,o.wg)(),(0,o.iD)("div",ma)):((0,o.wg)(),(0,o.iD)("table",pa,[ga,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.timeLogs,((e,s)=>((0,o.wg)(),(0,o.iD)("tr",{key:s},[(0,o._)("td",null,(0,z.zw)(n.formatDate(e.date)),1),(0,o._)("td",null,(0,z.zw)(n.formatTime(e.intime)),1),(0,o._)("td",null,(0,z.zw)(n.formatTime(e.outtime)),1),(0,o._)("td",null,(0,z.zw)(e.permissiontype),1),(0,o._)("td",null,(0,z.zw)(e.leavetype),1)])))),128))])]))])])}var va={name:"DaysPresent",props:["employeeid"],data(){return{timeLogs:[],loading:!0,apiUrl:"http://192.168.1.7:5000"}},mounted(){this.fetchTimeLogs()},methods:{async fetchTimeLogs(){try{const e=await je.Z.get(`${this.apiUrl}/attendance/${this.$route.params.employeeid}`);console.log("API Response:",e.data),this.timeLogs=e.data}catch(e){console.error("Error fetching time logs:",e)}finally{this.loading=!1}},formatDate(e){const s=new Date(e),t=s.getDate().toString().padStart(2,"0"),a=(s.getMonth()+1).toString().padStart(2,"0"),o=s.getFullYear();return`${t}-${a}-${o}`},formatTime(e){if(!e)return"";const s={hour:"numeric",minute:"numeric",second:"numeric",timeZone:"Asia/Kolkata"};return new Date(e).toLocaleTimeString("en-US",s)}}};const fa=(0,D.Z)(va,[["render",ha],["__scopeId","data-v-033be813"]]);var _a=fa;const ya=e=>((0,o.dD)("data-v-08bf93a5"),e=e(),(0,o.Cn)(),e),wa={class:"row signin-page"},ba={class:"col-sm-7 signin-bg1"},Ua=ya((()=>(0,o._)("div",null,[(0,o._)("a",{href:"/",class:"back-btn-1"},[(0,o._)("i",{class:"fa fa-circle-arrow-left"}),(0,o.Uk)(" Back")])],-1))),Da={class:"col-sm-8 d-flex justify-content-center"},ka=["src"],Fa={class:"col-sm-5 signin-bg2"},xa={class:"col-sm-4"},Pa=["src"],Sa=ya((()=>(0,o._)("div",{class:"tagline"}," Best Way to Compete.. ",-1))),Aa={class:"col-sm-6 signin-input"},Ia=["type"],Ca=["type"],Ea=ya((()=>(0,o._)("label",{for:"showPassword"},"  View Password",-1))),Oa=ya((()=>(0,o._)("br",null,null,-1))),Ma=ya((()=>(0,o._)("button",{type:"submit"},"Register",-1)));function $a(e,s,t,r,n,i){return(0,o.wg)(),(0,o.iD)("div",wa,[(0,o._)("div",ba,[Ua,(0,o._)("div",Da,[(0,o._)("img",{src:n.regImage,class:"img-fluid img-responsive signin-img"},null,8,ka)])]),(0,o._)("div",Fa,[(0,o._)("div",xa,[(0,o._)("img",{src:n.companyLogo,class:"img-fluid img-responsive company-logo"},null,8,Pa)]),Sa,(0,o._)("form",{onSubmit:s[6]||(s[6]=(0,a.iM)(((...e)=>i.registerUser&&i.registerUser(...e)),["prevent"]))},[(0,o._)("div",Aa,[(0,o.wy)((0,o._)("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>n.user.username=e),placeholder:"Username",required:""},null,512),[[a.nr,n.user.username]]),(0,o.wy)((0,o._)("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=e=>n.user.email=e),placeholder:"Email",required:""},null,512),[[a.nr,n.user.email]]),(0,o.wy)((0,o._)("input",{type:n.showPassword?"text":"password",id:"password",placeholder:"Password","onUpdate:modelValue":s[2]||(s[2]=e=>n.user.password=e),required:""},null,8,Ia),[[a.YZ,n.user.password]]),(0,o.wy)((0,o._)("input",{type:n.showPassword?"text":"password",id:"confirmPassword",placeholder:"Confirm Password","onUpdate:modelValue":s[3]||(s[3]=e=>n.confirmPassword=e),onKeyup:s[4]||(s[4]=(0,a.D2)(((...e)=>i.registerUser&&i.registerUser(...e)),["enter"])),required:""},null,40,Ca),[[a.YZ,n.confirmPassword]])]),(0,o.wy)((0,o._)("input",{type:"checkbox",id:"showPassword","onUpdate:modelValue":s[5]||(s[5]=e=>n.showPassword=e)},null,512),[[a.e8,n.showPassword]]),Ea,Oa,Ma],32)])])}var Ta={name:"SignIn",data(){return{companyLogo:"./assets/kavisoftek.png",regImage:"./assets/signin.png",user:{username:"",email:"",password:""},confirmPassword:"",showPassword:!1,apiUrl:"http://192.168.1.7:5000"}},methods:{async registerUser(){if(this.user.password===this.confirmPassword)try{const e=await je.Z.post(`${this.apiUrl}/user`,this.user);console.log("Registration successful:",e.data),this.user={username:"",email:"",password:""},this.confirmPassword="",b().fire({icon:"success",title:"Registration Successful!",text:"You can now log in."})}catch(e){console.error("Error during registration:",e),console.log(e),e.response&&409===e.response.status?b().fire({icon:"error",title:"Registration Failed",text:"Username or email already exists!"}):b().fire({icon:"error",title:"Registration Failed",text:"An unexpected error occurred. The Username or email may already exists..  Please try again later."})}else b().fire({icon:"error",title:"Passwords do not match!",text:"Check Password and try Again"})}}};const La=(0,D.Z)(Ta,[["render",$a],["__scopeId","data-v-08bf93a5"]]);var ja=La;const Za=e=>((0,o.dD)("data-v-27ea1bea"),e=e(),(0,o.Cn)(),e),Va={class:"atnd-sheet-page"},Ba=Za((()=>(0,o._)("h4",{class:"page-head"},"Attendance Sheet",-1))),za={class:"col-sm-8 atd-form"},qa={class:"select-dropdown",style:{"text-align":"left","margin-left":"10px"}},Ya=Za((()=>(0,o._)("option",{value:"",disabled:"",selected:""},"Employee ID",-1))),Ha=["value"],Ra=Za((()=>(0,o._)("button",{type:"submit",class:"submit-btn",style:{"margin-left":"10px"}},"Submit",-1))),Wa=Za((()=>(0,o._)("div",null,null,-1)));function Na(e,s,t,r,n,i){const l=(0,o.up)("DaysPresent");return(0,o.wg)(),(0,o.iD)("div",Va,[Ba,(0,o._)("div",null,[(0,o._)("form",{onSubmit:s[1]||(s[1]=(0,a.iM)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,o._)("div",za,[(0,o._)("div",qa,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.selectedUserId=e),required:""},[Ya,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.employeeOptions,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.employeeid,value:e.employeeid},(0,z.zw)(e.employeeid),9,Ha)))),128))],512),[[a.bM,n.selectedUserId]])]),Ra])],32)]),Wa,(0,o.Wm)(l,{employeeid:e.$route.params.employeeid},null,8,["employeeid"])])}var Ka={name:"AttendanceSheet",components:{DaysPresent:_a},data(){return{selectedUserId:null,users:[],attendanceData:null,apiUrl:"http://192.168.1.7:5000",employeeOptions:[]}},created(){this.fetchEmployeeOptions()},methods:{async fetchEmployeeOptions(){try{const e=await je.Z.get(`${this.apiUrl}/employees`);this.employeeOptions=e.data}catch(e){console.error("Error fetching employee options:",e)}},async fetchAttendance(){try{const e=await je.Z.get(`${this.apiUrl}/attendance/${this.selectedUserId}`);this.attendanceData=e.data}catch(e){console.error("Error fetching attendance:",e)}},submitForm(){this.selectedUserId?this.fetchAttendance():console.error("Please select an employee ID before submitting.")}},mounted(){this.fetchAttendance()}};const Ga=(0,D.Z)(Ka,[["render",Na],["__scopeId","data-v-27ea1bea"]]);var Ja=Ga;const Qa=[{name:"LoginPage",component:us,path:"/login"},{name:"AttendanceForm",component:Js,path:"/attendance-form"},{name:"HomePage",component:pt,path:"/"},{name:"ResponsePage",component:xt,path:"/response"},{name:"Signin",component:ja,path:"/register"},{path:"/admin-panel",component:L,children:[{path:"/employee",component:Be,name:"EmployeePage"},{path:"/attendance-sheet",component:Ja,name:"AttendanceSheet"},{name:"UserProfile1",component:ia,path:"/employee/:id",props:!0},{path:"/employee/attendance/:employeeid",component:_a,name:"DaysPresent"}]}],Xa=(0,B.p7)({history:(0,B.PO)(),routes:Qa});var eo=Xa;(0,a.ri)(V).use(eo).mount("#app")}},s={};function t(a){var o=s[a];if(void 0!==o)return o.exports;var r=s[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(s,a,o,r){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(i=!1,r<n&&(n=r));if(i){e.splice(c--,1);var d=o();void 0!==d&&(s=d)}}return s}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var o,r,n=a[0],i=a[1],l=a[2],d=0;if(n.some((function(s){return 0!==e[s]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var c=l(t)}for(s&&s(a);d<n.length;d++)r=n[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},a=self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(8514)}));a=t.O(a)})();
//# sourceMappingURL=app.d2203cf1.js.map