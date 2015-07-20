using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using Models;
using System;

namespace LinqToEntities
{
    public class T_Customer_Product_Entities:IDisposable
    {
        KBLDataContext db = null;
        public async Task<object> List(long customerId)
        {
            using (db = new KBLDataContext())
            {
                var entities = from t in db.CustomerProducts
                               where t.Cid == customerId
                               select t;
                return await entities.ToListAsync();
            }
        }

        public async Task<object> Find(long id)
        {
            using (db = new KBLDataContext())
            {
                var entity = from t in db.CustomerProducts
                               where t.Pid == id
                               select t;
                return await entity.FirstOrDefaultAsync();
            }
        }

        public async Task<int> Save(T_Customer_Product model)
        {
            using (db = new KBLDataContext())
            {
                var entity = from t in db.CustomerProducts
                             where t.Pid == model.Pid
                             select t;
                T_Customer_Product _prodcut = await entity.FirstOrDefaultAsync();

                if (_prodcut == null)
                {
                    db.CustomerProducts.Add(model);
                }
                else
                {
                    _prodcut.Name = model.Name;
                    _prodcut.Price = model.Price;
                    _prodcut.Quantity = model.Quantity;
                    _prodcut.SaleAmount = model.SaleAmount;
                    _prodcut.Vp = model.Vp;
                    _prodcut.PurchasingDate = DateTime.Now;
                    _prodcut.GeneratintVpDate = DateTime.Now;
                    db.Entry(_prodcut).State = EntityState.Modified;
                }
                return await db.SaveChangesAsync();
            }
        }

        public async Task<int> remove(long id)
        {
            using (db = new KBLDataContext())
            {
                var entity = from t in db.CustomerProducts
                             where t.Pid == id
                             select t;
                T_Customer_Product _prodcut = await entity.FirstOrDefaultAsync();
                if (_prodcut != null)
                {
                    db.CustomerProducts.Remove(_prodcut);
                    return await db.SaveChangesAsync();
                }
                return 0;
            }
        }

        public void Dispose()
        {
            //db.Dispose();
            //throw new NotImplementedException();
        }
    }
}
