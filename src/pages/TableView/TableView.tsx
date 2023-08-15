"use client"

import { useState } from "react"
import { PiDotsThreeCircle } from 'react-icons/pi'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

const TableView = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [filter, setFilter] = useState({ title: "Email", value: "email" })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="rounded-md border bg-white my-6 p-6 w-3/5">
      <div className="flex items-center py-4 gap-4">
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
            <button><PiDotsThreeCircle className="text-2xl" /></button>
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
      </div>
      <Table>
        <TableHeader className="rounded-xl">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="bg-blue-200">
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
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 py-4">
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
  )
}

export default TableView