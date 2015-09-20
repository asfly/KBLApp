using Models;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Collections.Generic;

namespace LinqToEntities
{
    public class T_Customer_Entities : IDisposable
    {
        KBLDataContext db = null;
        public async Task<object> List(CustomerParams param)
        {
            using (db = new KBLDataContext())
            {
                var entities = from c in db.Customers  
                               join t in db.CustomerTasks on c.Cid equals t.CId into ct
                               from lct in ct.DefaultIfEmpty()
                               where (c.CategoryID == param.CategoryId && !string.IsNullOrEmpty(param.CategoryId) || string.IsNullOrEmpty(param.CategoryId))
                               group lct by c into gct
                               select gct;
                var data = await entities.ToListAsync();

                var json = from gct in data
                           orderby gct.Key.Cid descending
                           select new
                           {
                               c = gct.Key,
                               t = new
                               {
                                   Unfinished = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date < DateTime.Now.Date && w.ReviewStatus == false).Select(s => new {
                                       s.StartDate,
                                       s.ReviewStatus
                                   }) : new object { },
                                   //Prev = gct!=null ? gct.Any(a=>a !=null)? gct.Where(w => w.StartDate.Value.Date < DateTime.Now.Date).OrderBy(o => o.StartDate).Take(1):null : null,
                                   Prev = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date < DateTime.Now.Date).OrderBy(o => o.StartDate).LastOrDefault() : null,
                                   //Next = gct != null ? gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date > DateTime.Now.Date).OrderByDescending(o => o.StartDate).Take(1) : null : null,
                                   Next = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date > DateTime.Now.Date).OrderBy(o => o.StartDate).FirstOrDefault() : null,
                                   //Today = gct != null ? gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date == DateTime.Now.Date).OrderByDescending(o => o.StartDate).Take(1) : null : null
                                   Today = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date == DateTime.Now.Date).OrderByDescending(o => o.StartDate).LastOrDefault() : null,

                                   Finishing = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date > DateTime.Now.Date && w.ReviewStatus == false).Select(s=>new {
                                       s.StartDate,
                                       s.ReviewStatus
                                   }) : new object{ },

                               }
                           };

                return json;
            }
        }

        public async Task<List<T_Customer>> CheckCustomerCName(string cname)
        {
            using (db = new KBLDataContext())
            {
                ///获取登录权限
                var customers = await (from c in db.Customers
                                      where c.CName.IndexOf(cname) > -1
                                      select c).ToListAsync();
                return customers;
            }
        }

        public async Task<object> Find(long cid)
        {
            using (db = new KBLDataContext())
            {
                var entity = from c in db.Customers
                             where c.Cid == cid
                             select c;
                return await entity.FirstOrDefaultAsync();
            }
        }

        public async Task<object> Save(T_Customer model)
        {
            var cname = model.CName;
            var contact = model.Contact;
            using (db = new KBLDataContext())
            {
                var exist = await (from c in db.Customers where c.Cid == model.Cid select c).FirstOrDefaultAsync();
                if (exist == null)
                {
                    db.Customers.Add(model);
                    int effects = await db.SaveChangesAsync();
                    return new
                    {
                        effects = effects,
                        model = model
                    };
                }
                else
                {
                    //UpdateModel();
                    exist.Dietitian = model.Dietitian;
                    exist.CName = model.CName;
                    exist.CustomerNo = model.CustomerNo;
                    exist.Age = model.Age;
                    exist.CategoryID = model.CategoryID;
                    exist.Addr = model.Addr;
                    exist.Weight = model.Weight;
                    exist.Height = model.Height;
                    exist.Gender = model.Gender;
                    exist.Contact = model.Contact;
                    exist.CardType = model.CardType;
                    exist.Married = model.Married;
                    exist.Address = model.Address;
                    exist.Remark = model.Remark;
                    db.Entry(exist).State = EntityState.Modified;
                    int effects = await db.SaveChangesAsync();
                    return new
                    {
                        effects = effects
                    };
                }
                
            }
        }

        public async Task<int> Remove(long cid)
        {
            using (db = new KBLDataContext())
            {
                var entity = await (from t in db.Customers
                                    where t.Cid == cid
                                    select t).FirstOrDefaultAsync();
                if (entity != null)
                {
                    db.Customers.Remove(entity);
                }
                return await db.SaveChangesAsync();
            }
        }

        public void Dispose()
        {
            db.Dispose();
            //throw new NotImplementedException();
        }
    }
}
