console.log(`POST INSTALL

gid: ${process.getgid ? process.getgid() : 'n/a'}
egid: ${process.getegid ? process.getegid() : 'n/a'}
sudo gid: ${process.env.SUDO_GID || 'n/a'}

uid: ${process.getuid ? process.getuid() : 'n/a'}
euid: ${process.geteuid ? process.geteuid() : 'n/a'}
sudo uid: ${process.env.SUDO_UID || 'n/a'}
`);
