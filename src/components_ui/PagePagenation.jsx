import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";

const PagePagenation = ({ numOfPages, handleSetPage,Page,increasePageValue,decreasePageValue ,i}) => {
  const numbers = Array.from({ length: numOfPages }, (_, i) => i + 1);
  const firstNumber = numbers[0]
  const lastNumber=numbers[numbers.length-1]

  console.log(numbers);
  return (
    <>
      <Pagination className={"my-6 p-4 dark:text-white"}>
        <PaginationContent>
          {Page === firstNumber || (
            <PaginationItem onClick={decreasePageValue}>
              <PaginationPrevious href="#" />
            </PaginationItem>
          )}

          {numbers.map((num) => (
            <PaginationItem key={num} onClick={() => handleSetPage(num)}>
              {num === Page ? (
                <PaginationLink href="#" isActive>
                  {num}
                </PaginationLink>
              ) : (
                <PaginationLink href="#">{num}</PaginationLink>
              )}
            </PaginationItem>
          ))}

          {
            Page===lastNumber ||
          <PaginationItem onClick={increasePageValue}>
            <PaginationNext href="#" />
          </PaginationItem>
          }
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PagePagenation;
