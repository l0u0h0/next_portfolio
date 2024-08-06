export const DATABASE_ID = process.env.NOTION_DATABASE_ID;
export const TOKEN = process.env.NOTION_TOKEN;

export const URL = {
  ssafy: 'https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp',
  stargate_git: 'https://github.com/l0u0h0/stargate',
  github: 'https://github.com/l0u0h0',
  velog: 'https://velog.io/@l0u0h0',
  portfolio:
    'https://lyh-portfolio.notion.site/b8cc6a69fb06478f8f2d01f4288f49d4',
  insta: 'https://www.instagram.com/gom.dol.ssu/',
  meta_url: 'https://l0u0h0-web.vercel.app',
  meta_img:
    'https://velog.velcdn.com/images/l0u0h0/post/bbdb3edd-2982-48a7-9d2e-cab3177f32fc/image.jpg',
};

export const CUSTOM_THEME: {
  light?: [from: string, to: string];
  dark: [from: string, to: string];
} = {
  light: ['hsl(255, 0%, 90%)', 'hsl(255,10%,11%)'],
  dark: ['hsl(0, 0%, 22%)', 'hsl(225,0%,100%)'],
};
