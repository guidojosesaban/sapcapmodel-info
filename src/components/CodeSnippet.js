import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customStyle = {
  borderRadius: '8px',
  margin: '1.5rem 0',
  fontSize: '0.9rem',
  padding: '1.25rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
};

const CodeSnippet = ({ language, children }) => (
    <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus} 
        customStyle={customStyle}
        wrapLongLines={true}
    >
        {children.trim()}
    </SyntaxHighlighter>
);

export default CodeSnippet;