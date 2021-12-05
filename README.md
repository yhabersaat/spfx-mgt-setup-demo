# spfx-mgt-setup-demo

Demo web part based on React framework to demonstrate how to setup Microsoft Graph Toolkit with SharePoint Framework (SFPx).

1) Deploy mgt-spfx library on your tenant app catalog https://github.com/microsoftgraph/microsoft-graph-toolkit/releases
2) Clone this repository
3) In the command line run:
  - `npm install`
  - `gulp build`
  - `gulp bundle --ship`
  - `gulp package-solution --ship`
4) Add to AppCatalog and deploy
5) Go to SharePoint Admin Center and approve required API permissions