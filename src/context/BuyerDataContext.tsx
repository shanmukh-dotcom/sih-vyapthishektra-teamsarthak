"use client";

import React, { createContext, useContext, useState } from 'react';

// Define Data Types
export type Supplier = {
  id: string;
  name: string;
  type: string;
  location: string;
  distance: number; // km
  rating: number;
  reviews: number;
  reliability: string;
  certifications: string[];
  logisticsSupport: boolean;
};

export type Match = {
  id: string;
  supplier: Supplier;
  commodity: string;
  grade: string;
  availableQuantity: number; // kg
  offeredPrice: number; // per kg
  matchScore: number;
  qualityScore: number;
  expectedDelivery: string;
  paymentTerms: string;
  savings: number; // estimated savings percentage
  aiRecommendation: string;
};

export type Requirement = {
  id: string;
  commodity: string;
  grade: string;
  quantity: number;
  unit: string;
  requiredBy: string;
  status: 'Active' | 'Fulfilled' | 'Draft';
};

export type Order = {
  id: string;
  matchId: string;
  supplier: Supplier;
  commodity: string;
  quantity: number;
  price: number; // per kg
  totalAmount: number;
  status: 'In Progress' | 'Delivered' | 'Pending';
  deliveryStatus: 'Order Confirmed' | 'Packed & Dispatched' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  date: string;
};

type BuyerContextType = {
  buyerInfo: {
    name: string;
    location: string;
    accountType: string;
    email: string;
    phone: string;
    accountId: string;
    memberSince: string;
    address: string;
    bank: string;
  };
  requirements: Requirement[];
  addRequirement: (req: Requirement) => void;
  matches: Match[];
  orders: Order[];
  createOrder: (matchId: string, customPrice?: number) => void;
  updateDeliveryStatus: (orderId: string, status: Order['deliveryStatus']) => void;
};

const defaultContext: BuyerContextType = {
  buyerInfo: {
    name: "Meera Business Pvt. Ltd.",
    location: "Hyderabad, Telangana",
    accountType: "Buyer Account",
    email: "buyer@meerabusiness.com",
    phone: "+91 98765 43210",
    accountId: "MBP-2025-0001",
    memberSince: "15 Apr 2025",
    address: "Plot No. 45, Industrial Area, Uppal\nHyderabad, Telangana - 500039\nIndia",
    bank: "HDFC Bank",
  },
  requirements: [],
  addRequirement: () => {},
  matches: [],
  orders: [],
  createOrder: () => {},
  updateDeliveryStatus: () => {},
};

const BuyerDataContext = createContext<BuyerContextType>(defaultContext);

