using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Table("T_Customer_Role_Setting")]
    public class T_Customer_Role_Setting
    {
        [Key]
        public long Rid { get; set; }
        public long ParentCid { get; set; }
        public string ParentCName { get; set; }
        public long ChildCid { get; set; }
        public string ChildCName { get; set; }
        public string RoleLevel { get; set; }
        public int RoleType { get; set; }
    }
}
