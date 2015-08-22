using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using System.Data.Entity;

namespace LinqToEntities
{
    public class T_Customer_Role_Entities : IDisposable
    {
        KBLDataContext db = null;
        /// <summary>
        /// 精确查找
        /// </summary>
        /// <param name="cid"></param>
        /// <returns></returns>
        public async Task<T_Customer_Role> Find(long cid)
        {
            using (db = new KBLDataContext())
            {
                var entity = from r in db.CustomerRoles
                             where r.CId == cid
                             select r;
                return await entity.FirstOrDefaultAsync();
            }
        }

        public async Task<T_Customer_Role> SignIn(string userName,string password)
        {
            using (db = new KBLDataContext())
            {
                var entity = from r in db.CustomerRoles
                             where r.UserName == userName && r.Password == password
                             select r;
                return await entity.FirstOrDefaultAsync();
            }
        }

        /// <summary>
        /// 用户名检查
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public async Task<T_Customer_Role> Check(string userName)
        {
            using (db = new KBLDataContext())
            {
                var entity = from r in db.CustomerRoles
                             where r.UserName == userName
                             select r;
                return await entity.FirstOrDefaultAsync();
            }
        }
        /// <summary>
        /// 用户列表
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<T_Customer_Role>> List()
        {
            using (db = new KBLDataContext())
            {
                var entities = from r in db.CustomerRoles
                               select r;
                return await entities.ToListAsync();
            }
        }
        /// <summary>
        /// 用户信息修改
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<int> Save(T_Customer_Role model)
        {
            using (db = new KBLDataContext())
            {
                var entity = from r in db.CustomerRoles
                             where r.CId == model.CId
                             select r;
                T_Customer_Role role = await entity.FirstOrDefaultAsync();

                if (role == null)
                {
                    model.CreateDate = Helper.Comm.GetIntFromTime(DateTime.Now);
                    model.UpdateAccountDate = Helper.Comm.GetIntFromTime(DateTime.Now);
                    db.CustomerRoles.Add(model);
                }
                else
                {
                    role.UserName = model.UserName;
                    role.Password = model.Password;
                    role.Rid = model.Rid;
                    role.UpdateAccountDate = Helper.Comm.GetIntFromTime(DateTime.Now);
                    db.Entry(role).State = EntityState.Modified;
                }
                return await db.SaveChangesAsync();
            }
        }
        /// <summary>
        /// 用户删除
        /// </summary>
        /// <param name="cid"></param>
        /// <returns></returns>
        public async Task<int> remove(long cid)
        {
            using (db = new KBLDataContext())
            {
                var entity = from r in db.CustomerRoles
                             where r.CId == cid
                             select r;
                T_Customer_Role _prodcut = await entity.FirstOrDefaultAsync();
                if (_prodcut != null)
                {
                    db.CustomerRoles.Remove(_prodcut);
                    return await db.SaveChangesAsync();
                }
                return 0;
            }
        }       

        //public async Task<string[]> GetRole(long cid)
        //{
        //    using (db = new KBLDataContext())
        //    {
        //        ///获取登录权限
        //        var role = await (from r in db.CustomerRoles
        //                          where r.CId == cid
        //                          select r).FirstOrDefaultAsync();

            //        ///获取权限列表
            //        var settings = await(from s in db.CustomerRoleSettings
            //                             join ss in db.CustomerRoleSettings on s.ChildCid equals ss.ParentCid into
            //                             into sss
            //                             select sss

            //                             )


            //    }
            //}

        public void Dispose()
        {
            //db.Dispose();
            //throw new NotImplementedException();
        }
    }
}
