## shell-jobs

Cron replacement in NodeJS, made for humans.

![](https://dl.dropbox.com/s/ld9s6cpjy3lwbb6/shell-jobs.png)

### Install

```bash
$ npm install -g shell-jobs
```

### Usage

Create a new file and call it `new.jobs`

```bash
echo "every 3.5 hours" >> /tmp/logs  # => 3 hours 30 seconds
echo "every 5 minutes" >> /tmp/logs  # => 5 minutes
echo "every" >> /tmp/logs            # comments here are ok. => 24 hours
echo "once in 3 days" >> /tmp/logs   # => 3 days
```

Then run it;

```bash
$ shell-jobs new.jobs
```

### Manual

```

    USAGE

        shell-jobs [files] [options]

    OPTIONS

        -o    --output     Show outputs from the commands at specified index(es). e.g -o 0, 2, 3
        -v    --version    Show version and exit
        -h    --help       Show help and exit

```

### Coded by BlackBear

![](http://distilleryimage4.s3.amazonaws.com/564cccc2831b11e28f3922000aaa2151_6.jpg)
