using Models;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace LinqToEntities
{
    public class T_Customer_Entities : IDisposable
    {
        KBLDataContext db = null;
        public async Task<object> List(string select)
        {
            using (db = new KBLDataContext())
            {
                var entities = from c in db.Customers
                               join t in db.CustomerTasks on c.Cid equals t.CId into ct
                               from lct in ct.DefaultIfEmpty()
                               group lct by c into gct
                               select gct;
                var data = await entities.ToListAsync();

                var json = from gct in data
                           select new
                           {
                               c = gct.Key,
                               t = new
                               {
                                   //Prev = gct!=null ? gct.Any(a=>a !=null)? gct.Where(w => w.StartDate.Value.Date < DateTime.Now.Date).OrderBy(o => o.StartDate).Take(1):null : null,
                                   Prev = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date < DateTime.Now.Date).OrderBy(o => o.StartDate).LastOrDefault() : null,
                                   //Next = gct != null ? gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date > DateTime.Now.Date).OrderByDescending(o => o.StartDate).Take(1) : null : null,
                                   Next = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date > DateTime.Now.Date).OrderBy(o => o.StartDate).LastOrDefault() : null,
                                   //Today = gct != null ? gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date == DateTime.Now.Date).OrderByDescending(o => o.StartDate).Take(1) : null : null
                                   Today = gct.Any(a => a != null) ? gct.Where(w => w.StartDate.Value.Date == DateTime.Now.Date).OrderByDescending(o => o.StartDate).LastOrDefault() : null
                               }
                           };

                return json;
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
                    db.Entry(exist).State = EntityState.Modified;
                }
                int effects = await db.SaveChangesAsync();
                return effects;
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
