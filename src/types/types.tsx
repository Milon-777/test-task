export interface LinkItem {
  icon: string;
  name: string;
  notificationCount: number;
}

export interface Employee {
  id: number;
  name: string;
  profileImage: string;
  email: string;
  status: string;
  role: string;
}

type TriangleDirection = "up" | "down";

export interface CardData {
  name: string;
  triangle: TriangleDirection;
}

export interface TriangleClasses {
  [key: string]: string;
}

export interface Status {
  [key: string]: string;
}
