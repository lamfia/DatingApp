using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class RegisterDto
{
    [Required]
    public string displayName { get; set; } = "";

    [Required]
    [EmailAddress]
    public string email { get; set; } = "";

    [Required]
    public string password { get; set; } = "";
}

