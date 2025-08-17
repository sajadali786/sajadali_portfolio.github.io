
import React from 'react';

interface HostingGuideProps {
  onClose: () => void;
}

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const HostingGuide: React.FC<HostingGuideProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">GitHub Pages Hosting Guide</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
        <div className="p-6 overflow-y-auto">
          <p className="mb-4">Follow these steps to deploy your new portfolio website to the web for free using GitHub Pages.</p>
          
          <h3 className="text-lg font-semibold mt-6 mb-2">Step 1: Prerequisites</h3>
          <p>Make sure you have <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Git</a> and <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Node.js</a> (which includes npm) installed on your computer.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Step 2: Customize Your Portfolio</h3>
          <p>Open the file <code className="bg-gray-200 p-1 rounded">src/constants.ts</code> and replace all the placeholder information with your own details. This is the only file you need to edit to personalize your site.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Step 3: Create a GitHub Repository</h3>
          <p>Create a new public repository on your GitHub account. Let's say you name it <code className="bg-gray-200 p-1 rounded">my-portfolio</code>. Initialize a local git repository in your project folder and push it to GitHub.</p>
          <CodeBlock>
            {`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main`}
          </CodeBlock>
          <p className="text-sm text-gray-600">Replace <code className="bg-gray-200 p-1 rounded">YOUR_USERNAME</code> and <code className="bg-gray-200 p-1 rounded">my-portfolio</code> with your actual GitHub username and repository name.</p>
          
          <h3 className="text-lg font-semibold mt-6 mb-2">Step 4: Install `gh-pages`</h3>
          <p>This package will handle the deployment process for you. Open your terminal in the project folder and run:</p>
          <CodeBlock>npm install gh-pages --save-dev</CodeBlock>

          <h3 className="text-lg font-semibold mt-6 mb-2">Step 5: Update `package.json`</h3>
          <p>Open your <code className="bg-gray-200 p-1 rounded">package.json</code> file and add the following two lines. First, a <code className="bg-gray-200 p-1 rounded">"homepage"</code> property at the top level:</p>
           <CodeBlock>{`"homepage": "https://YOUR_USERNAME.github.io/my-portfolio",`}</CodeBlock>
          <p>Second, add <code className="bg-gray-200 p-1 rounded">"predeploy"</code> and <code className="bg-gray-200 p-1 rounded">"deploy"</code> scripts inside the existing <code className="bg-gray-200 p-1 rounded">"scripts"</code> object:</p>
          <CodeBlock>{`"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},`}</CodeBlock>
          <p className="text-sm text-gray-600"><strong>Note:</strong> If you're using Create React App, the build folder is `build`, not `dist`. In that case, your deploy script should be <code className="bg-gray-200 p-1 rounded">"gh-pages -d build"</code>.</p>


          <h3 className="text-lg font-semibold mt-6 mb-2">Step 6: Deploy Your Website</h3>
          <p>You're all set! Run the deploy script from your terminal:</p>
          <CodeBlock>npm run deploy</CodeBlock>
          <p>This command will first build your website for production, then push the contents of the build folder (<code className="bg-gray-200 p-1 rounded">dist</code> or <code className="bg-gray-200 p-1 rounded">build</code>) to a new branch called <code className="bg-gray-200 p-1 rounded">gh-pages</code> in your GitHub repository.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Step 7: Configure GitHub Pages Settings</h3>
          <p>Finally, go to your repository settings on GitHub. Navigate to the "Pages" section (in the left sidebar). Under "Build and deployment", select <code className="bg-gray-200 p-1 rounded">gh-pages</code> as the branch to deploy from and <code className="bg-gray-200 p-1 rounded">/(root)</code> as the folder. Save your changes.</p>
          <p className="mt-4">Your website should be live at the URL you specified in your <code className="bg-gray-200 p-1 rounded">package.json</code> file within a few minutes. Congratulations!</p>
        </div>
        <div className="p-4 bg-gray-50 border-t text-right">
          <button onClick={onClose} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
};

export default HostingGuide;
