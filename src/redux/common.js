export const handlePending = state => {
  state.loading = true;
  state.error = false;
};

export const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};