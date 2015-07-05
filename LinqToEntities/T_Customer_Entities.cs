using Models;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace LinqToEntities
{    
    public class T_Customer_Entities:IDisposable
    {
        KBLDataContext db = null;
        public async Task<object> List(string select)
        {
            using (db = new KBLDataContext())
            {
                var entities = from c in db.Customers
                               select c;
                var data = await entities.ToListAsync();
                return data;
            }            
        }

        public async Task<object> Get(long cID)
        {
            using (db = new KBLDataContext())
            {
                var entity = from c in db.Customers
                             where c.CID == cID
                             select c;
                return await entity.FirstOrDefaultAsync();
            }
        }

        public async Task<object> SaveOrEdit(T_Customer model)
        {
            var cname = model.CName;
            var contact = model.Contact;
            using(db = new KBLDataContext())
            {
                var exist = await (from c in db.Customers where c.CID == model.CID select c).FirstOrDefaultAsync();
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

        public void Dispose()
        {
            db.Dispose();
            //throw new NotImplementedException();
        }
    }
}
