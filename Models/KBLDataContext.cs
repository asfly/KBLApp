using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using MySql.Data.Entity;

namespace Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class KBLDataContext : DbContext
    {
        public KBLDataContext()
            : base("name=KBLEntities")
        {
            Database.SetInitializer<KBLDataContext>(null);
            //try
            //{
            //    using (var context = new KBLDataContext())
            //    {
            //        if (!context.Database.Exists())
            //        {
            //            // Create the SimpleMembership database without Entity Framework migration schema
            //            ((IObjectContextAdapter)context).ObjectContext.CreateDatabase();
            //        }
            //    }

            //    //WebSecurity.InitializeDatabaseConnection("DefaultConnection", "UserProfile", "UserId", "UserName", autoCreateTables: true);
            //}
            //catch (Exception ex)
            //{
            //    throw new InvalidOperationException("数据库初始化失败，请查阅 http://go.microsoft.com/fwlink/?LinkId=256588", ex);
            //}
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<T_Product> Products { get; set; }
        public DbSet<T_Customer> Customers { get; set; }
        public DbSet<T_Customer_Role> CustomerRoles { get; set; }
        public DbSet<T_Customer_Task> CustomerTasks { get; set; }        
        public DbSet<T_Customer_Product> CustomerProducts { get; set; }
        public DbSet<T_Customer_Schedule> CustomerSchedule { get; set; }
    }
}
