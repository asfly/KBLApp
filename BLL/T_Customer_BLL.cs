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

        #region  客户信息管理
        public static async Task<object> GetCustomer(long cid)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.Find(cid);
            }
        }

        public static async Task<object> GetCustomers(string example)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.List(example);
            }
        }

        public static async Task<object> SaveCustomer(T_Customer model)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.Save(model);
            }
        }
        #endregion

        #region  客户任务追踪
        public static async Task<object> GetCustomerTask(long taskId)
        {
            using (T_Customer_Task_Entities entity = new T_Customer_Task_Entities())
            {
                return await entity.Find(taskId);
            }
        }

        public static async Task<object> GetCustomerTasks(long cid)
        {
            using (T_Customer_Task_Entities entity = new T_Customer_Task_Entities())
            {
                return await entity.List(cid);
            }
        }

        public static async Task<object> SaveCustomerTask(T_Customer_Task model)
        {
            using (T_Customer_Task_Entities entity = new T_Customer_Task_Entities())
            {
                return await entity.Save(model);
            }
        }

        public static async Task<object> RemoveCustomerTask(long taskId)
        {
            using (T_Customer_Task_Entities entity = new T_Customer_Task_Entities())
            {
                return await entity.Remove(taskId);
            }
        }
        #endregion

        #region 客户产品管理
        /// <summary>
        /// 获取客户计划列表
        /// </summary>
        /// <param name="customerId"></param>
        /// <returns></returns>
        public static async Task<object> GetCustomerProducts(long customerId)
        {
            using (T_Customer_Product_Entities dao = new T_Customer_Product_Entities())
            {
                return await dao.List(customerId);
            }
        }

        /// <summary>
        /// 获取客户产品模型
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static async Task<object> GetCustomerProduct(long id)
        {
            using (T_Customer_Product_Entities dao = new T_Customer_Product_Entities())
            {
                return await dao.Find(id);
            }
        }

        public static async Task<int> SaveCustomerProduct(T_Customer_Product model)
        {
            using (T_Customer_Product_Entities dao = new T_Customer_Product_Entities())
            {
                return await dao.Save(model);
            }
        }

        public static async Task<int> RemoveCustomerProduct(long Id)
        {
            using (T_Customer_Product_Entities dao = new T_Customer_Product_Entities())
            {
                return await dao.remove(Id);
            }
        }
        #endregion

        #region 客户塑身计划

        /// <summary>
        /// 获取客户计划模型
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static async Task<object> GetCustomerSchedule(long id)
        {
            using (T_Customer_Schedule_Entities dao = new T_Customer_Schedule_Entities())
            {
                return await dao.Find(id);
            }
        }

        public static async Task<int> SaveCustomerSchedule(T_Customer_Schedule model)
        {
            using (T_Customer_Schedule_Entities dao = new T_Customer_Schedule_Entities())
            {
                return await dao.Save(model);
            }
        }

        public static async Task<int> RemoveCustomerSchedule(long Id)
        {
            using (T_Customer_Schedule_Entities dao = new T_Customer_Schedule_Entities())
            {
                return await dao.Remove(Id);
            }
        }
        #endregion
    }
}
