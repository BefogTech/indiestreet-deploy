"use client";

// import { Button } from "@/components/ui/button";
// import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, DownloadIcon } from "lucide-react";

const handleDownload = (url) => {
  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download";
    link.click();
  }
};

export const columns = [
  {
    accessorKey: "fullname",
    header: ({ column }) => (
      <span
        className="text-black flex cursor-pointer text-left p-0 w-28"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Full Name
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </span>
    ),
    cell: ({ row }) => <div className="w-28 wrap-text">{row.original.fullname}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <span
        className="text-black flex items-center cursor-pointer text-left p-0 w-44"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </span>
    ),
    cell: ({ row }) => <div className="w-44 wrap-text">{row.original.email}</div>,
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <span
        className="text-black flex items-center cursor-pointer text-left p-0 w-20 h-10 text-wrap"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Phone Number
        <ArrowUpDown className="ml-1 h-5 w-5" />
      </span>
    ),
    cell: ({ row }) => <div className="w-20 wrap-text">{row.original.phoneNumber}</div>,
  },
  {
    accessorKey: "businessName",
    header: ({ column }) => (
      <span
        className="text-black flex items-center cursor-pointer text-left p-0 w-28"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Business Name
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </span>
    ),
    cell: ({ row }) => <div className="w-28 wrap-text">{row.original.businessName}</div>,
  },
  {
    accessorKey: "businessCategory",
    header: ({ column }) => (
      <span
        className="text-black flex items-center cursor-pointer text-left p-0 w-24"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Business Category
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </span>
    ),
    cell: ({ row }) => <div className="w-24 wrap-text">{row.original.businessCategory}</div>,
  },
  {
    accessorKey: "pan",
    header: ({ column }) => (
      <span
        className="text-black flex items-center cursor-pointer text-left p-0 w-20"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        PAN
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </span>
    ),
    cell: ({ row }) => <div className=" w-20 wrap-text">{row.original.pan}</div>,
  },
  {
    accessorKey: "gst",
    header: ({ column }) => (
      <span
        className="text-black flex items-center cursor-pointer text-left p-0 w-24"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        GST
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </span>
    ),
    cell: ({ row }) => <div className=" w-24 wrap-text">{row.original.gst}</div>,
  },
  {
    accessorKey: "accountProof",
    header: () => <p className="w-16 text-center">Account Proof</p>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center w-16">
        <button
          onClick={() => handleDownload(row.original.accountProof)}
          className="p-2 border border-[#4E1B61] text-[#4E1B61] rounded"
        >
          <DownloadIcon className="w-4 h-4" />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "addressProof",
    header: () => <p className="w-16 text-center">Address Proof</p>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center w-16">
        <button
          onClick={() => handleDownload(row.original.addressProof)}
          className="p-2 border border-[#4E1B61] text-[#4E1B61] rounded"
        >
          <DownloadIcon className="w-4 h-4" />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "gstProof",
    header: () => <p className="w-12 text-center">GST Proof</p>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center w-12">
        <button
          onClick={() => handleDownload(row.original.gstProof)}
          className="p-2 border border-[#4E1B61] text-[#4E1B61] rounded"
        >
          <DownloadIcon className="w-4 h-4" />
        </button>
      </div>
    ),
  },
];
