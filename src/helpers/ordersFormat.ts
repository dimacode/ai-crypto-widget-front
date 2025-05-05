import { SmartDeal } from "../components/SmartDeals/SmartDeals";
import { formatDateYearFirst } from "./formatDateYearFirst";

export const ordersFormat = (orders:SmartDeal[]) => {
  return orders.map(order => {
    return {
      ...order,
      pareName: order.pareName.replace("USDT", "/USDT"),
      operation: order.operation === 'Long' ? 'BUY' : 'SELL',
      unrealizedProfit: order.unrealizedProfit.replace('(', '').replace(')', ''),
      openedOn: formatDateYearFirst(order.openedOn),
    };
  });

  return orders;
};

