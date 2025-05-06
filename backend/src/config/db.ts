import { prisma } from "../temp/prisma";

const connectDataBase = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log("Connected to the database using Prisma!");
  } catch (error) {
    console.error(`Prisma connection failed: ${(error as Error).message}`);
    process.exit(1);
  }
  // try {
  //   const connectionInstance = await mongoose.connect(
  //     `${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`
  //   );
  //   console.log("Connected to MongoDB successfully!");
  //   console.log(`Database host: ${connectionInstance.connection.host}`);
  // } catch (error) {
  //   console.error(`MongoDB connection failed: ${(error as Error).message}`);
  //   process.exit(1);
  // }
};

export default connectDataBase;
