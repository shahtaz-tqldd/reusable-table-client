"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@radix-ui/react-checkbox"
import { CaretSortIcon } from "@radix-ui/react-icons"
type UserInfo = {
  id: number
  first_name: string
  last_name: string
  gender: "Male" | "Female" | "Bigender" | "Agender" | "Genderqueer" | "Non-binary" | "Polygender"
  email: string
}

export const columns: ColumnDef<UserInfo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-4">
          <span>ID</span>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <CaretSortIcon className="mt-0.5 h-6 w-6 p-1 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("id")}</div>
    ),
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
            <CaretSortIcon className="mt-0.5 h-6 w-6 p-1 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("first_name")}</div>
    ),
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
            <CaretSortIcon className="mt-0.5 h-6 w-6 p-1 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("last_name")}</div>
    ),
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
            <CaretSortIcon className="mt-0.5 h-6 w-6 p-1 rounded-full hover:bg-blue-300 hover:text-black transition duration-300" />
          </button>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("gender")}</div>
    ),
  }
]
