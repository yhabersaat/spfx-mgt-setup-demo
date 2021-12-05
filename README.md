# spfx-mgt-setup-demo

Demo web part solution based on React framework to demonstrate how to setup Microsoft Graph Toolkit (MGT) with SharePoint Framework (SPFx).

1) Deploy mgt-spfx library on your tenant App Catalog:
https://github.com/microsoftgraph/microsoft-graph-toolkit/releases
2) Clone this repository
3) In the command line run:
  - `npm install`
  - `gulp build`
  - `gulp bundle --ship`
  - `gulp package-solution --ship`
4) Add to App Catalog and deploy
5) Go to SharePoint Admin Center and approve required API permissions