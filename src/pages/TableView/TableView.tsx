"use client"

import React, { useState } from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu"
import { PiDotsThreeCircle } from "react-icons/pi"

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
interface TableViewProps {
  data: UserInfo[];
}

export function TableView({ data }: TableViewProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [filter, setFilter] = useState({ title: "Email", value: "email" })

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="rounded-md border bg-white my-6 p-6 lg:w-3/5 w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder={`Filter ${filter.title}...`}
          value={(table.getColumn(filter.value)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(filter.value)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button><PiDotsThreeCircle className="text-2xl ml-4" /></button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 bg-white p-3 rounded-lg border border-gray-400">
            <DropdownMenuLabel className="text-sm ml-1">Select a colum</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <hr className="my-1" />
            <DropdownMenuRadioGroup value={filter.value} onValueChange={(newValue) => setFilter({ title: newValue.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), value: newValue })}>
              <DropdownMenuRadioItem className="text-xs p-1 hover:bg-slate-200 cursor-pointer" value="first_name">First Name</DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="text-xs p-1 hover:bg-slate-200 cursor-pointer" value="last_name">Last Name</DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="text-xs p-1 hover:bg-slate-200 cursor-pointer" value="email">Email</DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="text-xs p-1 hover:bg-slate-200 cursor-pointer" value="gender">Gender</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              ?.map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups()?.map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers?.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows?.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells()?.map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
