---
sidebar_position: 5
---

# State Management

Keep state simple, predictable, and close to where it's used.

## Patterns

- Local state with React `useState`/`useReducer`
- Shared state via small, focused Contexts (wallet, theme, network)
- Derived state via selectors/memos
- Async state via hooks that return `{data, loading, error}`

## Suggested Contexts

- SessionContext: wallet address, chainId, connection status
- NetworkContext: RPC health, gas price, explorer URLs
- FeatureFlagsContext: enable/disable experimental flows

## Side Effects

- Isolate API/Web3 effects in hooks (e.g., `useSwap`, `useGovernance`)
- Debounce expensive operations
- Cancel inflight requests on unmount

## Persistence

- Persist only non-sensitive preferences (theme, dismissed banners)
- Never persist secrets or private data

## Example Hook Shape

```
function useProposalList() {
  const [state, setState] = useState({list: [], loading: true, error: null});
  useEffect(() => { /* fetch, set, catch */ }, []);
  return state;
}
```

## Testing

- Unit test reducers and hooks in isolation
- Mock providers and network calls
- Verify loading/error UI states

Keep it boring. Boring state is reliable state.
