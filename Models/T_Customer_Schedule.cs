using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("T_Customer_Schedule")]
    public class T_Customer_Schedule
    {
        [Key]
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
