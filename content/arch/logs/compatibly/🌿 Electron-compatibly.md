##  Symptom
Obsidian refused to launch after a system update.

**Error output:**
```
Unable to find Electron app...
Permission denied
```

```
Unable to find Electron app at /home/omar/ozone-platform=wayland

Cannot find module '/home/omar/ozone-platform=wayland'
```

---

##  Root Cause
After a system upgrade, the symbolic link:
/usr/lib/electron
was redirected from:
/usr/lib/electron37/
→ to:
/usr/lib/electron38/

The AUR build of **Obsidian** depends on **Electron 37**,  
so when it attempted to launch with Electron 38, it failed due to **ABI incompatibility**.

---

##  Technical Breakdown
- `/usr/bin/obsidian` normally runs:
  
bash
  exec electron37 /usr/lib/obsidian/app.asar "$@"
 
- When `/usr/lib/electron` changed to point to `electron38`,  
  the binary mismatch caused the Electron runtime to crash before initializing the app.

- Obsidian’s internal `app.asar` expects Electron APIs from v37,  
  which differ slightly from v38 → resulting in **"Cannot find module"** or **permission errors**.

---

##  Fix
Run Obsidian manually with the correct Electron version:
bash
env ELECTRON_OZONE_PLATFORM_HINT=wayland \
/usr/lib/electron37/electron /usr/lib/obsidian/app.asar \
--enable-features=UseOzonePlatform --ozone-platform=wayland

Or permanently patch the launcher:
bash
sudo nano /usr/bin/obsidian
Replace:
bash
exec /usr/lib/electron /usr/lib/obsidian/app.asar "$@"
With:
bash
exec /usr/lib/electron37/electron /usr/lib/obsidian/app.asar "$@"

---

##  Prevention
- Avoid relying on `/usr/lib/electron` symlink — it changes during updates.  
- Bind each app to the Electron version it was built with.  
- Optionally lock Electron versions in `pacman.conf`:
  
bash
  IgnorePkg = electron electron38
  
  >  *Lesson:* Even the smallest path change in system binaries can cascade into total app failure.  
> Always map, document, and own your environment — that’s true digital sovereignty.


