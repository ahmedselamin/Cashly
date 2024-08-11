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

        }
        catch (Exception ex)
        {

            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<ServiceResponse<Expense>> UpdateExpense(int userId, int ExpenseId, Expense newExpense)
    {
        var response = new ServiceResponse<Expense>();

        try
        {

        }
        catch (Exception ex)
        {

            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<ServiceResponse<bool>> DeleteExpense(int userId, int ExpenseId)
    {
        var response = new ServiceResponse<bool>();

        try
        {

        }
        catch (Exception ex)
        {

            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }
}
