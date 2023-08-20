import { Octokit } from "octokit";

const TOKEN = "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";

export const octokit = new Octokit({
  auth: TOKEN,
});
