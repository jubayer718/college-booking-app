// interfaces/review.interface.ts
export interface Review {
  _id?: string;
  collegeId: string;
  userEmail: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
