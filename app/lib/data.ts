import { Transaction } from "@/app/types/transaction";

export const initialTransactions: Transaction[] = [
    { id: 1, date: "Mar 6, 2026", description: "Salary", category: "Income", type: "income", amount: 3000 },
    { id: 2, date: "Mar 5, 2026", description: "Groceries", category: "Food", type: "expense", amount: 42 },
    { id: 3, date: "Mar 4, 2026", description: "Netflix", category: "Entertainment", type: "expense", amount: 12 },
    { id: 4, date: "Mar 3, 2026", description: "Electricity bill", category: "Bills", type: "expense", amount: 85 },
    { id: 5, date: "Mar 2, 2026", description: "Freelance payment", category: "Income", type: "income", amount: 500 },
    { id: 6, date: "Mar 1, 2026", description: "Gym", category: "Fitness", type: "expense", amount: 100 },
    { id: 7, date: "Feb 28, 2026", description: "Internet", category: "Bills", type: "expense", amount: 150 },
    { id: 8, date: "Feb 27, 2026", description: "Discord Nitro", category: "Entertainment", type: "expense", amount: 100 }
]