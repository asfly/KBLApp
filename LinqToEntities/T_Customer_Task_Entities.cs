using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using System.Data.Entity;

namespace LinqToEntities
{
    public class T_Customer_Task_Entities:IDisposable
    {
        KBLDataContext db = null;
        public async Task<object> List(long cid)
        {
            using (db = new KBLDataContext())
            {
                var entities = from t in db.CustomerTasks
                             where t.CId == cid
                             select t;
                return await entities.ToListAsync();
            }
        }

        public async Task<object> Find(long taskId)
        {
            using (db = new KBLDataContext())
            {
                var entity = from t in db.CustomerTasks
                             where t.TaskId == taskId
                             select t;
                return await entity.FirstOrDefaultAsync();
            }
        }

        public async Task<int> Save(T_Customer_Task model)
        {
            using (db = new KBLDataContext())
            {
                var entity = await( from t in db.CustomerTasks
                             where t.TaskId == model.TaskId
                             select t).FirstOrDefaultAsync();
                if (entity == null)
                {
                    db.CustomerTasks.Add(model);
                }
                else
                {
                    entity.StartDate = model.StartDate;
                    entity.Describe = model.Describe;
                    entity.Review = model.Review;
                    entity.ReviewStatus = model.ReviewStatus;
                    entity.During = model.During;
                    entity.Other = model.Other;
                    db.Entry(entity).State = EntityState.Modified;
                }
                return await db.SaveChangesAsync();
            }
        }

        public async Task<int> Remove(long taskId)
        {
            using (db = new KBLDataContext())
            {
                var entity = await (from t in db.CustomerTasks
                                    where t.TaskId == taskId
                                    select t).FirstOrDefaultAsync();
                if (entity != null)
                {
                    db.CustomerTasks.Remove(entity);
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