export function BuyerDataProvider({ children }: { children: React.ReactNode }) {
  const [requirements, setRequirements] = useState<Requirement[]>([
    {
      id: "REQ-001",
      commodity: "Tomato",
      grade: "Grade A",
      quantity: 12000,
      unit: "kg",
      requiredBy: "28 May 2025",
      status: "Active"
    }
  ]);

  const [matches] = useState<Match[]>([
    {
      id: "GFPC-TOM-270525-01",
      supplier: {
        id: "SUP-001",
        name: "Green Fields Farmers Producer Company",
        type: "FPO",
        location: "Rangareddy, Telangana",
        distance: 45,
        rating: 5,
        reviews: 128,
        reliability: "High",
        certifications: ["Verified"],
        logisticsSupport: true,
      },
      commodity: "Tomato",
      grade: "Grade A",
      availableQuantity: 12500,
      offeredPrice: 21.50,
      matchScore: 94,
      qualityScore: 94, // represented as 9.4/10
      expectedDelivery: "27 May 2025",
      paymentTerms: "7 Days",
      savings: 12,
      aiRecommendation: "Green Fields FPC offers the best combination of price, quality, and reliability for your requirement."
    },
    {
      id: "SOC-TOM-280525-02",
      supplier: {
        id: "SUP-002",
        name: "Sahyadri Organic Collective",
        type: "FPO",
        location: "Nalgonda, Telangana",
        distance: 78,
        rating: 5,
        reviews: 96,
        reliability: "Very High",
        certifications: ["Organic"],
        logisticsSupport: true,
      },
      commodity: "Tomato",
      grade: "Grade A",
      availableQuantity: 12000,
      offeredPrice: 22.30,
      matchScore: 89,
      qualityScore: 91, // 9.1/10
      expectedDelivery: "28 May 2025",
      paymentTerms: "Net 15 Days",
      savings: 14,
      aiRecommendation: "Excellent quality and organic certified, but slightly higher price and longer distance."
    },
    {
      id: "VAPG-TOM-280525-03",
      supplier: {
        id: "SUP-003",
        name: "Vikram Agro Producers Group",
        type: "FPO",
        location: "Medchal, Telangana",
        distance: 60,
        rating: 4.5,
        reviews: 72,
        reliability: "Medium",
        certifications: ["Verified"],
        logisticsSupport: false,
      },
      commodity: "Tomato",
      grade: "Grade A",
      availableQuantity: 13000,
      offeredPrice: 22.80,
      matchScore: 85,
      qualityScore: 88, // 8.8/10
      expectedDelivery: "28 May 2025",
      paymentTerms: "100% Advance",
      savings: 8,
      aiRecommendation: "Good quantity available but lacks logistics support and requires advance payment."
    }
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: "VK-ORD-2025-045",
      matchId: "GFPC-TOM-270525-01",
      supplier: matches[0].supplier,
      commodity: "Tomato (Grade A)",
      quantity: 12000,
      price: 21.50,
      totalAmount: 258000,
      status: "In Progress",
      deliveryStatus: "In Transit",
      date: "27 May 2025"
    },
    {
      id: "VK-ORD-2025-044",
      matchId: "SOC-TOM-280525-02",
      supplier: matches[1].supplier,
      commodity: "Onion",
      quantity: 8000,
      price: 18.00,
      totalAmount: 144000,
      status: "In Progress",
      deliveryStatus: "Packed & Dispatched",
      date: "26 May 2025"
    },
    {
      id: "VK-ORD-2025-043",
      matchId: "VAPG-TOM-280525-03",
      supplier: matches[2].supplier,
      commodity: "Potato",
      quantity: 5000,
      price: 15.00,
      totalAmount: 75000,
      status: "In Progress",
      deliveryStatus: "Order Confirmed",
      date: "25 May 2025"
    },
    {
      id: "VK-ORD-2025-032",
      matchId: "SOC-TOM-280525-02",
      supplier: matches[1].supplier,
      commodity: "Onion",
      quantity: 10000,
      price: 17.50,
      totalAmount: 175000,
      status: "Delivered",
      deliveryStatus: "Delivered",
      date: "15 May 2025"
    },
    {
      id: "VK-ORD-2025-030",
      matchId: "GFPC-TOM-270525-01",
      supplier: matches[0].supplier,
      commodity: "Tomato (Grade A)",
      quantity: 12000,
      price: 22.00,
      totalAmount: 264000,
      status: "Delivered",
      deliveryStatus: "Delivered",
      date: "10 May 2025"
    },
    {
      id: "VK-ORD-2025-028",
      matchId: "VAPG-TOM-280525-03",
      supplier: matches[2].supplier,
      commodity: "Potato",
      quantity: 15000,
      price: 14.50,
      totalAmount: 217500,
      status: "Delivered",
      deliveryStatus: "Delivered",
      date: "05 May 2025"
    },
    {
      id: "VK-ORD-2025-025",
      matchId: "GFPC-TOM-270525-01",
      supplier: matches[0].supplier,
      commodity: "Tomato (Grade B)",
      quantity: 8000,
      price: 18.00,
      totalAmount: 144000,
      status: "Delivered",
      deliveryStatus: "Delivered",
      date: "01 May 2025"
    },
    {
      id: "VK-ORD-2025-046",
      matchId: "VAPG-TOM-280525-03",
      supplier: matches[2].supplier,
      commodity: "Carrot",
      quantity: 2000,
      price: 30.00,
      totalAmount: 60000,
      status: "Pending",
      deliveryStatus: "Order Confirmed",
      date: "28 May 2025"
    }
  ]);

  const addRequirement = (req: Requirement) => {
    setRequirements(prev => [req, ...prev]);
  };

  const createOrder = (matchId: string, customPrice?: number) => {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;

    const newOrder: Order = {
      id: `VK-ORD-2025-${Math.floor(100 + Math.random() * 900)}`,
      matchId: match.id,
      supplier: match.supplier,
      commodity: match.commodity,
      quantity: 12000, // Based on requirement
      price: customPrice || match.offeredPrice,
      totalAmount: 12000 * (customPrice || match.offeredPrice),
      status: "In Progress",
      deliveryStatus: "Order Confirmed",
      date: "28 May 2025"
    };

    setOrders(prev => [newOrder, ...prev]);
  };

  const updateDeliveryStatus = (orderId: string, status: Order['deliveryStatus']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, deliveryStatus: status } : o));
  };

  return (
    <BuyerDataContext.Provider value={{
      buyerInfo: defaultContext.buyerInfo,
      requirements,
      addRequirement,
      matches,
      orders,
      createOrder,
      updateDeliveryStatus
    }}>
      {children}
    </BuyerDataContext.Provider>
  );
}

export function useBuyerData() {
  return useContext(BuyerDataContext);
}
