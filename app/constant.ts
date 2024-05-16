export const DATABASE_ID = process.env.NOTION_DATABASE_ID;
export const TOKEN = process.env.NOTION_TOKEN;

export const CUSTOM_THEME: {
  light?: [from: string, to: string];
  dark: [from: string, to: string];
} = {
  light: ['hsl(255, 0%, 90%)', 'hsl(255,10%,11%)'],
  dark: ['hsl(0, 0%, 22%)', 'hsl(225,0%,100%)'],
};
