// 检验注册表单中的用户名格式是否正确
	function isID(){
	id=reg.email.value;
if (id.length==0)
           {document.getElementById ("err_ID").innerHTML="用户名不能为空！";
           document.getElementById ("err_ID").style.color="red";
		   return false;}
if (id.length>20) 
          { document.getElementById ("err_ID").innerHTML="用户名太长！";
           document.getElementById ("err_ID").style.color="red";
            reg.email.focus();
            return false; }
else
{document.getElementById("err_ID").innerHTML="";
reg.email.style.background="white";
return true;
}
}

// 检验注册表单中的邮箱格式是否正确
function isEmail() { 
email=reg.email.value;
if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) 
/*^是匹配的字符开头,
\w匹配的是字母,数字,下划线,汉字,
+是匹配一次或多次(就是最少一次),
\.是匹配的 . (因为.在正则中匹配除换行符以外的任意字符),所以如果需要.在字符串中出现的话就加一个\ ,这个是转义符
*匹配的是重复零次或更多次
@是匹配字符串中必须出现的字符
$是字符串结尾 */
{ document.getElementById ("err_email").innerHTML="邮箱格式不正确！";
           document.getElementById ("err_email").style.color="red";

reg.email.focus();
return false; }
else
{document.getElementById("err_email").innerHTML="";
reg.email.style.background="white";
return true;
}
}


// 检验注册表单中的密码格式是否正确
	function isPWD() {
	pwd=reg.pw1.value; 
if (pwd.length==0)
           {document.getElementById ("err_PWD").innerHTML="密码不能为空！";
           document.getElementById ("err_PWD").style.color="red";
		   return false;}
if (pwd.length<6) 
          { document.getElementById ("err_PWD").innerHTML="密码太短！";
           document.getElementById ("err_PWD").style.color="red";
          
            return false; }
else
{document.getElementById("err_PWD").innerHTML="";
reg.pw1.style.background="white";

return true;
}
}

// 检验注册表单中的密码格式是否正确
	function isREPWD() { 
	repwd=reg.pw2.value;
if (repwd.length==0)
           {document.getElementById ("err_REPWD").innerHTML="请再次确认密码！";
           document.getElementById ("err_REPWD").style.color="red";
		   return false;}
if (reg.pw1.value != repwd) 
          { document.getElementById ("err_REPWD").innerHTML="两次密码输入不一致!";
           document.getElementById ("err_REPWD").style.color="red";
		   reg.pw1.value="";
		   reg.pw2.value="";
          reg.pw1.focus();
            return false; }
else
{document.getElementById("err_REPWD").innerHTML="";
reg.pw2.style.background="white";
return true;
}
}

// 检验注册表单中姓名是否为空
	function isNAME(){
	id=reg.name.value;
if (id.length==0)
           {document.getElementById ("err_NAME").innerHTML="姓名不能为空！";
           document.getElementById ("err_NAME").style.color="red";
		   return false;}
if (id.length>20) 
          { document.getElementById ("err_NAME").innerHTML="姓名太长！";
           document.getElementById ("err_NAME").style.color="red";
            reg.name.focus();
            return false; }
else
{document.getElementById("err_NAME").innerHTML="";
reg.name.style.background="white";
return true;
}
}

// 注册表单中的复选框打钩功能

function go() { 

if (document.reg.yes.checked==true) 
document.reg.submit.disabled=false;
else
document.reg.submit.disabled=true;
}

//检验注册表单
function validate_reg()
{   
        if(isID() && isEmail() && isPWD() && isREPWD() && isNAME()) 
	 {
	    alert("您填写的注册信息如下：\n邮箱：" + reg.email.value +" \n密码：" +reg.pw1.value +" \n姓名：" +reg.name.value );  
	
        return true;
		}
 else
        return false;    
		
}
