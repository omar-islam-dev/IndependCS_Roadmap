While playing a racing game (not naming it), I noticed an unusual behavior that I haven’t been able to reproduce.

At the last ramp before the finish line, I jumped. The car landed, and immediately after touching the ground, it bounced again with unexpectedly high force.

That bounce caused the car to pass the finish line while still in mid-air. However, the game didn’t register the end of the race, likely because the finish line trigger wasn’t hit directly.

I was able to keep driving past the finish line. A few meters later, part of the road appeared to be non-solid. The car fell through it and dropped into the void.

While falling:
- Gravity was applied (seemed consistent, possibly 9.8 m/s²).
- Speed increased continuously and looped the speedometer from 0 to 999 multiple times.
- Each loop took slightly longer than the previous one.
- The car's texture degraded over time and eventually went fully black.
- The airtime counter reached 2,147,483,647 and then froze (reached the number 2,147,483,647, which happens to be the highest possible value for a signed 32-bit integer. Not sure if related).

Just speculating on what might’ve happened:
- Finish trigger only detects ground collision.
- No cap or damping on bounce force.
- The area past the finish may be unused/test geometry.
- Potential 32-bit signed int overflow on airtime counter.

Not sure if this is still reproducible, since the game got a major update recently.![[car-texute-glitch.jpg]]

