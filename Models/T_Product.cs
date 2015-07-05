using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Table("T_Product")]
    public partial class T_Product
    {
        [Key]
        public int PID { get; set; }
        public string PCName { get; set; }
        public string Price { get; set; }
        public decimal? VP { get; set; }
    }
}
