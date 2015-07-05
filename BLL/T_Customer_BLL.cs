using LinqToEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace BLL
{
    public class T_Customer_BLL
    {
        public static async Task<object> GetCustomer(long cid)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.Get(cid);
            }
        }

        public static async Task<object> GetCustomers(string example)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.List(example);
            }
        }

        public static async Task<object> SaveOrEdit(T_Customer model)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.SaveOrEdit(model);
            }
        }
    }
}
