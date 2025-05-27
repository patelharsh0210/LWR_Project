# LWR Portfolio Site

This simple LWR Application serves as my portfolio website. It is hosted on GitHub Pages at [lachlanpeacock.com](https://lachlanpeacock.com)

The repository also contains examples of high-quality coding and documentation standards, unit testing, and Pull Request validation via GitHub Actions.

## Project Structure

The directory structure is as follows:

```
.github/
  └── workflows/        // Workflows for use in GitHub actions
      └── *
docs/                   // the current build of the site, as served on GitHub pages
src/
  ├── assets/           // static assets, such as images
  │   └── *
  |   └── favicon.ico
  └── modules/          // lwc modules
      └── base/         // base level components and app content
          └── *
      └── ui/           // low-level front-end components
          └── *
lwr.config.json         // lwr configuration
jest.config.json        // jest testing framework configuration
package.json            // npm packaging configuration
```

## Running the Project locally in dev Mode

```bash
yarn install
yarn dev
```

Open the site at [http://localhost:3000](http://localhost:3000)

## Publishing Changes to GitHub Pages

This application is served on GitHub pages. It will serve the build in the `docs/` directory in the `main` branch.

Create a new build of the app (see below). Make sure to preserve any metadata defined in `index.html`.

```bash
yarn build:prod-compat
```

## Unit Testing

This project utilises the jest testing framework, and enforces at least 70% coverage. Each component should contain a `__tests__` subdirectory, with relevant unit tests for the component.

Run the unit tests and check coverage requirements:

```bash
yarn test:unit:coverage
```
