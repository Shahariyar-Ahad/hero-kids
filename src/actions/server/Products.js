

"use server";

import { ObjectId } from "mongodb";
import { dbConnect, collections } from "@/lib/dbConnect";


export const getProducts = async (params ) => {
  const collection = await dbConnect(collections.PRODUCTS)
  return await collection.find().toArray();
}

export const getSingleProduct = async (id) => {
  if (!id || id.length !== 24) return {};

  const collection = await dbConnect(collections.PRODUCTS);
  return await collection.findOne({ _id: new ObjectId(id) }) || {};
};

