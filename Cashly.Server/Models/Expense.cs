using System.ComponentModel.DataAnnotations;

namespace Cashly.Server.Models;

public class Expense
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
    public int UserId { get; set; }
    [Required]
    public User User { get; set; }
}

