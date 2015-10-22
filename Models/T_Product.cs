using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Table("T_Products")]
    public partial class T_Product
    {        
        [Key]
        // 产品列表
        public int Pid { get; set; }
        // 产品名称
        public string PCName { get; set; }
        // 价格
        public string Price { get; set; }
        // vp点数
        public decimal? Vp { get; set; }

        [NotMapped]
        public T_Customer_Role Role { get; set; }
    }
}
