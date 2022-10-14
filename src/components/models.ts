export type TranslateableString = { [lang: string]: string };

export type Project = {
  Guid: string;
  SmallDescription: TranslateableString;
  Description: TranslateableString;
  Thumbnail: string;
};
