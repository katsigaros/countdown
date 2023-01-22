for (let δείκτη = 0; δείκτη <= 2; δείκτη++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - δείκτη)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("GO")
