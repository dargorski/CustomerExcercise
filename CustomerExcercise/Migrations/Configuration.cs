namespace CustomerExcercise.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using CustomerExcercise.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<CustomerExcercise.Models.CustomerExcerciseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CustomerExcercise.Models.CustomerExcerciseContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Customers.AddOrUpdate(x => x.Id,
                new Customer() { Id = 1, Name = "Dariusz", Surname = "Gorski", Number = "+48660453301", Address = "Warnenczyka 91c, 35-612 Rzeszów" },
                new Customer() { Id = 2, Name = "Anna", Surname = "Walczyk", Number = "605601840", Address = "Podhalanska 3/22 35-622 Rzeszów" }
                );

        }
    }
}
