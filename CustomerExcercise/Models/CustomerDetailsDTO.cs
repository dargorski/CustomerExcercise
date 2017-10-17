using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CustomerExcercise.Models
{
    public class CustomerDetailsDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Number { get; set; }
        public string Address { get; set; }
    }
}