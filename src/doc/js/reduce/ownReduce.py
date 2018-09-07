def ownReduce(func, seq):
    tally = seq[0]

    for next in seq[1:]:
        tally = func(tally, next)