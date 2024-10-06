// import React from 'react';
// import { useState } from 'react';



// const LoginWindow: React.FC = () => {

//     // 定义一个状态来控制密码的显示状态
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//     // 切换密码显示的函数
//     const togglePasswordVisibility = () => {
//         setIsPasswordVisible(!isPasswordVisible);
//     };
    
//     return (
//         <div>
//         <div className='bg-white rounded-lg p-2 flex flex-col items-center'>
//             <div className='bg-back bg-cover size-6'></div>
//             <div>登录</div>
//             <div className='border-b p-1'>
//                 <input className='focus:outline-none' type="text" placeholder="请输入内容"/>
//             </div>
//             <div className='border-b p-1 flex'>
//                 <input className='focus:outline-none' type={isPasswordVisible ? 'text' : 'password'} placeholder="请输入内容"/>
//                 <button className='bg-red-100 w-10 h-10' onClick={togglePasswordVisibility}></button>
//             </div>
//             <div>忘记密码</div>
//             <div>新用户？创建</div>
//             <div className='bg-orange-200 rounded-lg p-1'>登录按钮</div>
//             <div className='flex items-center'>
//                 <hr className="border-gray-300 border-2 w-1/2"></hr>
//                 <div>或者</div>
//                 <hr className="border-gray-300 border-2 w-1/2"></hr>
//             </div>
//             <div>

//             </div>
//             <div>用户协议</div>
//         </div>
//         </div>
//     );
// };


// export default LoginWindow;