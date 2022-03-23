import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewComment from "./NewComment";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const SinglePost = () => {
  return <NewComment />;
};

export default SinglePost;
