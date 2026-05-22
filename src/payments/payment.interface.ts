export interface Payment {
  id: number;
  amount: number;
  method: string;
  status: string;
  userId: number;
  orderId: number;
}
