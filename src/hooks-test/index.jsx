const { status, data, error, isFetching } = useQuery(
  'todos',
  async () => {
    const res = await fetch('/api/data')
    return res
  },
  {
    // Refetch the data every 10 seconds
    refetchInterval: 10000,
  }
)

const addMutation = useMutation((value) => fetch(`/api/data?add=${value}`), {
  onSuccess: () => queryClient.invalidateQueries('todos'),
})

const clearMutation = useMutation(() => fetch(`/api/data?clear=1`), {
  onSuccess: () => queryClient.invalidateQueries('todos'),
})

// ==================================================================================================

function usePosts() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  });
}
const queryClient = useQueryClient();
const { status, data, error, isFetching } = usePosts();

// ==================================================================================================

// You can even leave out the queryFn and just go straight into options
const { status, data, error, isFetching } = useQuery(`/posts/${postId}`, {
  enabled: !!postId,
});

// ==================================================================================================

const queryClient = useQueryClient()

const { status, data, error } = useQuery('user', async () => {
  const res = await axios.get('/api/user')
  return res.data
})

const logoutMutation = useMutation((logout), {
  onSuccess: () => queryClient.invalidateQueries('user'),
})

const loginMutation = useMutation((login), {
  onSuccess: () => queryClient.invalidateQueries('user'),
})


// ==================================================================================================

const queryClient = useQueryClient()
const [text, setText] = useState('')

const addTodoMutation = useMutation(
  (text) => axios.post('/api/data', { text }),
  {
    // Optimistically update the cache value on mutate, but store
    // the old value and return it so that it's accessible in case of
    // an error
    onMutate: async (text) => {
      setText('')
      await queryClient.cancelQueries('todos')

      const previousValue = queryClient.getQueryData('todos')

      queryClient.setQueryData('todos', (old) => ({
        ...old,
        items: [...old.items, text],
      }))

      return previousValue
    },
    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData('todos', previousValue),
    // After success or failure, refetch the todos query
    onSettled: () => {
      queryClient.invalidateQueries('todos')
    },
  }
)

// ==================================================================================================

async function fetchProjects(page = 0) {
  const { data } = await axios.get('/api/projects?page=' + page)
  return data
}

const queryClient = useQueryClient()
const [page, setPage] = React.useState(0)

const { status, data, error, isFetching, isPreviousData } = useQuery(
  ['projects', page],
  () => fetchProjects(page),
  { keepPreviousData: true, staleTime: 5000 }
)

// Prefetch the next page!
React.useEffect(() => {
  if (data?.hasMore) {
    queryClient.prefetchQuery(['projects', page + 1], () =>
      fetchProjects(page + 1)
    )
  }
}, [data, page, queryClient])

queryClient.prefetchQuery(
  ['character', charID],
  () => getCharacter(charID),
  {
    staleTime: 10 * 1000, // only prefetch if older than 10 seconds
  }
)

setTimeout(() => {
  rerender({})
}, 1)

// ==================================================================================================

const [staleTime, setStaleTime] = React.useState(1000);
const [cacheTime, setCacheTime] = React.useState(3000);

React.useEffect(() => {
  queryClient.setDefaultOptions({
    queries: {
      staleTime, // how long data to be freshed
      cacheTime, // how long data to be in cached
    },
  });
}, [cacheTime, staleTime]);

// ==================================================================================================
let editingIndex = 1;
const saveMutation = useMutation((patchTodo), {
  onSuccess: (data) => {
    // Update `todos` and the individual todo queries when this mutation succeeds
    queryClient.invalidateQueries("todos");
    queryClient.setQueryData(["todo", { id: editingIndex }], data);
  },
});

// ==================================================================================================

const todos = queryClient.getQueryData(['todos']);
const todo = queryClient.getQueryData(['todos', id = 5]);


// ==================================================================================================

