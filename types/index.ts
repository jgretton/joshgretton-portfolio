export interface ProjectReturnData {
  content: Project;
  slug: string;
}

export interface Project {
  title: string;
  slug: string;
  smallDescription: string;
  technologies: string[];
  completedDate: string;
  client: string;
  projectType: string;
  status: "building" | "client" | "personal";
  liveUrl: string;
  githubUrl: string;
  coverImage: string;
  mobileImage: string;
  draft: boolean;
  content?: string;
  image_alt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    openGraph: {
      title: string;
      description: string;
      type: string;
      image: string;
      imageAlt: string;
      url: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
    schema: {
      type: string;
      name: string;
      description: string;
      url: string;
      applicationCategory: string;
      operatingSystem: string;
      datePublished: string;
      screenshot: string;
      features: string[];
      audience: string;
    };
    robots: string;
    author: string;
    lang: string;
  };
}

export interface OpenGraphData {
  title: string;
  description: string;
  type: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface TwitterData {
  card: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface SchemaData {
  type: string;
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  datePublished: string;
  screenshot: string;
  features: string[];
  audience: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  openGraph: OpenGraphData;
  twitter: TwitterData;
  schema: SchemaData;
  robots: string;
  author: string;
  lang: string;
}
