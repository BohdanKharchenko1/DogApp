using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class AppUser
{
    [Key]
    public int IdUser { get;  set; }
    
    public string UserName { get;  set; }
    
    
}