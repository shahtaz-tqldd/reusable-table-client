"use client"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
type UserInfo = {
  id: number
  first_name: string
  last_name: string
  gender: "Male" | "Female" | "Bigender" | "Agender" | "Genderqueer" | "Non-binary" | "Polygender"
  email: string
}

export const columns: ColumnDef<UserInfo>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-4">
          <span>ID</span>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="mt-0.5 h-7 w-7 p-2 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-4">
          <span>First Name</span>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="mt-0.5 h-7 w-7 p-2 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-4">
          <span>Last Name</span>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="mt-0.5 h-7 w-7 p-2 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-4">
          <span>Email</span>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="mt-0.5 h-7 w-7 p-2 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
  }
]
