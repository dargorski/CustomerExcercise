using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CustomerExcercise.Models
{
    public class Customer
    {

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Surname { get; set; }

        [Required]
        public string Number { get; set; }
        
        [Required]
        public string Address { get; set; }
    }
}