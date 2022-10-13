export type TranslateableString = { [lang: string]: string };

export type Project = {
  Guid: string;
  Title: TranslateableString;
  SmallDescription: TranslateableString;
  Description: TranslateableString;
  Thumbnail: string;
};
