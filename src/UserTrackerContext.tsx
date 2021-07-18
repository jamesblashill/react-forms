import * as React from "react";

export type UserTrackerEventType = "formChange" | "formSubmit" | "formFocus";
export type UserTrackerEvent = {
  type: UserTrackerEventType;
  /** A name describing where the event originated. e.g. a `formChange` event's name would be the form input name */
  name?: string;
};

export type UserTracker = {
  onEvent: (event: UserTrackerEvent) => void;
};

const defaultUserTracker: UserTracker = { onEvent: () => {} };

export const UserTrackerContext =
  React.createContext<UserTracker>(defaultUserTracker);
