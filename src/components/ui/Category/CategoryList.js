import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const { data } = await getAllCategories();
  // console.log(data);
  return (
    <Box className="my-8 p-6 bg-[#F3F3F3] rounded">
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Categories
      </Typography>
      <hr className="my-2" />
      <Stack spacing={2} className="mt-5 ">
        {data.map((category) => (
          <Button
            key={category?._id}
            variant="outlined"
            className="text-[#151515] border-[#151515]"
          >
            <Link
              href={`/categories/news?category=${category?.title.toLowerCase()}`}
            >
              {category?.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
