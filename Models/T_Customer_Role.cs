using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class T_Customer_Role
    {
        [Key]
        /// <summary>
        /// 用户表示
        /// </summary>
        public long CId { get; set; }
        /// <summary>
        /// 用户登录名
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 用户密码
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// 用户创建日期
        /// </summary>
        public long CreateDate { get; set; }
        /// <summary>
        /// 用户上次登录时间
        /// </summary>
        public long LastSigninDate { get; set; }
        /// <summary>
        /// 用户登录次数
        /// </summary>
        public long SignInCount { get; set; }
        /// <summary>
        /// 账户信息更改日期
        /// </summary>
        public long UpdateAccountDate { get; set; }
        /// <summary>
        /// 用户权限级别{0，admin,4,营养师：8:贵宾客户}
        /// </summary>
        public int Role { get; set; }
    }
}
