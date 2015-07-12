using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class T_Customer_Schedule
    {
        public long Id { get; set; }
        public long CustomerId { get;set;}
        public DateTime LogDate { get; set; }
        public decimal? Weight { get; set; }
        public decimal? TargetWeight { get; set; }
        public decimal? SurveyWeight { get; set; }
        public decimal? PrevAxunge { get; set; }
        public decimal? TotalAxunge { get; set; }
        public decimal? BodyMoisture { get; set; }
        public decimal? ChawdronAxunge { get; set; }
        public decimal? Muscle { get; set; }
        public decimal? Bone { get; set; }
        public decimal? BodyAge { get; set; }
        public decimal? BMI { get; set; }
        public decimal? MetabolicRate { get; set; }
        public decimal? Counting { get; set; }
    }
}
