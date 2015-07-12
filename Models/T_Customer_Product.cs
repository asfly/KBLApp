using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class T_Customer_Product
    {
        public long Id { get; set; }
        public long CustomerID { get; set; }
        public string Name { get; set; }
        public long Quantity { get; set; }
        public decimal? Price { get; set; }
        public decimal? SaleAmount { get; set; }
        public decimal? Vp { get; set; }
        public DateTime PurchasingDate { get; set; }
        public DateTime GeneratintVpDate { get; set; }
    }
}
