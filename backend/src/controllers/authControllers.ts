import { Request, Response } from "express";
import ApiError from "../error/apiError";
import ApiResponse from "../error/apiResponse";
import asyncHandler from "../error/asyncHandler";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    if (!name || !email || !password) {
      throw new ApiError(400, "Please provide all fields");
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    const response = new ApiResponse(201, user, "User created successfully");

    res.status(response.statusCode).json({
      success: response.success,
      message: response.message,
      data: response.data,
    });
  }
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please provide all fields");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new ApiError(401, "User not found");
  }

  if (user.password !== password) {
    throw new ApiError(401, "Invalid credentials");
  }

  const response = new ApiResponse(200, user, "User logged in successfully");

  res.status(response.statusCode).json({
    success: response.success,
    message: response.message,
    data: response.data,
  });
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Find the existing user by email
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    throw new ApiError(401, "User not found");
  }

  // Prepare update data
  const updateData: any = {};
  if (name) updateData.name = name;
  if (password) updateData.password = password;

  // Update user details
  const updatedUser = await prisma.user.update({
    where: { email },
    data: updateData,
  });

  // Prepare response
  const response = new ApiResponse(
    200,
    updatedUser,
    "User updated successfully"
  );

  // Send the response
  res.status(response.statusCode).json({
    success: response.success,
    message: response.message,
    data: response.data,
  });
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;

  // Find the existing user by email
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    throw new ApiError(401, "User not found");
  }

  // Delete user
  await prisma.user.delete({
    where: { email },
  });

  // Prepare response
  const response = new ApiResponse(200, null, "User deleted successfully");

  // Send the response
  res.status(response.statusCode).json({
    success: response.success,
    message: response.message,
    data: response.data,
  });
});
