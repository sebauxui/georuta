# Architecture

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: Zustand
- **Charts**: Recharts
- **Storage**: localStorage API

## File Structure

```
app/
  layout.tsx      # Root layout
  page.tsx        # Main page
components/
  ExpenseForm.tsx # Add new expense
  ExpenseList.tsx # Display expenses
  ExpenseChart.tsx # Pie/bar chart
  CategoryFilter.tsx # Filter dropdown
store/
  useExpenseStore.ts # Zustand store
types/
  expense.ts      # TypeScript types
```

## Data Shape

```typescript
interface Expense {
  id: string
  amount: number
  description: string
  category: string
  date: string // ISO format
  createdAt: number // timestamp
}
```

## Values

- Keep it simple
- No over-engineering
- Make it work first, then improve
