using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Table("T_Customer_List")]
    public partial class T_Customer_List
    {
        [Key]
        public long CID { get; set; }
        //客户分类
        public int CategoryID { get; set; }
        //营养顾问
        public string Dietitian { get; set; }
        //本月VP数
        public int CVPCount { get; set; }
        //累计VP数
        public int SVPCount { get; set; }
        //客户姓名
        public string CName { get; set; }
        //地点
        public string Addr { get; set; }
        //性别
        public string Gender { get; set; }
        //年龄
        public int Age { get; set; }
        //身高
        public int Height { get; set; }
        //体重
        public decimal? Weight { get; set; }
        //联系方式
        public string Contact { get; set; }
    }
}
