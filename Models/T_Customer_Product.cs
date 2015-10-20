using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("T_Customer_Products")]
    public class T_Customer_Product
    {
        //ID
        [Key]
        public long Pid { get; set; }
        // 客户编号
        public long Cid { get; set; }
        // 产品名称
        public string Name { get; set; }
        // 产品数量
        public long Quantity { get; set; }
        // 价格
        public decimal? Price { get; set; }
        // 销售金额
        public decimal? SaleAmount { get; set; }
        // Vp点数
        public decimal? Vp { get; set; }
        // 购买日期
        public long? PurchasingDate { get; set; }
        // 生产Vp的月数
        public long? GeneratintVpDate { get; set; }

        [NotMapped]
        public T_Customer_Role Role { get; set; }
    }
}
