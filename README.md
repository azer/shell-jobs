## shell-jobs

Cron replacement in NodeJS, made for humans.

![](https://dl.dropbox.com/s/ld9s6cpjy3lwbb6/shell-jobs.png)

## Install

```bash
$ npm install -g shell-jobs
```

## Usage

Create a new file and call it `new.jobs`

```bash
echo "every 3.5 hours" >> /tmp/logs  # => 3 hours 30 seconds
echo "every 5 minutes" >> /tmp/logs  # => 5 minutes
echo "this is a new day!"            # comments here are ok. => 24 hours
echo "every 4 weeks" >> /tmp/logs    # => 4 weeks
```

Then run it;

```bash
$ shell-jobs new.jobs
```

Process outputs are hidden by default. Use `--out` to print the stdout of certain jobs;

```bash
$ shell-jobs new.jobs -o 3 # will be printing the stdout of the third job 'echo "this is a new day!"'
```

## Manual

```

    USAGE

        shell-jobs [files] [options]

    OPTIONS

        -o    --out        Show outputs from the commands at specified index(es). e.g -o 0, 2, 3
        -v    --version    Show version and exit
        -h    --help       Show help and exit

```

## Daemons

Not implemented yet :(

## Coded by BlackBear

Pull requests are welcome

![](http://distilleryimage4.s3.amazonaws.com/564cccc2831b11e28f3922000aaa2151_6.jpg)
