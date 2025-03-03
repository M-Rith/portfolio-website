type content = "paragraph" | "image" | "video" | "link" | "code" | "subtitle" | "list" | "table" | "quote" | "embed" | "end";

interface contentTypes {
   type: content;
   content: string | string[];
   highlights?: string[];
}

export interface BlogsTypes {
   id: number;
   title: string;
   description: string;
   content: contentTypes[];
   images: string[];
   createdAt: string;
   updatedAt: string;
}