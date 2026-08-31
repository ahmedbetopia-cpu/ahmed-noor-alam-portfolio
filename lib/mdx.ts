import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');
const LEGACY_BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const CASE_STUDIES_DIR = path.join(process.cwd(), 'content', 'case-studies');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  readingTime: string;
  content: string;
}

export interface CaseStudyPost {
  slug: string;
  title: string;
  client: string;
  year: string;
  description: string;
  problem?: string;
  approach?: string;
  toolsUsed: string[];
  outcome?: string;
  highlights: string[];
  coverImage?: string;
  content: string;
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

export function getAllPosts(): BlogPost[] {
  const targetDir = fs.existsSync(POSTS_DIR) ? POSTS_DIR : (fs.existsSync(LEGACY_BLOG_DIR) ? LEGACY_BLOG_DIR : null);
  if (!targetDir) return [];

  const files = getMdxFiles(targetDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(targetDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    const rawTags = data.tags || (data.category ? [data.category] : ['Power Platform']);
    const tags = Array.isArray(rawTags) ? rawTags : [rawTags];

    return {
      slug,
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString(),
      category: data.category || tags[0] || 'General',
      tags,
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || undefined,
      readingTime: stats.text,
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return ['All', ...Array.from(tagSet)];
}

export function getAllCaseStudies(): CaseStudyPost[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return [];
  }

  const files = getMdxFiles(CASE_STUDIES_DIR);

  const studies = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(CASE_STUDIES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const rawTools = data.toolsUsed || data.techStack || ['Power Platform'];
    const toolsUsed = Array.isArray(rawTools) ? rawTools : [rawTools];

    const rawHighlights = data.highlights || [];
    const highlights = Array.isArray(rawHighlights) ? rawHighlights : [rawHighlights];

    return {
      slug,
      title: data.title || 'Case Study',
      client: data.client || 'Enterprise Client',
      year: data.year ? String(data.year) : '2024',
      description: data.description || '',
      problem: data.problem || '',
      approach: data.approach || '',
      toolsUsed,
      outcome: data.outcome || '',
      highlights,
      coverImage: data.coverImage || undefined,
      content,
    };
  });

  return studies;
}

export function getCaseStudyBySlug(slug: string): CaseStudyPost | undefined {
  const studies = getAllCaseStudies();
  return studies.find((s) => s.slug === slug);
}
