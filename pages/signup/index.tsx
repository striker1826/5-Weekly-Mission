import { useAuthGuard } from "@/shared/model/hooks/useAuthGuard";
import PagePadding from "@/widgets/signin/ui/pagePadding/PagePadding";
import Header from "@/widgets/signup/ui/header/Header";
import SignupForm from "@/widgets/signup/ui/signupForm/SignupForm";
import React from "react";

const Home = () => {
  useAuthGuard();

  return (
    <>
      <PagePadding>
        <Header />
        <SignupForm />
      </PagePadding>
    </>
  );
};

export default Home;
