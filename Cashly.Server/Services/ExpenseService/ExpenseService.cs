namespace Cashly.Server.Services.ExpenseService;

public class ExpenseService : IExpenseService
{
    private readonly DataContext _context;

    public ExpenseService(DataContext context)
    {
        _context = context;
    }
    public async Task<ServiceResponse<List<Expense>>> GetExpenses(int userId)
    {
        var response = new ServiceResponse<List<Expense>>();
        try
        {
            response.Data = await _context.Expenses
                .Where(e => e.UserId == userId)
                .OrderByDescending(e => e.CreatedAt)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<ServiceResponse<Expense>> GetExpenseById(int userId, int ExpenseId)
    {
        var response = new ServiceResponse<Expense>();

        try
        {
            var expense = await _context.Expenses
                .FirstOrDefaultAsync(e => e.Id == ExpenseId && e.UserId == userId);

            if (expense == null)
            {
                response.Success = false;
                response.Message = "Not Found!";

                return response;
            }

            response.Data = expense;
        }
        catch (Exception ex)
        {

            response.Success = false;
            response.Message = ex.Message;
        }

        return response;

    }

    public async Task<ServiceResponse<Expense>> CreateExpense(int userId, Expense expense)
    {
        var response = new ServiceResponse<Expense>();

        try
        {
            expense.UserId = userId;
            _context.Add(expense);
            await _context.SaveChangesAsync();

            response.Data = expense;
        }
        catch (Exception ex)
        {

            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<ServiceResponse<Expense>> UpdateExpense(int userId, int expenseId, Expense newExpense)
    {
        var response = new ServiceResponse<Expense>();

        try
        {
            var expense = await _context.Expenses
                .FirstOrDefaultAsync(e => e.Id == newExpense.Id && e.UserId == userId);
            if (expense == null)
            {
                response.Success = false;
                response.Message = "Expense not found.";

                return response;
            }

            expense.Title = newExpense.Title;
            expense.Amount = newExpense.Amount;
            expense.CreatedAt = newExpense.CreatedAt;

            await _context.SaveChangesAsync();

            response.Data = expense;
        }
        catch (Exception ex)
        {

            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<ServiceResponse<bool>> DeleteExpense(int userId, int expenseId)
    {
        var response = new ServiceResponse<bool>();

        try
        {
            var expense = await _context.Expenses
            .FirstOrDefaultAsync(e => e.Id == expenseId && e.UserId == userId);

            if (expense == null)
            {
                response.Success = false;
                response.Message = "Expense not found.";
                return response;
            }

            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();

            response.Data = true;
        }
        catch (Exception ex)
        {

            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }
}
