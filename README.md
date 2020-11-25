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

## macOS Results

Tested with Node.js 14.15.0.

### Local Install

#### Normal User (chris)

| sudo | Unsafe Perm | gid        | egid       | SUDO_GID   | uid          | euid         | SUDO_UID    |
| :--: | :---------: | ---------- | ---------- | ---------- | ------------ | ------------ | ----------- |
|  No  |             | 20 (staff) | 20 (staff) | n/a        | 501 (chris)  | 501 (chris)  | n/a         |
|  No  |     Yes     | 20 (staff) | 20 (staff) | n/a        | 501 (chris)  | 501 (chris)  | n/a         |
|  Yes |             | 20 (staff) | 20 (staff) | 20 (staff) | 501 (chris)  | 501 (chris)  | 501 (chris) |
|  Yes |     Yes     | 0 (wheel)  | 0 (wheel)  | 20 (staff) | 0 (root)     | 0 (root)     | 501 (chris) |

#### Root User (root)

| sudo | Flags       | gid        | egid       | SUDO_GID   | uid          | euid         | SUDO_UID    |
| :--: | :---------: | ---------- | ---------- | ---------- | ------------ | ------------ | ----------- |
|  No  |             | 0 (wheel)  | 0 (wheel)  | n/a        | prefix owner | prefix owner | n/a         |
|  No  |     Yes     | 0 (wheel)  | 0 (wheel)  | n/a        | 0 (root)     | 0 (root)     | n/a         |
|  Yes |             | 0 (wheel)  | 0 (wheel)  | 0 (wheel)  | 0 (root)     | 0 (root)     | 0 (root)    |
|  Yes |     Yes     | 0 (wheel)  | 0 (wheel)  | 0 (wheel)  | 0 (root)     | 0 (root)     | 0 (root)    |

### Global Install

#### Normal User (chris)

| sudo | Flags       | gid        | egid       | SUDO_GID   | uid                 | euid                | SUDO_UID    |
| :--: | :---------: | ---------- | ---------- | ---------- | ------------------- | ------------------- | ----------- |
|  No  |             | 20 (staff) | 20 (staff) | n/a        | 501 (chris)         | 501 (chris)         | n/a         |
|  No  |     Yes     | 20 (staff) | 20 (staff) | n/a        | 501 (chris)         | 501 (chris)         | n/a         |
|  Yes |             | 20 (staff) | 20 (staff) | 20 (staff) | 4294967294 (nobody) | 4294967294 (nobody) | 501 (chris) |
|  Yes |     Yes     | 0 (wheel)  | 0 (wheel)  | 20 (staff) | 0 (root)            | 0 (root)            | 501 (chris) |

#### Root User (root)

| sudo | Flags       | gid        | egid       | SUDO_GID   | uid                 | euid                | SUDO_UID    |
| :--: | :---------: | ---------- | ---------- | ---------- | ------------------- | ------------------- | ----------- |
|  No  |             | 0 (wheel)  | 0 (wheel)  | n/a        | 4294967294 (nobody) | 4294967294 (nobody) | n/a         |
|  No  |     Yes     | 0 (wheel)  | 0 (wheel)  | n/a        | 0 (root)            | 0 (root)            | n/a         |
|  Yes |             | 0 (wheel)  | 0 (wheel)  | 0 (wheel)  | 4294967294 (nobody) | 4294967294 (nobody) | 0 (root)    |
|  Yes |     Yes     | 0 (wheel)  | 0 (wheel)  | 0 (wheel)  | 0 (root)            | 0 (root)            | 0 (root)    |

## Conclusion

The post install script is executed as one of the following users:

 1. Current user
 2. nobody
 3. root

Write permissions are only a problem when the package is installed globally. npm skips the
`SUDO_UID` check if the `--global` flag is present and force the user to be `nobody` unless
`--unsafe-perm` is set.
