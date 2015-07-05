using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using System.Data.Entity;

namespace LinqToEntities
{
    public class T_Customer_Track_Entities
    {
        KBLDataContext db = null;
        public async Task<object> GetCustomerTracks(int cid)
        {
            using (db = new KBLDataContext())
            {
                var entities = from t in db.CustomerTracks
                             where t.TrackID == cid
                             select t;
                return await entities.ToListAsync();
            }
        }

        public async Task<object> GetCustomerTrack(int trackID)
        {
            using (db = new KBLDataContext())
            {
                var entity = from t in db.CustomerTracks
                             where t.TrackID == trackID
                             select t;
                return await entity.FirstOrDefaultAsync();
            }
        }
    }
}
