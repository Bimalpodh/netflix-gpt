export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg";

export const USER_AVATAR="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTION={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY

  }
};

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGE=[
  {identifier:"en",name:"english"},
  {identifier:"hindi",name:"हिन्दी"},
  {identifier:"spanish",name:"spanish"},
  {identifier:"french",name:"french"}
]

export const GEMINI_AI_KEY = import.meta.env.VITE_GEMINI_AI_KEY;

