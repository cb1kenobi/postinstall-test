# postinstall test

This package does nothing other than runs a postinstall script that outputs the
current user and group.

## Run Test

```
npm i @cb1kenobi/postinstall-test
```

```
npm i -g @cb1kenobi/postinstall-test
```

## Results

Tested with Node.js 14.15.1 LTS on 64-bit platforms.

| Platform | Scope  | User      | gid | egid | SUDO_GID | uid | euid | SUDO_UID |
| -------- | ------ | --------- | --- | ---- | -------- | --- | ---- | -------- |
| Linux    | Local  | user      | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | sudo user | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | root      | ?   | ?    | ?        | ?   | ?    | ?        |
|          | Global | user      | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | sudo user | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | root      | ?   | ?    | ?        | ?   | ?    | ?        |
| macOS    | Local  | user      | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | sudo user | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | root      | ?   | ?    | ?        | ?   | ?    | ?        |
|          | Global | user      | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | sudo user | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        | root      | ?   | ?    | ?        | ?   | ?    | ?        |
| Windows  | Local  |  user     | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        |  admin    | ?   | ?    | ?        | ?   | ?    | ?        |
|          | Global |  user     | ?   | ?    | ?        | ?   | ?    | ?        |
|          |        |  admin    | ?   | ?    | ?        | ?   | ?    | ?        |
