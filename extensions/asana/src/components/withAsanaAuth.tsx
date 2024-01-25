import { OAuthService, getAccessToken, withAccessToken } from "@raycast/utils";

const asana = OAuthService.asana({ scope: "default" });

export default function withAsanaAuth<T>(Component: React.ComponentType<T>) {
  return withAccessToken<T>(asana)(Component);
}

export function getOAuthToken(): string {
  const { token } = getAccessToken();
  return token;
}
