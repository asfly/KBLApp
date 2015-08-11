using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Models
{
    [Table("T_Customer")]
    public partial class T_Customer
    {
        [Key]
        public long Cid { get; set; }
        //客户编号
        public string CustomerNo { get; set; }
        //客户分类
        public string CategoryID { get; set; }
        //营养顾问
        public string Dietitian { get; set; }
        //客户姓名
        public string CName { get; set; }
        //地址
        public string Addr { get; set; }
        //生日
        public DateTime? Birthday { get; set; }
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
