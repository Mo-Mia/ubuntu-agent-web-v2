export interface Donation {
  id: string;
  date: string;
  displayDate: string;
  charity: string;
  property: string;
  amount: number;
}

export const donations: Donation[] = [
  { id: "d13", date: "2026-05-01", displayDate: "May 2026", charity: "CHOC", property: "Complex - Fairview", amount: 1750 },
  { id: "d12", date: "2026-04-06", displayDate: "April 2026", charity: "Breadline Africa", property: "Fairview", amount: 5000 },
  { id: "d11", date: "2026-03-20", displayDate: "March 2026", charity: "Mother of Peace", property: "Wild Olive Manor", amount: 4800 },
  { id: "d10", date: "2026-03-20", displayDate: "March 2026", charity: "Breadline Africa", property: "Villa Donato", amount: 4750 },
  { id: "d09", date: "2026-03-11", displayDate: "March 2026", charity: "One Small Act of Kindness", property: "Madikwe", amount: 4000 },
  { id: "d08", date: "2026-03-04", displayDate: "March 2026", charity: "SPCA", property: "Umthunzi Gardens", amount: 4000 },
  { id: "d07", date: "2026-02-02", displayDate: "February 2026", charity: "SPCA", property: "Fourways Estate", amount: 3800 },
  { id: "d06", date: "2026-01-17", displayDate: "January 2026", charity: "CHOC", property: "Brompton Court", amount: 1600 },
  { id: "d05", date: "2025-12-22", displayDate: "December 2025", charity: "Kitty & Puppy Haven", property: "Banbury Estate", amount: 2000 },
  { id: "d04", date: "2025-12-20", displayDate: "December 2025", charity: "CHOC", property: "Maple Row", amount: 1500 },
  { id: "d03", date: "2025-11-05", displayDate: "November 2025", charity: "SPCA", property: "Harmony Corner", amount: 2500 },
  { id: "d02", date: "2025-11-05", displayDate: "November 2025", charity: "Gift of the Givers", property: "Rosemary Lane", amount: 3000 },
  { id: "d01", date: "2025-10-17", displayDate: "October 2025", charity: "Four Paws", property: "Tezula Lifestyle Estate", amount: 2750 },
];

// Summary stats
export const totalDonated = 45250;
export const totalTransactions = 13;
export const totalCharities = 8;
export const programmeStartDate = "October 2025";
