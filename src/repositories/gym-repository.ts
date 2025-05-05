import { Gym } from "generated/prisma";

export interface GymsRepository {
  findById(userId: string): Promise<Gym | null>;
}
