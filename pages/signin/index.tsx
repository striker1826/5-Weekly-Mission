"use client";

import PagePadding from "@/widgets/signin/ui/pagePadding/PagePadding";
import React from "react";
import Header from "@/widgets/signin/ui/header/Header";
import SocialSigninForm from "@/widgets/signin/ui/socialForm/SocialSigninForm";
import SigninForm from "@/widgets/signin/ui/signinform/SigninForm";
import { useAuthGuard } from "@/shared/model/hooks/useAuthGuard";

const Home = () => {
  useAuthGuard();

  return (
    <PagePadding>
      <Header />
      <SigninForm />
      <SocialSigninForm />
    </PagePadding>
  );
};

export default Home;
