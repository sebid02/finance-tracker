type Props = {
  isOpen: boolean;
  edit: number | null;
  description: string;
  category: string;
  type: "income" | "expense";
  amount: string;
  date: string;
  onClose: () => void;
  onDescriptionChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTypeChange: (value: "income" | "expense") => void;
  onAmountChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onSubmit: () => void;
};

export default function TransactionsModal({ isOpen, edit, description, category, type, amount, date, onClose, onDescriptionChange, onCategoryChange, onTypeChange, onAmountChange, onDateChange, onSubmit }: Props) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md rounded-lg border border-cyan-900/50 bg-cyan-950 p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">
                {edit ? "Edit transaction" : "Add transaction"}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                X
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-sm text-gray-300">
                  Description
                </label>
                <input
                  value={description}
                  onChange={(e) => onDescriptionChange(e.target.value)}
                  type="text"
                  placeholder="Enter description"
                  className="w-full rounded-lg border border-cyan-900 bg-cyan-900/50 px-3 py-2 text-sm outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">
                  Category
                </label>
                <input
                  value={category}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  type="text"
                  placeholder="Enter category"
                  className="w-full rounded-lg border border-cyan-900 bg-cyan-900/50 px-3 py-2 text-sm outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">Type</label>
                <select
                  value={type}
                  onChange={(e) =>
                    onTypeChange(e.target.value as "income" | "expense")
                  }
                  className="w-full rounded-lg border border-cyan-900 bg-cyan-900/50 px-3 py-2 text-sm outline-none"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">
                  Amount
                </label>
                <input
                  value={amount}
                  onChange={(e) => onAmountChange(e.target.value)}
                  type="number"
                  placeholder="0"
                  className="w-full rounded-lg border border-cyan-900 bg-cyan-900/50 px-3 py-2 text-sm outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">Date</label>
                <input
                  value={date}
                  onChange={(e) => onDateChange(e.target.value)}
                  type="date"
                  className="w-full rounded-lg border border-cyan-900 bg-cyan-900/50 px-3 py-2 text-sm outline-none"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <button
                onClick={onSubmit}
                className="rounded-lg border border-cyan-900 bg-cyan-900/40 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-900/20 transition cursor-pointer"
              >
                {edit ? "Save changes" : "Add transaction"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}