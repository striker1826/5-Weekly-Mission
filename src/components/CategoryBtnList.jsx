import { styled } from "styled-components";

export const CategoryBtnList = () => {
  return (
    <BtnContainer>
      <CategoryBtn>전체</CategoryBtn>
      <CategoryBtn>⭐️ 즐겨찾기</CategoryBtn>
      <CategoryBtn>코딩 팁</CategoryBtn>
      <CategoryBtn>채용 사이트</CategoryBtn>
      <CategoryBtn>유용한 글</CategoryBtn>
      <CategoryBtn>나만의 장소</CategoryBtn>
    </BtnContainer>
  );
};

const CategoryBtn = ({ children }) => {
  return <Btn>{children}</Btn>;
};

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;

const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.GraPurpleblue};
  background: #fff;
  padding: 8px 12px;
  cursor: pointer;
`;
