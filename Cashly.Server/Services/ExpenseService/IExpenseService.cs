namespace Cashly.Server.Services.ExpenseService;

public interface IExpenseService
{
    Task<ServiceResponse<List<Expense>>> GetExpenses(int id);
    Task<ServiceResponse<Expense>> GetExpenseById(int userId, int ExpenseId);
    Task<ServiceResponse<Expense>> CreateExpense(int userId, Expense expense);
    Task<ServiceResponse<Expense>> UpdateExpense(int userId, int ExpenseId, Expense newExpense);
    Task<ServiceResponse<bool>> DeleteExpense(int userId, int ExpenseId);

}
