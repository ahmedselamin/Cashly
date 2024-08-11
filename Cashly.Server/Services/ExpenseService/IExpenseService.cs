namespace Cashly.Server.Services.ExpenseService;

public interface IExpenseService
{
    Task<ServiceResponse<List<Expense>>> GetExpenses();
    Task<ServiceResponse<Expense>> GetExpenseById(int id);
    Task<ServiceResponse<Expense>> CreateExpense(Expense expense);
    Task<ServiceResponse<Expense>> UpdateExpense(int id, Expense newExpense);
    Task<ServiceResponse<bool>> DeleteExpense(int id);

}
