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

        public static async Task<List<T_Customer>> CheckCustomerCName(string userCName)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.CheckCustomerCName(userCName);
            }
        }

        public static async Task<object> GetCustomers(CustomerParams param)
        {
            using (T_Customer_Entities entity = new T_Customer_Entities())
            {
                return await entity.List(param);
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

        #region 客户登录信息管理
        public static async Task<T_Customer_Role> GetCustomerRole(long cid)
        {
            using (T_Customer_Role_Entities dao = new T_Customer_Role_Entities())
            {
                return await dao.Find(cid);
            }
        }
        public static async Task<IEnumerable<T_Customer_Role>> GetCustomerRoles()
        {
            using (T_Customer_Role_Entities dao = new T_Customer_Role_Entities())
            {
                return await dao.List();
            }
        }

        public static async Task<T_Customer_Role> CheckUserName(string userName)
        {
            using (T_Customer_Role_Entities dao = new T_Customer_Role_Entities())
            {
                return await dao.Check(userName);
            }
        }

        public static async Task<T_Customer_Role> CheckUserName(string usr,string pwd)
        {
            using (T_Customer_Role_Entities dao = new T_Customer_Role_Entities())
            {
                return await dao.SignIn(usr,pwd);
            }
        }

        public static async Task<int> SaveCustomerRole(T_Customer_Role model)
        {
            using (T_Customer_Role_Entities dao = new T_Customer_Role_Entities())
            {
                return await dao.Save(model);
            }
        }

        public static async Task<int> RemoveCustomerRole(long cid)
        {
            using (T_Customer_Role_Entities dao = new T_Customer_Role_Entities())
            {
                return await dao.remove(cid);
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
        /// <summary>
        /// 保存客户产品模型
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public static async Task<int> SaveCustomerProduct(T_Customer_Product model)
        {
            using (T_Customer_Product_Entities dao = new T_Customer_Product_Entities())
            {
                return await dao.Save(model);
            }
        }
        /// <summary>
        /// 删除客户产品模型（操作不可逆）
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
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

        #region 产品管理
        /// <summary>
        /// 获取客户计划列表
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public static async Task<object> GetProducts()
        {
            using (T_Product_Entities dao = new T_Product_Entities())
            {
                return await dao.GetProducts();
            }
        }
        /// <summary>
        /// 获取产品模型
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public static async Task<object> GetProduct(long pid)
        {
            using (T_Product_Entities dao = new T_Product_Entities())
            {
                return await dao.Find(pid);
            }
        }
        /// <summary>
        /// 保存修改产品模型
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public static async Task<int> SaveProduct(T_Product model)
        {
            using (T_Product_Entities dao = new T_Product_Entities())
            {
                return await dao.Save(model);
            }
        }
        /// <summary>
        /// 删除产品模型，操作不可恢复
        /// </summary>
        /// <param name="pId"></param>
        /// <returns></returns>
        public static async Task<int> RemoveProduct(long pId)
        {
            using (T_Product_Entities dao = new T_Product_Entities())
            {
                return await dao.remove(pId);
            }
        }
        #endregion
    }
}
