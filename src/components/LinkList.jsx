import { styled } from "styled-components";
import { formatingDate } from "../utils";

export const LinkList = ({ linkList }) => {
  return (
    <LinksContainer>
      {linkList.map((link) => {
        return <Link key={link.id} link={link} />;
      })}
    </LinksContainer>
  );
};

const Link = ({ link }) => {
  const getTimeAgo = (createdAt) => {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDiff = currentDate - createdDate;
    const intervals = [
      { label: "year", seconds: 60 * 60 * 24 * 30 * 12 },
      { label: "month", seconds: 60 * 60 * 24 * 30 },
      { label: "day", seconds: 60 * 60 * 24 },
      { label: "hour", seconds: 60 * 60 },
      { label: "minute", seconds: 60 },
    ];

    for (const { label, seconds } of intervals) {
      const diff = Math.floor(timeDiff / 1000 / seconds);
      if (diff >= 1) {
        return diff === 1 ? `${diff} ${label} ago` : `${diff} ${label}s ago`;
      }
    }

    return "Just now";
  };

  return (
    <LinkCard>
      <img src={link.imageSource} alt="link 이미지" />
      <div>
        <span>{getTimeAgo(link.createdAt)}</span>
        <p>{link.description}</p>
        <span>{formatingDate(link.createdAt)}</span>
      </div>
    </LinkCard>
  );
};

const LinksContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LinkCard = styled.div`
  width:100%
  height: 100%;
  background: #fff;
  display:flex;
  flex-direction: column;
  border-radius: 15px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 15px 15px 0 0;
  }

  div {
    padding: 15px 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap:10px;
    align-items: flex-start;
    height: 100px;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 15px 15px;
    background: #fff;
  }

p {
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    max-width: 300px;

    display: -webkit-box;
   -webkit-line-clamp: 2; // 원하는 라인수
   -webkit-box-orient: vertical
}

  span {
    color: ${({ theme }) => theme.color.Text};
    font-size: 12px;
    font-weight: 400;
  }
`;
