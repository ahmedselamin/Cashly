
namespace Cashly.Server.Services.ExpenseService;

public class ExpenseService : IExpenseService
{
    private readonly DataContext _context;

    public ExpenseService(DataContext context)
    {
        _context = context;
    }
    public Task<ServiceResponse<List<Expense>>> GetExpenses()
    {
        throw new NotImplementedException();
    }
    public Task<ServiceResponse<Expense>> GetExpenseById(int id)
    {
        throw new NotImplementedException();
    }
    public Task<ServiceResponse<Expense>> CreateExpense(Expense expense)
    {
        throw new NotImplementedException();
    }

    public Task<ServiceResponse<Expense>> UpdateExpense(int id, Expense newExpense)
    {
        throw new NotImplementedException();
    }
    public Task<ServiceResponse<bool>> DeleteExpense(int id)
    {
        throw new NotImplementedException();
    }
}
