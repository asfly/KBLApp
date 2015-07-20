using System.Text;
using System.Linq;
using System.Net;
using System.Collections.Generic;
using Newtonsoft.Json;
using Helper.T;
using System;

namespace Helper
{
    public static class Comm
    {
        private static long lLeft = 621355968000000000;
        public static string ResolveTJSON(T_JSON model)
        {
            KeyValuePair<string, object> _flowKeyValue = model.Input0.First();
            string s = JsonConvert.SerializeObject(_flowKeyValue.Value);
            return s;
        }
        

        //将数字变成时间
        public static DateTime GetTimeFromInt(long ltime)
        {
            long Eticks = (long)(ltime * 10000000) + lLeft;
            DateTime dt = new DateTime(Eticks).ToLocalTime();
            return dt;
        }



        //将时间变成数字
        public static long GetIntFromTime(DateTime dt)
        {
            DateTime dt1 = dt.ToUniversalTime();
            long Sticks = (dt1.Ticks - lLeft) / 10000000;
            return Sticks;

        } 
    }
}