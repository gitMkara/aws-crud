## Usage

### Requirements

- AWS CLI [Installation](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [Configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

![alt text][logo]

[logo]: https://assets-global.website-files.com/60acbb950c4d6606963e1fed/60acbb950c4d667c3a3e2025_serverless-framework-235f7e57983d270320cba8f86ec0ea65.svg "Serverless Framework"

```bash
npm install -g serverless
```

To create new serverless AWS TypeScript project using this template run:

```bash
serverless create \
--template-url https://github.com/gitMkara/aws-crud/tree/master \
--path myServiceName
```

where `myServiceName` should be replaced with the name of your choice.

Then change directory to the newly created one:

```
cd myServiceName
```

And run:

```
npm install
```

or:

```
yarn install
```

To deploy

```bash
serverless deploy
```

## Licence

MIT.
