import mongoose, { Mongoose, MongooseError } from "mongoose";

class Database {
  static db: Mongoose;
  private static uri?: string = process.env.MONGODB_URI;
  private static dbName = process.env.DATABASE_NAME;

  private constructor() { }

  /**
   * The function `connect` establishes a connection to a MongoDB database.
   * @returns The `connect` function is returning the database connection object.
   */
  public static async connect() {
    if (!this.uri) {
      throw new Error("Mongo DB URI not found!");
    }

    if (!this.db) {
      try {
        this.db = await mongoose.connect(this.uri, { dbName: this.dbName });
      } catch (error) {
        if (error instanceof MongooseError) {
          console.error(error.message);
        }
      }
    }

    return this.db;
  }
}

export default Database;
