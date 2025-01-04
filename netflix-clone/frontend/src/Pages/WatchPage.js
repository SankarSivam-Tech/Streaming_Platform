import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentStore } from "../store/content";

const WatchPage = () => {
  const { id } = useParams();
  const { contentType } = useContentStore();
  const [trailers, setTrailers] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrailers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/${contentType}/${id}/trailers`,
          {
            withCredentials: true,
          }
        );
        setTrailers(res.data.trailers);
      } catch (error) {
        if (error.message.includes("404")) {
          setTrailers([]);
        }
      }
    };
    getTrailers();
  }, [contentType, id]);

  useEffect(() => {
    const getSimilarContent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/${contentType}/${id}/similar`,
          {
            withCredentials: true,
          }
        );
        setSimilarContent(res.data.similar);
      } catch (error) {
        if (error.message.includes("404")) {
          setSimilarContent([]);
        }
      }
    };
    getSimilarContent();
  }, [contentType, id]);

  useEffect(() => {
    const getContentDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/${contentType}/${id}/details`
        );
        setContent(res.data.content);
      } catch (error) {
        if (error.message.includes("404")) {
          setContent(null);
        }
      } finally {
        setLoading(false);
      }
    };
    getContentDetails();
  }, [contentType, id]);

  console.log("trailers:", trailers);
  console.log("similar:", similarContent);
  console.log("content:", content);
};

export default WatchPage;
