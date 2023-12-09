"use server";

import axios from "axios";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  const response = await axios.get(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );
  const data = await response.data;
  return data;
}
