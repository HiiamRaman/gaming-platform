import  { useState } from "react";
import {
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  ArrowDownToLine,
  ArrowUpFromLine
} from "lucide-react";
import { toast } from "sonner";

// Mock Ledger Data
const MOCK_TRANSACTIONS = [
  { id: "TXN-8849", user: "VIP_Tiger99", type: "withdrawal", amount: "NPR 500,000", method: "Bank Transfer", status: "pending", date: "2026-09-07 13:45" },
  { id: "TXN-8850", user: "SamuraiX", type: "deposit", amount: "NPR 25,000", method: "Khalti QR", status: "approved", date: "2026-09-07 13:42" },
  { id: "TXN-8851", user: "LuckyDragon", type: "deposit", amount: "NPR 10,000", method: "Khalti Wallet", status: "approved", date: "2026-09-07 13:15" },
  { id: "TXN-8852", user: "CryptoKing", type: "deposit", amount: "NPR 150,000", method: "USDT (TRC20)", status: "pending", date: "2026-09-07 12:30" },
  { id: "TXN-8853", user: "NoobMaster", type: "withdrawal", amount: "NPR 5,000", method: "eSewa", status: "rejected", date: "2026-09-07 11:20" },
  { id: "TXN-8854", user: "HighRoller22", type: "deposit", amount: "NPR 1,000,000", method: "Bank Wire", status: "pending", date: "2026-09-07 10:05" },
];

export function DepositAudit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter Logic
  const filteredTransactions = MOCK_TRANSACTIONS.filter((txn) => {
    const matchesSearch = txn.id.toLowerCase().includes(searchTerm.toLowerCase()) || txn.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || txn.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAction = (id: string, action: "approve" | "reject") => {
    if (action === "approve") {
      toast.success(`Transaction ${id} approved successfully.`);
    } else {
      toast.error(`Transaction ${id} has been rejected.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-widest uppercase">Deposit Audit Ledger</h1>
          <p className="text-xs text-zinc-400 mt-1 font-mono">Review and process user financial transactions</p>
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="relative w-full lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search ID or User..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111] border border-zinc-800 text-sm text-white rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-red-500 transition-colors placeholder:text-zinc-600"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#111] border border-zinc-800 text-sm text-zinc-400 rounded-lg px-4 py-2.5 focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>

          <button className="bg-[#111] border border-zinc-800 p-2.5 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors text-zinc-400 flex-shrink-0">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="bg-[#111] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#161616] text-zinc-400 text-xs uppercase font-bold tracking-wider border-b border-zinc-800">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-zinc-900/50 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs text-zinc-300 group-hover:text-white transition-colors">{txn.id}</td>
                  <td className="px-6 py-4 font-bold text-white">{txn.user}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase">
                      {txn.type === 'deposit' ? (
                        <span className="text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-md"><ArrowDownToLine className="w-3 h-3" /> IN</span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1 bg-rose-500/10 px-2 py-1 rounded-md"><ArrowUpFromLine className="w-3 h-3" /> OUT</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-white">{txn.amount}</td>
                  <td className="px-6 py-4 text-zinc-400 text-xs">{txn.method}</td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      txn.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      txn.status === 'pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {txn.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                      {txn.status === 'pending' && <Clock className="w-3 h-3 animate-pulse" />}
                      {txn.status === 'rejected' && <XCircle className="w-3 h-3" />}
                      {txn.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-500 text-xs font-mono">{txn.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {txn.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleAction(txn.id, 'approve')}
                            className="p-1.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-lg transition-colors border border-emerald-500/20"
                            title="Approve"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleAction(txn.id, 'reject')}
                            className="p-1.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white rounded-lg transition-colors border border-rose-500/20"
                            title="Reject"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button
                        className="p-1.5 bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-zinc-500 font-mono text-sm">
                    No transactions found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
