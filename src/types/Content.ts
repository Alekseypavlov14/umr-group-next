export interface Content {
  header: Header;
  page: Page;
  footer: Footer;
}

// Page
export interface Page {
  main: Main;
  order: Order;
  translators: Translators;
  about: About;
}

// Header
export interface Header {
  links: string[];
}

// Footer
export interface Footer {
  navigation: Navigation;
  company: Company;
  author: Author;
}

// Pages
interface Order {
  textBlocks: TextBlock[];
}

interface Main {
  sections: TextBlock[];
}

interface Translators {
  textBlocks: TextBlock[];
  button: string;
}

export interface About {
  text: TextBlock;
}

// Footer sections
export interface Navigation {
  title: string;
  links: string[];
}

export interface Contact {
  media: string;
  content: string;
}

export interface Company {
  title: string;
  contacts: Contact[];
}


export interface Author {
  title: string;
  contacts: Contact[];
}

// shared 
interface TextBlock {
  title: string;
  content: string;
  button?: string;
}