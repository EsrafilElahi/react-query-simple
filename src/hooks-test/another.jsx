// import { useQuery } from "react-query";
// import { fetchPosts } from "../api";
// import { queryClient } from "../../../App";

// function prefetch(newPage) {
//   queryClient.prefetchQuery({
//     queryFn: fetchPosts(newPage),
//     queryKey: [`posts_${newPage}`],
//   });
// }

// export const usePostsQuery = (page = 0) => {
//   return { ...useQuery([`posts_${page}`], fetchPosts(page)), prefetch };
// };

// // =======================================================================================

// import { useMutation } from "react-query";
// import { deletePost } from "../api";

// export const useDeletePost = () => {
//   return useMutation({
//     mutationFn: (id) => {
//       return deletePost(id);
//     },
//   });
// };

// // =======================================================================================

// const [page, setPage] = useState(0);
// const { isLoading, data, isError, error, prefetch } = usePostsQuery(page);
// const { mutate: deletePost, isLoading: isDeleting } = useDeletePost();

// useEffect(() => {
//   prefetch(1);
// }, [prefetch]);

// const handlePageChange = (newPage) => {
//   setPage(newPage);
//   prefetch(newPage + 1);
// };

// const handleDeletePost = (id) => () => {
//   deletePost(id);
// };

// // =======================================================================================
