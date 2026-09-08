import { prisma } from '@/lib/prisma';
import { AdminShell } from '@/components/admin/AdminShell';
import { BlogListContent } from '@/components/admin/BlogListContent';

export default async function BlogListPage() {
  const posts = await prisma.blogPost.findMany({
    include: {
      author: { select: { name: true } },
      category: { select: { name: true, slug: true } },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <AdminShell title="Blog Posts">
      <BlogListContent posts={posts} />
    </AdminShell>
  );
}
