---
slug: /
sidebar_position: 1
---

# Home

:::info
The content is written with a focus on macOS as it is the OS used at 42 Mulhouse, it should mostly work the same on Linux.
:::

The goal of this website is to provide an introduction to the methods and tools you can use to debug your program during the common core of 42 and beyond.

You will not find in-depth information on the inner working of the tools or their advanced options, for that dig on your own and RTFM.

The tools presented here are very useful, but they are not magic. They are themselves subject to bugs and cannot be trusted at 100%. They are not a replacement for the understanding of your code and the machine they are running on.

I would also suggest spending more time understanding the methods to debug a program than the tools to do so. They will be relevant with most of the programming languages you will encounter.

This project is a work in progress. You can take part in its improvement by opening issues or sending pull request to [its repository](https://github.com/SebastienWae/debugging-42).

## Setup
Before continuing, here are some preliminary steps you should do to set up your machine.

### Homebrew

[Homebrew](https://brew.sh) is a [package manager](https://en.wikipedia.org/wiki/Package_manager), you will use it to install, manage and update software on your machine.

Since we do not have the admin right and the spaces is limited I suggest you to use this script to install it in your goinfre: https://github.com/omimouni/42homebrew

```shell
$ curl -fsSL https://raw.githubusercontent.com/omimouni/42homebrew/master/install-goinfre.sh | zsh
```

### LLVM

[LLVM](https://llvm.org/) is an open source compiler and toolchain that include Clang. By default, macOS ship with an old version of it, you can use Homebrew to install the latest version, this will give you access to better tooling, performance and error handling.

```shell
$ brew install LLVM
```

To be able to use it you will have to update your `PATH` variable, in you `.zshrc` add the following line:

```shell
export PATH=~/goinfre/.brew/opt/llvm/bin:$PATH
```

Now when you type `clang` on your terminal you will use the latest version, but you can still use `cc` to access the default version (required for your projects).

## Debug information

To have more accurate information with the tools, you must generate the debug information while compiling your program.

To do that, you must add the `-g` flag when compiling.

This will add the debug information to the output file or in a `.dSYM` file for macOS.

As it does not load these informations when running normally, your program performance will not be affected.

More flags are available to output these informations, such as `-g3`, `-ggdb`, you can find more details in your [compiler documentation](https://clang.llvm.org/docs/UsersManual.html#controlling-debug-information).

### Example

Without debug information:
```shell {3}
==41461==The signal is caused by a WRITE memory access.
==41461==Hint: address points to the zero page.
    #0 0x10d3a4f4c in main+0x5c (a.out:x86_64+0x100003f4c)
    #1 0x7fff72f3fcc8 in start+0x0 (libdyld.dylib:x86_64+0x1acc8)
```

With debug information:
```shell {3}
==41523==The signal is caused by a WRITE memory access.
==41523==Hint: address points to the zero page.
    #0 0x106f73f4c in main test.c:7
    #1 0x7fff72f3fcc8 in start+0x0 (libdyld.dylib:x86_64+0x1acc8)
```
