## shell-jobs

Human-friendly Cron replacement in NodeJS, based on [english-time](https://github.com/azer/english-time). Looking for a handier simple tool? Try: [run-after](http://github.com/azer/run-after)

`.jobs` files look like this;

```bash
echo `date '+%d %h %H:%M'` > /tmp/now # => 1 second
echo "Good Morning" # => every 6am
echo "Hello World" # => 5 seconds, 200 milliseconds
echo "CATS" # => every 4 hours and 15 minutes
echo "YO" # => from tomorrow 6am, every 1h + 5 mins
```

And runs like this;

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
echo "good morning sir!"             # comments here are ok. => 8am
echo "every 4 weeks" >> /tmp/logs    # => 4 weeks
```

Then run it;

```bash
$ shell-jobs new.jobs # globbing enabled
```

Process outputs are hidden by default. Use `--out` to print the stdout of certain jobs;

```bash
$ shell-jobs new.jobs -o 3 # will be printing the stdout of the third job 'echo "this is a new day!"'
```

Wanna run it as a daemon on the background?

```bash
$ shell-jobs new.jobs -d
```

## Debugging

To investigate how shell-jobs parses your document, run `-c` option:

```bash
$ shell-jobs new.jobs -c
```

It'll list all commands with parsed schedulings and delay times.

To let shell-jobs output all the logs:

```bash
DEBUG=* shell-jobs new.jobs
```

## Manual

```

    USAGE

        shell-jobs [files] [options]

    OPTIONS

        -d    --daemon     Run as daemon on the background.
        -s    --stop       Stop the running daemon.
        -c    --confirm    Make sure if given jobs parsed correctly.
        -o    --out        Show outputs from the commands at specified index(es). e.g -o 0, 2, 3
        -v    --version    Show version and exit
        -h    --help       Show help and exit

```

## List of Recognized Time Units

**Milliseconds**

* ms
* millisec
* millisecs
* milliseconds
* millisecond

**Second(s)**

* s
* sec
* secs
* seconds
* second

**Minute(s)**

* m
* min
* mins
* minute
* minutes

**Hour(s)**

* h
* hour
* hours

**Day(s)**

* d
* day
* days

**Week(s)**

* w
* week
* weeks

![](http://distilleryimage4.s3.amazonaws.com/564cccc2831b11e28f3922000aaa2151_6.jpg)
