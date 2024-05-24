import apiInstance from "@/shared/model/api/axios";

export const signinApi = async (data: { email: string; password: string }) => {
  const res = await apiInstance.post("sign-in", data);
  if (!res) return;
  const accessToken = res.data.data.accessToken;
  return accessToken;
};
