import { OAuthService, getAccessToken, withAccessToken } from "@raycast/utils";

export const zoom = OAuthService.zoom({ scope: "" });

export function withZoomAuth<T>(Component: React.ComponentType<T>) {
  return withAccessToken<T>(zoom)(Component);
}

export function getOAuthToken(): string {
  const { token } = getAccessToken();
  return token;
}
