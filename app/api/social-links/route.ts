export async function GET() {
  return Response.json({
    facebook: process.env.FACEBOOK_URL,
    instagram: process.env.INSTAGRAM_URL,
    tiktok: process.env.TIKTOK_URL,
    tripadvisor: process.env.TRIPADVISOR_URL,
    googleReviews: process.env.GOOGLE_REVIEWS_URL,
  });
}
