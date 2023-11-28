"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isValidAmazonProductUrl = (url) => {
  try {
    const parseURL = new URL(url);
    const hostname = parseURL.hostname;
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
  return false;
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidLink = isValidAmazonProductUrl(searchPrompt);
    setSearchPrompt(isValidLink ? searchPrompt : "");
    if (!isValidLink) {
      return toast.error("Please provide a valid Amazon product link");
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <ToastContainer />
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
