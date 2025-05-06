import { Gym, Prisma } from "generated/prisma";

export interface GymsRepository {
  findById(userId: string): Promise<Gym | null>;
  searchMany(query: string, page: number): Promise<Gym[]>;
  create(data: Prisma.GymCreateInput): Promise<Gym>;
}
