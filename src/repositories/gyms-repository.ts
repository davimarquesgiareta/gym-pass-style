import { Gym, Prisma } from "generated/prisma";

export interface GymsRepository {
  findById(userId: string): Promise<Gym | null>;
  create(data: Prisma.GymCreateInput): Promise<Gym>;
}
