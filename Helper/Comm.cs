using System.Text;
using System.Linq;
using System.Net;
using System.Collections.Generic;
using Newtonsoft.Json;
using Helper.T;

namespace Helper
{
    public static class Comm
    {
        public static string ResolveTJSON(T_JSON model)
        {
            KeyValuePair<string, object> _flowKeyValue = model.Input0.First();
            string s = JsonConvert.SerializeObject(_flowKeyValue.Value);
            return s;
        }
    }
}