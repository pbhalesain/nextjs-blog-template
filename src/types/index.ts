export type Post = {
	frontmatter: {
	  title: string;
	  meta_title?: string;
	  description?: string;
	  image?: string;
	  categories: string[];
	  author: string;
	  tags: string[];
	  date?: string;
	  draft?: boolean;
	};
	slug?: string;
	content?: string;
      };
      
      export type Author = {
	frontmatter: {
	  title: string;
	  image?: string;
	  description?: string;
	  meta_title?: string;
	  social: [
	    {
	      name: string;
	      icon: string;
	      link: string;
	    },
	  ];
	};
	content?: string;
	slug?: string;
      };