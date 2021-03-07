import { pathOr, prop, compose } from "ramda";
import { createSelector } from "reselect";

export const isAuthLoading = pathOr(false, ["auth", "loading"]);

export const selectUserData = pathOr({}, ["auth", "data"]);

export const selectAuthToken = createSelector([selectUserData], prop("token"));

export const isAuthenticated = createSelector(
  [selectUserData],
  compose(Boolean, prop("token"))
);
