import { generatePagination } from "../lib/pagination";

test("excerpt starting and ending page numbers", () => {
  const pagination = generatePagination(5, 8);
  expect(pagination).toStrictEqual([
    { page: 1, current: false, excerpt: false },
    { page: null, current: false, excerpt: true },
    { page: 4, current: false, excerpt: false },
    { page: 5, current: true, excerpt: false },
    { page: 6, current: false, excerpt: false },
    { page: null, current: false, excerpt: true },
    { page: 8, current: false, excerpt: false },
  ]);
});

test("excerpt ending page numbers", () => {
  const pagination = generatePagination(2, 8);
  expect(pagination).toStrictEqual([
    { page: 1, current: false, excerpt: false },
    { page: 2, current: true, excerpt: false },
    { page: 3, current: false, excerpt: false },
    { page: null, current: false, excerpt: true },
    { page: 8, current: false, excerpt: false },
  ]);
});

test("excerpt starting page numbers", () => {
  const pagination = generatePagination(7, 8);
  expect(pagination).toStrictEqual([
    { page: 1, current: false, excerpt: false },
    { page: null, current: false, excerpt: true },
    { page: 6, current: false, excerpt: false },
    { page: 7, current: true, excerpt: false },
    { page: 8, current: false, excerpt: false },
  ]);
});

export {};
