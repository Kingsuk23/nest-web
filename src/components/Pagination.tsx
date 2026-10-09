"use client";

import { useFilters } from "@/hooks/useFilters";
import { DOTS, usePagination } from "@/hooks/usePagination";
import { cn } from "@/utils/cn";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
}) => {
  const { setFilter } = useFilters();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div>
      <ul className="md:flex items-center justify-center gap-6 mt-10 hidden">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="disabled:text-text-disable disabled:cursor-none text-text-default cursor-pointer"
          aria-label="left arrow"
        >
          <ChevronLeft size={32} />
        </button>
        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li
                className="text-base text-text-default size-8 rounded-md flex justify-center items-center"
                key={idx}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={cn(
                "text-base text-text-default size-8 rounded-md flex justify-center items-center cursor-pointer",
                pageNumber === currentPage &&
                  "text-text-inverted bg-button-bg-default",
              )}
              key={idx}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </li>
          );
        })}

        <button
          disabled={currentPage === lastPage}
          onClick={onNext}
          aria-label="righ arrow"
          className="disabled:text-text-disable disabled:cursor-none text-text-default cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>
      </ul>

      <div className="flex items-center justify-center gap-2 mt-10 md:mt-4">
        <button
          onClick={() => setFilter({ page: 1 })}
          disabled={currentPage === 1}
          aria-label="righ arrows"
          className="disabled:text-text-disable disabled:cursor-none text-text-default cursor-pointer md:hidden"
        >
          <ChevronsLeft size={24} />
        </button>

        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          aria-label="left arrow"
          className="disabled:text-text-disable disabled:cursor-none text-text-default cursor-pointer md:hidden"
        >
          <ChevronLeft size={24} />
        </button>
        <p className="text-text-secondary text-base">
          {currentPage} of {lastPage} pages
        </p>
        <button
          disabled={currentPage === lastPage}
          onClick={onNext}
          aria-label="righ arrow"
          className="disabled:text-text-disable disabled:cursor-none text-text-default cursor-pointer md:hidden"
        >
          <ChevronRight size={24} />
        </button>
        <button
          onClick={() => setFilter({ page: lastPage as number })}
          disabled={currentPage === lastPage}
          aria-label="righ arrows"
          className="disabled:text-text-disable disabled:cursor-none text-text-default cursor-pointer md:hidden"
        >
          <ChevronsRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
