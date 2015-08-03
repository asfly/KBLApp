using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Table("T_Customer_Track")]
    public partial class T_Customer_Track
    {
        [Key]
        public long TrackID { get; set; }
        //
        public long CID { get; set; }
        //计划开始日期
        public DateTime? StartDate { get; set; }
        //备用字段
        public string Other { get; set; }
        //提示日期
        public string During { get; set; }
        //回访倒计时
        public string CallBack { get; set; }
        //回访状态
        public bool CallBackStatus { get; set; }
        //回访信息记录
        public string Describe { get; set; }

    }
}
 
