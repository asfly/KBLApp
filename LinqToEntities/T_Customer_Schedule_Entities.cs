using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Models;

namespace LinqToEntities
{
    public class T_Customer_Schedule_Entities:IDisposable
    {
        KBLDataContext db = null;

        public async Task<object> Find(long Id)
        {
            using (db = new KBLDataContext())
            {
                var entities = from c in db.CustomerSchedule
                               where c.Id == Id
                               select c;
                var data = await entities.FirstOrDefaultAsync();
                return data;
            }
        }

        public async Task<object> List(long customerId)
        {
            using (db = new KBLDataContext())
            {
                var entities = from c in db.CustomerSchedule                               
                               where c.CustomerId == customerId
                               select c;
                var data = await entities.ToListAsync();
                return data;
            }
        }

        public async Task<int> Remove(long Id)
        {
            using (db = new KBLDataContext())
            {
                var entity = from c in db.CustomerSchedule
                             where c.Id == Id
                             select c;
                T_Customer_Schedule _model = await entity.FirstOrDefaultAsync();
                if (_model != null)
                {
                    db.CustomerSchedule.Remove(_model);
                }
                return await db.SaveChangesAsync();
            }
        }

        public async Task<int> Save(T_Customer_Schedule model)
        {
            using (db = new KBLDataContext())
            {
                var entity = from c in db.CustomerSchedule
                               where c.Id == model.Id
                               select c;
                T_Customer_Schedule _model = await entity.FirstOrDefaultAsync();
                if (_model == null)
                {
                    db.CustomerSchedule.Add(model);
                }
                else
                {

                }
                return await db.SaveChangesAsync();
            }
        }

        public void Dispose()
        {
            //throw new NotImplementedException();
        }
    }
}
