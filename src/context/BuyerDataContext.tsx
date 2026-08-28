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
    accountType: "Corporate Buyer",
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
      requiredBy: "2026-09-05",
      status: "Active"
    }
  ]);

  const [matches] = useState<Match[]>([
    {
      id: "LOT-T01-GREEN",
      supplier: {
        id: "SUP-001",
        name: "Green Fields Farmers Producer Company",
        type: "FPO",
        location: "Kurnool, AP",
        distance: 214,
        rating: 4.8,
        reviews: 124,
        reliability: "High",
        certifications: ["Organic", "FSSAI"],
        logisticsSupport: true,
      },
      commodity: "Tomato",
      grade: "Grade A",
      availableQuantity: 15000,
      offeredPrice: 21.50,
      matchScore: 94,
      qualityScore: 92,
      expectedDelivery: "2 Days",
      paymentTerms: "30% Advance, 70% on Delivery",
      savings: 12,
      aiRecommendation: "Highest match score based on your price preference and their strong delivery track record to Hyderabad."
    },
    {
      id: "LOT-T02-SAHYADRI",
      supplier: {
        id: "SUP-002",
        name: "Sahyadri Organic Collective",
        type: "Collective",
        location: "Pune, MH",
        distance: 512,
        rating: 4.9,
        reviews: 310,
        reliability: "Very High",
        certifications: ["Organic", "GlobalG.A.P", "FSSAI"],
        logisticsSupport: true,
      },
      commodity: "Tomato",
      grade: "Grade A",
      availableQuantity: 24000,
      offeredPrice: 21.00,
      matchScore: 88,
      qualityScore: 96,
      expectedDelivery: "3-4 Days",
      paymentTerms: "Net 15 Days",
      savings: 14,
      aiRecommendation: "Excellent quality and lowest price, but longer transit time compared to Green Fields."
    },
    {
      id: "LOT-T03-VIKRAM",
      supplier: {
        id: "SUP-003",
        name: "Vikram Agro Producers Group",
        type: "FPO",
        location: "Medak, TS",
        distance: 85,
        rating: 4.5,
        reviews: 42,
        reliability: "Medium",
        certifications: ["FSSAI"],
        logisticsSupport: false,
      },
      commodity: "Tomato",
      grade: "Grade A",
      availableQuantity: 10000, // Not enough for full order!
      offeredPrice: 22.00,
      matchScore: 76,
      qualityScore: 85,
      expectedDelivery: "1 Day (Self Pickup)",
      paymentTerms: "100% Advance",
      savings: 8,
      aiRecommendation: "Closest proximity, but requires self-arranged logistics and partial quantity fulfillment."
    }
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-VY-8890",
      matchId: "LOT-T01-GREEN", // Simulated previous order
      supplier: matches[0].supplier,
      commodity: "Tomato",
      quantity: 5000,
      price: 22.00,
      totalAmount: 110000,
      status: "Delivered",
      deliveryStatus: "Delivered",
      date: "2026-08-15"
    }
  ]);

  const addRequirement = (req: Requirement) => {
    setRequirements(prev => [req, ...prev]);
  };

  const createOrder = (matchId: string, customPrice?: number) => {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;

    const newOrder: Order = {
      id: `ORD-VY-${Math.floor(1000 + Math.random() * 9000)}`,
      matchId: match.id,
      supplier: match.supplier,
      commodity: match.commodity,
      quantity: 12000, // Based on requirement
      price: customPrice || match.offeredPrice,
      totalAmount: 12000 * (customPrice || match.offeredPrice),
      status: "In Progress",
      deliveryStatus: "Order Confirmed",
      date: new Date().toISOString().split('T')[0]
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
