import React from "react";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { useTags } from "components/useTags"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "components/Button";
import { Center } from "components/Center";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    margin-left: 12px;
    > a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
function Tags() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tags } = useTags()
  return (
    <Layout>
      <TagList>
        {
          tags.map(tag =>
            <li key={tag.id}>
              <Link to={"/tag/" + tag.id}>
                <span>{tag.name}</span>
                <Icon name="right" />
              </Link>
            </li>
          )
        }
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  )
}

export default Tags;