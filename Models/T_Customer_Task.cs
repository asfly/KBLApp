using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("T_Customer_Tasks")]
    public partial class T_Customer_Task
    {
        [Key]
        public long TaskId { get; set; }
        //客户编号
        public long CId { get; set; }
        //计划开始日期
        public DateTime? StartDate { get; set; }
        //备用字段
        public string Other { get; set; }
        //提示日期
        public string During { get; set; }
        //回访倒计时
        public string Review { get; set; }
        //回访状态
        public bool ReviewStatus { get; set; }
        //回访信息记录
        public string Describe { get; set; }

    }
}
 
